package com.michicom.ankillm;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.database.Cursor;
import android.net.Uri;
import com.getcapacitor.JSObject;
import com.getcapacitor.JSArray;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.PermissionState;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import android.util.Log;

import java.util.ArrayList;
import java.util.List;

@CapacitorPlugin(
    name = "AnkiDroid",
    permissions = {
        @Permission(
            strings = {"com.ichi2.anki.permission.READ_WRITE_DATABASE"},
            alias = "database"
        )
    }
)
public class AnkiDroidPlugin extends Plugin {

    private static final String AUTHORITY = "com.ichi2.anki.flashcards";
    private static final Uri AUTHORITY_URI = Uri.parse("content://" + AUTHORITY);
    
    private static final Uri DECKS_URI = Uri.withAppendedPath(AUTHORITY_URI, "decks");
    private static final Uri MODELS_URI = Uri.withAppendedPath(AUTHORITY_URI, "models");
    private static final Uri NOTES_URI = Uri.withAppendedPath(AUTHORITY_URI, "notes");

    @PluginMethod
    public void checkPermission(PluginCall call) {
        JSObject ret = new JSObject();
        boolean hasPermission = getPermissionState("database") == PermissionState.GRANTED;
        ret.put("granted", hasPermission);
        call.resolve(ret);
    }

    @PluginMethod
    public void requestPermission(PluginCall call) {
        if (getPermissionState("database") != PermissionState.GRANTED) {
            requestPermissionForAlias("database", call, "permissionCallback");
        } else {
            JSObject ret = new JSObject();
            ret.put("granted", true);
            call.resolve(ret);
        }
    }

    @PermissionCallback
    private void permissionCallback(PluginCall call) {
        JSObject ret = new JSObject();
        boolean hasPermission = getPermissionState("database") == PermissionState.GRANTED;
        ret.put("granted", hasPermission);
        call.resolve(ret);
    }

    @PluginMethod
    public void getDecks(PluginCall call) {
        if (getPermissionState("database") != PermissionState.GRANTED) {
            call.reject("Permission denied. Database access is required.");
            return;
        }

        try {
            ContentResolver resolver = getContext().getContentResolver();
            Cursor cursor = resolver.query(DECKS_URI, new String[]{"deck_id", "deck_name"}, null, null, null);
            
            JSArray jsArray = new JSArray();
            if (cursor != null) {
                while (cursor.moveToNext()) {
                    int nameIndex = cursor.getColumnIndex("deck_name");
                    if (nameIndex != -1) {
                        jsArray.put(cursor.getString(nameIndex));
                    }
                }
                cursor.close();
            }
            
            JSObject ret = new JSObject();
            ret.put("decks", jsArray);
            call.resolve(ret);
        } catch (SecurityException se) {
            call.reject("Security Exception: Please ensure 'AnkiDroid API を有効にする' is turned ON in AnkiDroid's Advanced Settings.");
        } catch (Exception e) {
            call.reject("Failed to get decks: " + e.getMessage());
        }
    }

    @PluginMethod
    public void createDeck(PluginCall call) {
        if (getPermissionState("database") != PermissionState.GRANTED) {
            call.reject("Permission denied. Database access is required.");
            return;
        }

        String deckName = call.getString("deckName");
        if (deckName == null) {
            call.reject("deckName is required");
            return;
        }

        try {
            ContentResolver resolver = getContext().getContentResolver();
            ContentValues values = new ContentValues();
            values.put("name", deckName);
            resolver.insert(DECKS_URI, values);
            call.resolve();
        } catch (SecurityException se) {
            call.reject("Security Exception: Please ensure 'AnkiDroid API を有効にする' is turned ON in AnkiDroid.");
        } catch (Exception e) {
            call.reject("Failed to create deck: " + e.getMessage());
        }
    }

