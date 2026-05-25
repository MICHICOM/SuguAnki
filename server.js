const express = require('express');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const ANKI_CONNECT_URL = process.env.ANKI_CONNECT_URL || 'http://127.0.0.1:8765';

// Request Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper to call AnkiConnect
async function callAnkiConnect(action, params = {}) {
  try {
    const response = await fetch(ANKI_CONNECT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        version: 6,
        params,
      }),
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data.result;
  } catch (error) {
    console.error(`AnkiConnect Error (${action}):`, error.message);
    throw new Error(`AnkiConnect connection failed. Please ensure Anki is running and AnkiConnect is installed. (Detail: ${error.message})`);
  }
}

// 1. Get configuration status
app.get('/api/config', (req, res) => {
  res.json({
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    ankiConnectUrl: ANKI_CONNECT_URL,
  });
});

// 2. Set Gemini API Key (writes to .env file)
app.post('/api/config', (req, res) => {
  const { geminiApiKey } = req.body;
  if (!geminiApiKey || geminiApiKey.trim() === '') {
    return res.status(400).json({ error: 'API key is required' });
  }

  try {
    const envPath = path.join(__dirname, '.env');
    let envContent = '';

    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }

    // Replace or append GEMINI_API_KEY
    if (envContent.includes('GEMINI_API_KEY=')) {
      envContent = envContent.replace(/GEMINI_API_KEY=.*/, `GEMINI_API_KEY=${geminiApiKey}`);
    } else {
      envContent += `\nGEMINI_API_KEY=${geminiApiKey}\n`;
    }

    // Ensure PORT and ANKI_CONNECT_URL are set if not present
    if (!envContent.includes('PORT=')) {
      envContent += `PORT=${PORT}\n`;
    }
    if (!envContent.includes('ANKI_CONNECT_URL=')) {
      envContent += `ANKI_CONNECT_URL=${ANKI_CONNECT_URL}\n`;
    }

    fs.writeFileSync(envPath, envContent.trim() + '\n', 'utf8');
    process.env.GEMINI_API_KEY = geminiApiKey;

    res.json({ success: true, message: 'Gemini API Key saved successfully' });
  } catch (error) {
    console.error('Error saving configuration:', error);
    res.status(500).json({ error: 'Failed to write configuration file' });
  }
});

// 3. Get Anki Connection Status & Decks
app.get('/api/anki/status', async (req, res) => {
  try {
    // Attempt to fetch decks as a connectivity check
    const decks = await callAnkiConnect('deckNames');
    res.json({ connected: true, decks });
  } catch (error) {
    res.json({ connected: false, error: error.message });
  }
});

// 4. Create Anki Deck
app.post('/api/anki/create-deck', async (req, res) => {
  const { deckName } = req.body;
  if (!deckName) {
    return res.status(400).json({ error: 'Deck name is required' });
  }
  try {
    const result = await callAnkiConnect('createDeck', { deck: deckName });
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Generate Vocabulary Details with Gemini
app.post('/api/generate', async (req, res) => {
  const { word, sourceLang = 'English', targetLang = 'Japanese', model = 'gemini-2.5-flash' } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(400).json({ error: 'Gemini API Key is not configured.' });
  }
  if (!word || word.trim() === '') {
    return res.status(400).json({ error: 'Word is required.' });
  }

  // Ensure model is valid (prevent injection)
  const validModels = ['gemini-3.1-flash-lite', 'gemini-2.5-flash', 'gemini-3.5-flash'];
  const selectedModel = validModels.includes(model) ? model : 'gemini-3.1-flash-lite';

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${apiKey}`;

  const prompt = `Analyze the vocabulary word: "${word.trim()}" in ${sourceLang}.
You must return the dictionary base form (原型) of the word in ${sourceLang}, its meaning in ${targetLang}, the core image/essence (コアイメージ) of the word in ${targetLang}, the etymology/word origin (語源) of the word in ${targetLang} (explain prefixes, roots, suffixes, or origin in detail; do not output a single character or empty parentheses), and a helpful example sentence in ${sourceLang} with its translation in ${targetLang}.`;

  const payload = {
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          baseForm: {
            type: "STRING",
            description: `The dictionary base form (原型) of the word in ${sourceLang}. Use standard capitalization rules of ${sourceLang} (e.g. in German, nouns MUST start with a capital letter like 'Haus', verbs lowercase like 'gehen'; in other languages like English, lowercase). Do NOT include the article in this field.`
          },
          gender: {
            type: "STRING",
            description: "The grammatical gender of the word if applicable ('masculine', 'feminine', 'neuter', or 'none')."
          },
          article: {
            type: "STRING",
            description: `The default singular definite article commonly learned with this word in ${sourceLang} (e.g., 'der', 'die', 'das' for German; 'le', 'la' for French; 'el', 'la' for Spanish). Leave empty if not applicable or not a noun.`
          },
          meaning: {
            type: "STRING",
            description: `Concise meaning(s) (意味) of the word in ${targetLang}.`
          },
          coreImage: {
            type: "STRING",
            description: `The core image (コアイメージ), essential nuance, or visual/mental image of the word in ${targetLang}. Explain the fundamental concept.`
          },
          etymology: {
            type: "STRING",
            description: `Detailed etymology (語源) or word origin of the word in ${targetLang}. Explain prefix, roots, suffixes, or origin. Do NOT return just a single character, parenthesis, or symbol.`
          },
          exampleSentence: {
            type: "OBJECT",
            properties: {
              original: {
                type: "STRING",
                description: `A natural example sentence in the source language (${sourceLang}) demonstrating the word's usage.`
              },
              translation: {
                type: "STRING",
                description: `Translation of the example sentence in the target language (${targetLang}).`
              }
            },
            required: ["original", "translation"]
          }
        },
        required: ["baseForm", "gender", "article", "meaning", "coreImage", "etymology", "exampleSentence"]
      }
    }
  };

  try {
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API returned HTTP ${response.status}: ${errText}`);
    }

    const data = await response.json();
    
    if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content || !data.candidates[0].content.parts || data.candidates[0].content.parts.length === 0) {
      throw new Error('Invalid response structure from Gemini API');
    }

    const textResponse = data.candidates[0].content.parts[0].text;
    console.log('Gemini Response:', textResponse);
    const parsedData = JSON.parse(textResponse);
    
    res.json(parsedData);
  } catch (error) {
    console.error('Gemini API Error:', error.message);
    res.status(500).json({ error: `Failed to generate word details. ${error.message}` });
  }
});

// 6. Add Note to Anki
app.post('/api/anki/add', async (req, res) => {
  const { deckName, modelName, fields, tags } = req.body;

  if (!deckName) {
    return res.status(400).json({ error: 'Deck name is required.' });
  }
  if (!fields || !fields.Front || !fields.Back) {
    return res.status(400).json({ error: 'Both Front and Back fields are required.' });
  }

  const noteParams = {
    note: {
      deckName,
      modelName: modelName || 'Basic',
      fields,
      options: {
        allowDuplicate: false,
      },
      tags: tags || ['AnkiLLM']
    }
  };

  try {
    const result = await callAnkiConnect('addNote', noteParams);
    res.json({ success: true, noteId: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