    @PluginMethod
    public void addNote(PluginCall call) {
        if (getPermissionState("database") != PermissionState.GRANTED) {
            call.reject("Permission denied. Database access is required.");
            return;
        }

        String deckName = call.getString("deckName");
        JSObject fieldsObj = call.getObject("fields");
        
        if (deckName == null || fieldsObj == null) {
            call.reject("deckName and fields are required");
            return;
        }

        try {
            ContentResolver resolver = getContext().getContentResolver();
            
            // 1. Get or Create Deck
            long deckId = getDeckId(resolver, deckName);
            if (deckId == -1) {
                ContentValues values = new ContentValues();
                values.put("name", deckName);
                Uri newDeckUri = resolver.insert(DECKS_URI, values);
                if (newDeckUri != null) {
                    deckId = Long.parseLong(newDeckUri.getLastPathSegment());
                }
            }

            if (deckId == -1) {
                call.reject("Failed to get or create deck ID");
                return;
            }

            // 2. Get Model ID (basic or fallback to first)
            long modelId = getModelId(resolver, "Basic");
            if (modelId == -1) {
                modelId = getModelId(resolver, "基本");
            }
            if (modelId == -1) {
                modelId = getFirstModelId(resolver);
            }

            if (modelId == -1) {
                call.reject("No card models (note types) found in AnkiDroid. Please create at least one card type.");
                return;
            }

            // 3. Insert Note
            String front = fieldsObj.getString("Front");
            String back = fieldsObj.getString("Back");
            
            ContentValues noteValues = new ContentValues();
            noteValues.put("mid", modelId);
            noteValues.put("tags", "AnkiLLM");
            // Basic fields are separated by unit separator (\u001f)
            noteValues.put("flds", front + "\u001f" + back);
            
            Log.i("AnkiLLM", "Attempting to insert note for Deck ID: " + deckId + ", Model ID: " + modelId);

            Uri newNoteUri = resolver.insert(NOTES_URI, noteValues);
            if (newNoteUri != null) {
                int cardsGenerated = 0;
                try {
                    Uri cardsUri = Uri.withAppendedPath(newNoteUri, "cards");
                    Cursor cardsCursor = resolver.query(cardsUri, null, null, null, null);
                    if (cardsCursor != null) {
                        while (cardsCursor.moveToNext()) {
                            int ordIndex = cardsCursor.getColumnIndex("ord");
                            if (ordIndex != -1) {
                                String ord = cardsCursor.getString(ordIndex);
                                Uri cardUri = Uri.withAppendedPath(cardsUri, ord);
                                ContentValues cardValues = new ContentValues();
                                cardValues.put("deck_id", deckId);
                                resolver.update(cardUri, cardValues, null, null);
                                cardsGenerated++;
                            }
                        }
                        cardsCursor.close();
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }

                JSObject ret = new JSObject();
                ret.put("noteId", newNoteUri.getLastPathSegment());
                ret.put("cardsGenerated", cardsGenerated);
                Log.i("AnkiLLM", "Successfully generated " + cardsGenerated + " cards for Note ID " + newNoteUri.getLastPathSegment());
                call.resolve(ret);
            } else {
                call.reject("Failed to insert note");
            }
        } catch (SecurityException se) {
            call.reject("Security Exception: Please ensure 'AnkiDroid API を有効にする' is turned ON in AnkiDroid.");
        } catch (Exception e) {
            call.reject("Failed to add note: " + e.getMessage());
        }
    }

    private long getDeckId(ContentResolver resolver, String deckName) {
        Cursor cursor = resolver.query(DECKS_URI, new String[]{"deck_id", "deck_name"}, null, null, null);
        long id = -1;
        if (cursor != null) {
            while (cursor.moveToNext()) {
                int nameIndex = cursor.getColumnIndex("deck_name");
                if (nameIndex != -1) {
                    String name = cursor.getString(nameIndex);
                    if (deckName.equals(name)) {
                        int idIndex = cursor.getColumnIndex("deck_id");
                        if (idIndex != -1) {
                            id = cursor.getLong(idIndex);
                            break;
                        }
                    }
                }
            }
            cursor.close();
        }
        return id;
    }

    private long getModelId(ContentResolver resolver, String modelName) {
        Cursor cursor = resolver.query(MODELS_URI, new String[]{"_id", "name"}, null, null, null);
        long id = -1;
        if (cursor != null) {
            while (cursor.moveToNext()) {
                int nameIndex = cursor.getColumnIndex("name");
                if (nameIndex != -1) {
                    String name = cursor.getString(nameIndex);
                    if (modelName.equals(name)) {
                        int idIndex = cursor.getColumnIndex("_id");
                        if (idIndex != -1) {
                            id = cursor.getLong(idIndex);
                            break;
                        }
                    }
                }
            }
            cursor.close();
        }
        return id;
    }

    private long getFirstModelId(ContentResolver resolver) {
        Cursor cursor = resolver.query(MODELS_URI, new String[]{"_id", "type"}, null, null, null);
        long id = -1;
        if (cursor != null) {
            while (cursor.moveToNext()) {
                int typeIndex = cursor.getColumnIndex("type");
                int type = -1;
                if (typeIndex != -1) {
                    type = cursor.getInt(typeIndex);
                }
                
                // type 0 is normal model. We want to avoid cloze models (type 1)
                if (type == 0 || typeIndex == -1) {
                    int idIndex = cursor.getColumnIndex("_id");
                    if (idIndex != -1) {
                        id = cursor.getLong(idIndex);
                        break;
                    }
                }
            }
            cursor.close();
        }
        return id;
    }
}
