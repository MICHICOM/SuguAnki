const languageNames = {
  ja: {
    English: "英語 (English)",
    Japanese: "日本語 (Japanese)",
    German: "ドイツ語 (German)",
    French: "フランス語 (French)",
    Spanish: "スペイン語 (Spanish)",
    Italian: "イタリア語 (Italian)",
    Chinese: "中国語 (Chinese)",
    Korean: "韓国語 (Korean)",
    Russian: "ロシア語 (Russian)",
    Portuguese: "ポルトガル語 (Portuguese)",
    Dutch: "オランダ語 (Dutch)",
    Arabic: "アラビア語 (Arabic)",
    "Auto-detect": "自動検出 (Auto)"
  },
  en: {
    English: "English",
    Japanese: "Japanese",
    German: "German",
    French: "French",
    Spanish: "Spanish",
    Italian: "Italian",
    Chinese: "Chinese",
    Korean: "Korean",
    Russian: "Russian",
    Portuguese: "Portuguese",
    Dutch: "Dutch",
    Arabic: "Arabic",
    "Auto-detect": "Auto Detect"
  }
};

const translations = {
  ja: {
    app_lang_label: "システム言語",
    model_label: "AIモデル",
    get_api_key: "APIキーの取得はこちらから (Get API Key)",
    model_31_lite: "Gemini 3.1 Flash Lite (推奨・1日500回)",
    model_25_flash: "Gemini 2.5 Flash (1日20回)",
    model_35_flash: "Gemini 3.5 Flash (最新・1日20回)",
    settings: "デッキ設定",
    settings_title: "アプリ設定",
    save: "保存",
    api_key_tip: "キーはローカル環境の <code>.env</code> ファイルに安全に保存されます。",
    deck_label: "登録先デッキ (Deck)",
    no_decks: "デッキがありません (No decks)",
    loading: "ロード中...",
    input_label: "単語入力",
    learn_label: "学ぶ言語",
    explain_label: "説明の言語",
    word_label: "単語を入力",
    word_placeholder: "例: ephemeral, Haus, éphémère",
    generate_btn: "AIでカード情報を生成",
    generating: "AIで生成中...",
    recent_title: "最近追加した単語",
    recent_empty: "このセッションで追加されたカードはありません",
    preview_title: "生成プレビュー",
    preview_placeholder: "単語を入力して生成すると、ここにAnkiカードのプレビューが表示されます。",
    tab_front: "表面 (Front)",
    tab_back: "裏面 (Back)",
    tab_details: "詳細データ",
    preview_front_tag: "Anki 表面プレビュー",
    preview_back_tag: "Anki 裏面プレビュー",
    field_base: "原型 (Base Form)",
    field_article: "冠詞 (Article)",
    field_gender: "性別 (Gender)",
    gender_none: "なし (None)",
    gender_masc: "男性 (Masculine)",
    gender_fem: "女性 (Feminine)",
    gender_neuter: "中性 (Neuter)",
    field_meaning: "意味 (Meaning)",
    field_core: "コアイメージ (Core Image)",
    field_etymology: "語源 (Etymology)",
    field_example_org: "例文 [学習言語] (Example Original)",
    field_example_tr: "例文 [説明言語] (Example Translation)",
    edit_tip: "💡 登録前にデータを微調整できます。調整した内容は「裏面プレビュー」に即時反映されます。",
    register_btn: "このカードをAnkiに登録",
    new_deck_title: "新しいデッキの作成",
    new_deck_desc: "作成するデッキ名を入力してください（ネストする階層は \"English::Vocab\" のようにコロン2つで区切って指定できます）。",
    cancel: "キャンセル",
    create: "作成",
    status_connected: "接続中",
    status_disconnected: "未接続",
    status_configured: "設定済",
    status_missing: "未設定",
    status_connected_desc: "AnkiConnectと接続されています",
    status_disconnected_desc: "AnkiConnectが見つかりません。Ankiが起動しており、アドオンがインストールされていることを確認してください。",
    toast_api_key_required: "APIキーを入力してください。",
    toast_api_key_saved: "APIキーを保存しました。",
    toast_server_error: "サーバーとの通信に失敗しました。",
    toast_anki_disconnected: "Ankiに接続されていません。",
    toast_enter_deck_name: "デッキ名を入力してください。",
    toast_deck_created: "デッキ \"{name}\" を作成しました。",
    toast_gemini_key_required: "Gemini APIキーを設定してください。",
    toast_gen_complete: "カードの生成が完了しました！",
    toast_select_deck: "登録先デッキを選択してください。",
    toast_add_success: "Ankiデッキ \"{name}\" に登録しました！",
    toast_add_error: "登録エラー: "
  },
  en: {
    app_lang_label: "System Language",
    model_label: "AI Model",
    get_api_key: "Get API Key Here",
    model_31_lite: "Gemini 3.1 Flash Lite (Recommended, 500/day)",
    model_25_flash: "Gemini 2.5 Flash (20/day)",
    model_35_flash: "Gemini 3.5 Flash (Latest, 20/day)",
    settings: "Deck Settings",
    settings_title: "App Settings",
    save: "Save",
    api_key_tip: "The key is securely saved in your local <code>.env</code> file.",
    deck_label: "Target Deck",
    no_decks: "No decks found",
    loading: "Loading...",
    input_label: "Word Input",
    learn_label: "Language to Learn",
    explain_label: "Explanation Language",
    word_label: "Enter Word",
    word_placeholder: "e.g., ephemeral, Haus, éphémère",
    generate_btn: "Generate Card Info with AI",
    generating: "Generating with AI...",
    recent_title: "Recently Added",
    recent_empty: "No cards added in this session",
    preview_title: "Generation Preview",
    preview_placeholder: "Generate a card to see the preview here.",
    tab_front: "Front",
    tab_back: "Back",
    tab_details: "Detail Data",
    preview_front_tag: "Anki Front Preview",
    preview_back_tag: "Anki Back Preview",
    field_base: "Base Form",
    field_article: "Article",
    field_gender: "Gender",
    gender_none: "None",
    gender_masc: "Masculine",
    gender_fem: "Feminine",
    gender_neuter: "Neuter",
    field_meaning: "Meaning",
    field_core: "Core Image",
    field_etymology: "Etymology",
    field_example_org: "Example (Original)",
    field_example_tr: "Example (Translation)",
    edit_tip: "💡 You can fine-tune the data before adding. Changes reflect instantly on the Back preview.",
    register_btn: "Register Card to Anki",
    new_deck_title: "Create New Deck",
    new_deck_desc: "Enter a name for the new deck (you can nest decks using double colons like \"English::Vocab\").",
    cancel: "Cancel",
    create: "Create",
    status_connected: "Connected",
    status_disconnected: "Offline",
    status_configured: "Configured",
    status_missing: "Not Set",
    status_connected_desc: "Connected to AnkiConnect",
    status_disconnected_desc: "AnkiConnect not found. Make sure Anki is running and the addon is installed.",
    toast_api_key_required: "Please enter an API Key.",
    toast_api_key_saved: "API Key saved successfully.",
    toast_server_error: "Failed to communicate with the server.",
    toast_anki_disconnected: "Not connected to Anki.",
    toast_enter_deck_name: "Please enter a deck name.",
    toast_deck_created: "Deck \"{name}\" created successfully.",
    toast_gemini_key_required: "Please configure your Gemini API Key first.",
    toast_gen_complete: "Card generation complete!",
    toast_select_deck: "Please select a target deck.",
    toast_add_success: "Registered to Anki deck \"{name}\"!",
    toast_add_error: "Registration error: "
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    ankiConnected: false,
    geminiConfigured: false,
    decks: [],
    currentData: null, // Holds the generated/modified word details
    recentCards: JSON.parse(localStorage.getItem('anki_llm_recent') || '[]'),
    appLang: localStorage.getItem('anki_llm_app_lang') || 'ja',
  };

  // DOM Elements
  const appLangSelect = document.getElementById('app-lang-select');
  const ankiStatusBadge = document.getElementById('anki-status');
  const geminiStatusBadge = document.getElementById('gemini-status');
  const geminiKeyInput = document.getElementById('gemini-key-input');
  const saveKeyBtn = document.getElementById('save-key-btn');
  const sourceLangSelect = document.getElementById('source-lang-select');
  const targetLangSelect = document.getElementById('target-lang-select');
  const deckSelect = document.getElementById('deck-select');
  const newDeckBtn = document.getElementById('new-deck-btn');
  const modelSelect = document.getElementById('model-select');
  
  const vocabForm = document.getElementById('vocab-form');
  const wordInput = document.getElementById('word-input');
  const generateBtn = document.getElementById('generate-btn');
  const generateBtnText = generateBtn.querySelector('.btn-text');
  const generateSpinner = generateBtn.querySelector('.spinner');
  
  const previewPlaceholder = document.getElementById('preview-placeholder');
  const previewContent = document.getElementById('preview-content');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const previewContainers = document.querySelectorAll('.anki-preview-container');
  
  const previewFrontWord = document.getElementById('preview-front-word');
  const previewBackHtmlRender = document.getElementById('preview-back-html-render');
  
  // Field Editor inputs
  const fieldBaseForm = document.getElementById('field-base-form');
  const fieldArticle = document.getElementById('field-article');
  const fieldGender = document.getElementById('field-gender');
  const fieldMeaning = document.getElementById('field-meaning');
  const fieldCoreImage = document.getElementById('field-core-image');
  const fieldEtymology = document.getElementById('field-etymology');
  const fieldExampleEn = document.getElementById('field-example-en');
  const fieldExampleJa = document.getElementById('field-example-ja');
  
  const addToAnkiBtn = document.getElementById('add-to-anki-btn');
  const recentList = document.getElementById('recent-list');
  
  // Modal Elements
  const deckModal = document.getElementById('deck-modal');
  const newDeckInput = document.getElementById('new-deck-input');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const modalCreateBtn = document.getElementById('modal-create-btn');
  
  const settingsModal = document.getElementById('settings-modal');
  const openSettingsBtn = document.getElementById('open-settings-btn');
  const settingsCloseBtn = document.getElementById('settings-close-btn');
  
  // Toast Element
  const toast = document.getElementById('toast');
  const toastMessage = toast.querySelector('.toast-message');

  // Initialize Language
  applyLanguage(state.appLang);

  // Initialize Status checks with a short delay for Capacitor
  setTimeout(checkSystemStatus, 500);
  renderRecentCards();

  // Restore language selections
  const savedSourceLang = localStorage.getItem('anki_llm_source_lang');
  if (savedSourceLang && Array.from(sourceLangSelect.options).some(o => o.value === savedSourceLang)) {
    sourceLangSelect.value = savedSourceLang;
  }
  const savedTargetLang = localStorage.getItem('anki_llm_target_lang');
  if (savedTargetLang && Array.from(targetLangSelect.options).some(o => o.value === savedTargetLang)) {
    targetLangSelect.value = savedTargetLang;
  }
  const savedModel = localStorage.getItem('anki_llm_model');
  if (savedModel && Array.from(modelSelect.options).some(o => o.value === savedModel)) {
    modelSelect.value = savedModel;
  }

  sourceLangSelect.addEventListener('change', () => {
    localStorage.setItem('anki_llm_source_lang', sourceLangSelect.value);
  });
  targetLangSelect.addEventListener('change', () => {
    localStorage.setItem('anki_llm_target_lang', targetLangSelect.value);
  });
  modelSelect.addEventListener('change', () => {
    localStorage.setItem('anki_llm_model', modelSelect.value);
  });

  // --- Translation Engine ---
  function applyLanguage(lang) {
    state.appLang = lang;
    appLangSelect.value = lang;

    // Update all static texts with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // If it's the tip, we might want to preserve <code> tags, so use innerHTML
        if (key === 'api_key_tip' || key === 'edit_tip' || key === 'new_deck_desc') {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update placeholders
    wordInput.placeholder = translations[lang].word_placeholder;

    // Update language select option texts dynamically
    if (sourceLangSelect && targetLangSelect) {
      const currentSource = sourceLangSelect.value;
      const currentTarget = targetLangSelect.value;
      
      Array.from(sourceLangSelect.options).forEach(opt => {
        const val = opt.value;
        if (languageNames[lang] && languageNames[lang][val]) {
          opt.textContent = languageNames[lang][val];
        }
      });
      
      Array.from(targetLangSelect.options).forEach(opt => {
        const val = opt.value;
        if (languageNames[lang] && languageNames[lang][val]) {
          opt.textContent = languageNames[lang][val];
        }
      });
      
      sourceLangSelect.value = currentSource;
      targetLangSelect.value = currentTarget;
    }

    // Refresh UI components that contain dynamic language text
    updateAnkiStatusUI(state.ankiConnected);
    updateGeminiStatusUI(state.geminiConfigured);
    renderRecentCards();
  }

  appLangSelect.addEventListener('change', () => {
    const selectedLang = appLangSelect.value;
    localStorage.setItem('anki_llm_app_lang', selectedLang);
    applyLanguage(selectedLang);
    if (state.currentData) {
      updatePreview(state.currentData);
    }
  });

  // --- API / Backend Interactions ---
  const ANKI_CONNECT_URL = 'http://localhost:8765';

  // Native platform detection
  const isAndroidApp = window.Capacitor && window.Capacitor.isNativePlatform();

  // Hide the new deck button on Android
  if (isAndroidApp) {
    newDeckBtn.style.display = 'none';
  }

  async function callAnkiConnect(action, params = {}) {
    if (isAndroidApp) {
      try {
        const { AnkiDroid } = window.Capacitor.Plugins;
        if (action === 'deckNames') {
          const result = await AnkiDroid.getDecks();
          return result.decks;
        } else if (action === 'createDeck') {
          await AnkiDroid.createDeck({ deckName: params.deck });
          return true;
        } else if (action === 'addNote') {
          const result = await AnkiDroid.addNote({
            deckName: params.note.deckName,
            fields: params.note.fields
          });
          return result;
        }
        throw new Error(`Unsupported native action: ${action}`);
      } catch (error) {
        console.error('Native AnkiDroid Error:', error);
        throw new Error(error.message || `AnkiDroid connection failed.`);
      }
    } else {
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
        throw new Error(`AnkiConnect connection failed. Please ensure Anki or AnkiDroid is running and API integration is enabled.`);
      }
    }
  }

  // Check Configuration & Anki Connection
  async function checkSystemStatus() {
    try {
      // 1. Check Gemini config in localStorage
      const savedApiKey = localStorage.getItem('anki_llm_gemini_api_key');
      state.geminiConfigured = !!savedApiKey;
      
      updateGeminiStatusUI(state.geminiConfigured);

      // 2. Request Android permission if native app
      if (isAndroidApp) {
        const plugins = window.Capacitor.Plugins;
        if (!plugins || !plugins.AnkiDroid) {
          throw new Error("ネイティブプラグイン AnkiDroid が検出されませんでした。");
        }
        const { AnkiDroid } = plugins;
        let permStatus = await AnkiDroid.checkPermission();
        if (!permStatus.granted) {
          permStatus = await AnkiDroid.requestPermission();
        }
        if (!permStatus.granted) {
          throw new Error("AnkiDroidへのデータベースアクセス権限がありません。設定から許可してください。");
        }
      }

      // 3. Check Anki connectivity
      const decks = await callAnkiConnect('deckNames');
      state.ankiConnected = true;
      state.decks = decks;
      updateAnkiStatusUI(true);
      populateDecks(state.decks);
    } catch (error) {
      console.error('Status check failed:', error);
      updateAnkiStatusUI(false, error.message);
      disableAnkiControls();
      showToast("Anki接続エラー: " + error.message, 'error');
    }
  }

  // Save Gemini Key
  saveKeyBtn.addEventListener('click', async () => {
    const key = geminiKeyInput.value.trim();
    if (!key) {
      showToast(translations[state.appLang].toast_api_key_required, 'error');
      return;
    }

    saveKeyBtn.disabled = true;
    try {
      localStorage.setItem('anki_llm_gemini_api_key', key);
      showToast(translations[state.appLang].toast_api_key_saved, 'success');
      state.geminiConfigured = true;
      updateGeminiStatusUI(true);
      geminiKeyInput.value = '';
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      saveKeyBtn.disabled = false;
    }
  });

  // Populate Deck dropdown
  function populateDecks(decks) {
    decks = (decks || []).filter(d => d); // Filter out null/empty strings
    deckSelect.innerHTML = '';
    if (decks.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = translations[state.appLang].no_decks || "デッキがありません"; // Placeholder
      deckSelect.appendChild(opt);
      return;
    }

    decks.forEach(deck => {
      const opt = document.createElement('option');
      opt.value = deck;
      opt.textContent = deck;
      deckSelect.appendChild(opt);
    });

    // Restore selected deck from localStorage
    const savedDeck = localStorage.getItem('anki_llm_selected_deck');
    if (savedDeck && decks.includes(savedDeck)) {
      deckSelect.value = savedDeck;
    } else {
      // Find Default deck if available, else first
      const defaultOpt = decks.find(d => d.toLowerCase() === 'default') || decks[0];
      deckSelect.value = defaultOpt;
    }
  }

  deckSelect.addEventListener('change', () => {
    localStorage.setItem('anki_llm_selected_deck', deckSelect.value);
  });

  // Create New Deck Modal events
  newDeckBtn.addEventListener('click', () => {
    if (!state.ankiConnected) {
      showToast(translations[state.appLang].toast_anki_disconnected, 'error');
      return;
    }
    if (isAndroidApp) {
      alert("Android版ではアプリから直接デッキを作成できません。\nお手数ですが、一度 AnkiDroid アプリを開いてデッキを作成してから、再度お試しください。");
      return;
    }
    deckModal.classList.remove('hide');
    newDeckInput.value = '';
    newDeckInput.focus();
  });

  modalCancelBtn.addEventListener('click', () => {
    deckModal.classList.add('hide');
  });

  modalCreateBtn.addEventListener('click', async () => {
    const deckName = newDeckInput.value.trim();
    if (!deckName) {
      showToast(translations[state.appLang].toast_enter_deck_name, 'error');
      return;
    }

    modalCreateBtn.disabled = true;
    try {
      await callAnkiConnect('createDeck', { deck: deckName });
      showToast(translations[state.appLang].toast_deck_created.replace('{name}', deckName), 'success');
      
      // Refresh decks list
      state.decks.push(deckName);
      populateDecks(state.decks);
      deckSelect.value = deckName;
      localStorage.setItem('anki_llm_selected_deck', deckName);
      
      deckModal.classList.add('hide');
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      modalCreateBtn.disabled = false;
    }
  });

  // Settings Modal events
  openSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('hide');
    checkSystemStatus();
  });

  settingsCloseBtn.addEventListener('click', () => {
    settingsModal.classList.add('hide');
  });

  // Generate Vocab Card Action
  vocabForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const word = wordInput.value.trim();
    if (!word) return;

    const apiKey = localStorage.getItem('anki_llm_gemini_api_key');
    if (!apiKey) {
      showToast(translations[state.appLang].toast_gemini_key_required, 'warning');
      return;
    }

    // Toggle loading UI
    generateBtn.disabled = true;
    generateBtnText.textContent = translations[state.appLang].generating;
    generateSpinner.classList.remove('hide');
    previewPlaceholder.classList.remove('hide');
    previewContent.classList.add('hide');

    try {
      const sourceLang = sourceLangSelect.value;
      const targetLang = targetLangSelect.value;
      const model = modelSelect.value;

      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const prompt = `Analyze the vocabulary word: "${word}" in ${sourceLang}.
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

      const resData = await response.json();
      
      if (!resData.candidates || resData.candidates.length === 0 || !resData.candidates[0].content || !resData.candidates[0].content.parts || resData.candidates[0].content.parts.length === 0) {
        throw new Error('Invalid response structure from Gemini API');
      }

      const textResponse = resData.candidates[0].content.parts[0].text;
      const parsedData = JSON.parse(textResponse);

      state.currentData = parsedData;
      showToast(translations[state.appLang].toast_gen_complete, 'success');

      // Populate card editing values
      populateFieldsEditor(parsedData);
      updatePreview(parsedData);

      previewPlaceholder.classList.add('hide');
      previewContent.classList.remove('hide');
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      generateBtn.disabled = false;
      generateBtnText.textContent = translations[state.appLang].generate_btn;
      generateSpinner.classList.add('hide');
    }
  });

  // Populate Input Fields
  function populateFieldsEditor(data) {
    fieldBaseForm.value = data.baseForm;
    fieldArticle.value = data.article || '';
    fieldGender.value = data.gender || 'none';
    fieldMeaning.value = data.meaning;
    fieldCoreImage.value = data.coreImage;
    fieldEtymology.value = data.etymology || '';
    fieldExampleEn.value = data.exampleSentence.original;
    fieldExampleJa.value = data.exampleSentence.translation;
  }

  // Update visual card previews based on values
  function updatePreview(data) {
    previewFrontWord.innerHTML = generateFrontHtml(data);
    previewBackHtmlRender.innerHTML = generateBackHtml(data);
  }

  // Watch Field Editor changes to dynamically update preview
  const liveInputs = [fieldBaseForm, fieldArticle, fieldGender, fieldMeaning, fieldCoreImage, fieldEtymology, fieldExampleEn, fieldExampleJa];
  liveInputs.forEach(input => {
    const eventName = input.tagName === 'SELECT' ? 'change' : 'input';
    input.addEventListener(eventName, () => {
      if (!state.currentData) return;

      // Update state data from fields
      state.currentData.baseForm = fieldBaseForm.value;
      state.currentData.article = fieldArticle.value;
      state.currentData.gender = fieldGender.value;
      state.currentData.meaning = fieldMeaning.value;
      state.currentData.coreImage = fieldCoreImage.value;
      state.currentData.etymology = fieldEtymology.value;
      state.currentData.exampleSentence = {
        original: fieldExampleEn.value,
        translation: fieldExampleJa.value
      };

      updatePreview(state.currentData);
    });
  });

  // Register to Anki
  addToAnkiBtn.addEventListener('click', async () => {
    if (!state.currentData) return;
    if (!state.ankiConnected) {
      showToast(translations[state.appLang].toast_anki_disconnected, 'error');
      return;
    }

    const deckName = deckSelect.value;
    if (!deckName) {
      showToast(translations[state.appLang].toast_select_deck, 'error');
      return;
    }

    addToAnkiBtn.disabled = true;
    
    // Construct Card HTML
    const frontText = generateFrontHtml(state.currentData);
    const backHtml = generateBackHtml(state.currentData);

    const noteParams = {
      note: {
        deckName,
        modelName: 'Basic',
        fields: {
          Front: frontText,
          Back: backHtml
        },
        options: {
          allowDuplicate: false,
        },
        tags: ['AnkiLLM']
      }
    };

    try {
      const res = await callAnkiConnect('addNote', noteParams);
      
      if (res && res.result === null) {
        throw new Error(res.error);
      }
      
      if (res && res.cardsGenerated === 0) {
        showToast("Ankiにデータは送信されましたが、カードが生成されませんでした。Ankiのノートタイプ(基本など)のフィールド設定を確認してください。", 'error');
      } else {
        showToast(translations[state.appLang].toast_add_success.replace('{name}', deckName), 'success');
      }
      
      // Save to recent list
      saveToRecent(state.currentData.baseForm, state.currentData.meaning, deckName);
      
      // Clear input and reset preview
      wordInput.value = '';
      previewPlaceholder.classList.remove('hide');
      previewContent.classList.add('hide');
      state.currentData = null;
      wordInput.focus();
    } catch (error) {
      showToast(translations[state.appLang].toast_add_error + error.message, 'error');
    } finally {
      addToAnkiBtn.disabled = false;
    }
  });

  // Keyboard shortcut to add card (Ctrl+Enter or Cmd+Enter)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      if (state.currentData && !addToAnkiBtn.disabled && !deckModal.classList.contains('hide') === false) {
        e.preventDefault();
        addToAnkiBtn.click();
      }
    }
  });

  // --- UI Helpers ---

  // HTML escaping utility
  function escapeHtml(str, replaceLineBreaks = false) {
    if (!str) return '';
    let escaped = str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    if (replaceLineBreaks) {
      escaped = escaped.replace(/\n/g, "<br>");
    }
    return escaped;
  }

  // Construct card Front HTML for Anki
  function generateFrontHtml(data) {
    const showArticle = data.article && data.article.trim() !== '';
    const genderClass = data.gender && data.gender !== 'none' ? `gender-${data.gender}` : '';
    
    return `
<style>
  .anki-front-container {
    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    text-align: center !important;
    font-size: 2.2rem;
    font-weight: 800;
    padding: 20px;
    color: #ffffff;
  }
  .anki-article {
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 10px;
    padding: 3px 10px;
    border-radius: 6px;
    vertical-align: middle;
    display: inline-block;
  }
  .gender-masculine {
    color: #89b4fa;
    background: rgba(137, 180, 250, 0.15);
    border: 1px solid rgba(137, 180, 250, 0.3);
  }
  .gender-feminine {
    color: #f38ba8;
    background: rgba(243, 139, 168, 0.15);
    border: 1px solid rgba(243, 139, 168, 0.3);
  }
  .gender-neuter {
    color: #a6e3a1;
    background: rgba(166, 227, 161, 0.15);
    border: 1px solid rgba(166, 227, 161, 0.3);
  }
  @media (prefers-color-scheme: light) {
    .anki-front-container {
      color: #1e293b;
    }
    .gender-masculine {
      color: #1e3a8a;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
    }
    .gender-feminine {
      color: #9d174d;
      background: #fdf2f8;
      border: 1px solid #fbcfe8;
    }
    .gender-neuter {
      color: #065f46;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
    }
  }
</style>
<div class="anki-front-container">
  ${showArticle ? `<span class="anki-article ${genderClass}">${escapeHtml(data.article)}</span>` : ''}
  <span class="anki-word-text">${escapeHtml(data.baseForm)}</span>
</div>
    `;
  }

  // Construct card Back HTML for Anki
  function generateBackHtml(data) {
    const showArticle = data.article && data.article.trim() !== '';
    const genderClass = data.gender && data.gender !== 'none' ? `gender-${data.gender}` : '';

    return `
<style>
  .anki-card-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: left !important;
    max-width: 550px;
    margin: 10px auto;
    padding: 18px;
    background: #1e1e2e;
    color: #cdd6f4;
    border-radius: 12px;
    border: 1px solid #313244;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    font-size: 15px;
  }
  .anki-word-header {
    font-size: 1.6rem;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 12px;
    color: #89b4fa;
    border-bottom: 2px solid rgba(137, 180, 250, 0.15);
    padding-bottom: 6px;
    text-align: left !important;
  }
  .anki-article {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 8px;
    padding: 2px 8px;
    border-radius: 6px;
    vertical-align: middle;
    display: inline-block;
  }
  .gender-masculine {
    color: #89b4fa;
    background: rgba(137, 180, 250, 0.15);
    border: 1px solid rgba(137, 180, 250, 0.3);
  }
  .gender-feminine {
    color: #f38ba8;
    background: rgba(243, 139, 168, 0.15);
    border: 1px solid rgba(243, 139, 168, 0.3);
  }
  .gender-neuter {
    color: #a6e3a1;
    background: rgba(166, 227, 161, 0.15);
    border: 1px solid rgba(166, 227, 161, 0.3);
  }
  .anki-section {
    margin-bottom: 12px;
    text-align: left !important;
  }
  .anki-label {
    font-size: 10px;
    color: #a6adc8;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 3px;
    font-weight: 600;
    text-align: left !important;
  }
  .anki-value {
    line-height: 1.45;
    text-align: left !important;
  }
  .anki-value.meaning {
    font-weight: bold;
    color: #f38ba8;
    font-size: 1.1rem;
    text-align: left !important;
  }
  .anki-value.core-image {
    color: #fab387;
    background: #252538;
    padding: 8px 12px;
    border-radius: 6px;
    border-left: 4px solid #fab387;
    text-align: left !important;
  }
  .anki-value.etymology {
    color: #cba6f7;
    background: #252538;
    padding: 8px 12px;
    border-radius: 6px;
    border-left: 4px solid #cba6f7;
    text-align: left !important;
  }
  .anki-value.example-en {
    font-style: italic;
    color: #a6e3a1;
    margin-bottom: 1px;
    text-align: left !important;
  }
  .anki-value.example-ja {
    font-size: 13px;
    color: #bac2de;
    text-align: left !important;
  }
  
  @media (prefers-color-scheme: light) {
    .anki-card-container {
      background: #ffffff;
      color: #313244;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }
    .anki-word-header {
      color: #3b82f6;
      border-bottom-color: rgba(59, 130, 246, 0.15);
    }
    .gender-masculine {
      color: #1e3a8a;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
    }
    .gender-feminine {
      color: #9d174d;
      background: #fdf2f8;
      border: 1px solid #fbcfe8;
    }
    .gender-neuter {
      color: #065f46;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
    }
    .anki-label {
      color: #64748b;
    }
    .anki-value.meaning {
      color: #db2777;
    }
    .anki-value.core-image {
      color: #d97706;
      background: #f8fafc;
      border-left-color: #d97706;
    }
    .anki-value.etymology {
      color: #7c3aed;
      background: #f8fafc;
      border-left-color: #7c3aed;
    }
    .anki-value.example-en {
      color: #15803d;
    }
    .anki-value.example-ja {
      color: #475569;
    }
  }
</style>

<div class="anki-card-container">
  <h2 class="anki-word-header">
    ${showArticle ? `<span class="anki-article ${genderClass}">${escapeHtml(data.article)}</span>` : ''}
    ${escapeHtml(data.baseForm)}
  </h2>
  <div class="anki-section">
    <div class="anki-label">意味 (Meaning)</div>
    <div class="anki-value meaning">${escapeHtml(data.meaning)}</div>
  </div>
  <div class="anki-section">
    <div class="anki-label">コアイメージ (Core Image)</div>
    <div class="anki-value core-image">${escapeHtml(data.coreImage, true)}</div>
  </div>
  <div class="anki-section">
    <div class="anki-label">語源 (Etymology)</div>
    <div class="anki-value etymology">${escapeHtml(data.etymology, true)}</div>
  </div>
  <div class="anki-section">
    <div class="anki-label">例文 (Example)</div>
    <div class="anki-value example-en">${escapeHtml(data.exampleSentence.original)}</div>
    <div class="anki-value example-ja">${escapeHtml(data.exampleSentence.translation)}</div>
  </div>
</div>
    `;
  }

  // Status Badge UI updates
  function updateAnkiStatusUI(online, details = '') {
    if (!ankiStatusBadge) return;
    const textNode = ankiStatusBadge.querySelector('span:not(.status-dot)');
    if (online) {
      ankiStatusBadge.className = 'status-badge status-online';
      textNode.textContent = `${translations[state.appLang].status_connected}`;
      ankiStatusBadge.title = translations[state.appLang].status_connected_desc;
    } else {
      ankiStatusBadge.className = 'status-badge status-offline';
      textNode.textContent = `${translations[state.appLang].status_disconnected}`;
      ankiStatusBadge.title = details || translations[state.appLang].status_disconnected_desc;
    }
  }

  function updateGeminiStatusUI(configured) {
    if (!geminiStatusBadge) return;
    const textNode = geminiStatusBadge.querySelector('span:not(.status-dot)');
    if (configured) {
      geminiStatusBadge.className = 'status-badge status-online';
      textNode.textContent = `${translations[state.appLang].status_configured}`;
      geminiKeyInput.placeholder = '••••••••••••••••••••';
    } else {
      geminiStatusBadge.className = 'status-badge status-warning';
      textNode.textContent = `${translations[state.appLang].status_missing}`;
      geminiKeyInput.placeholder = 'AIzaSy...';
    }
  }

  function disableAnkiControls() {
    deckSelect.innerHTML = `<option value="" disabled>${translations[state.appLang].status_disconnected}</option>`;
    deckSelect.disabled = true;
    newDeckBtn.disabled = true;
  }

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      previewContainers.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');

      if (tabId === 'front') {
        document.getElementById('card-preview-front').classList.add('active');
      } else if (tabId === 'back') {
        document.getElementById('card-preview-back').classList.add('active');
      } else if (tabId === 'fields-view') {
        document.getElementById('card-preview-fields').classList.add('active');
      }
    });
  });

  // Recent card storage & rendering
  function saveToRecent(word, meaning, deck) {
    const item = { word, meaning, deck, time: new Date().toLocaleTimeString() };
    state.recentCards.unshift(item);
    if (state.recentCards.length > 5) {
      state.recentCards.pop();
    }
    localStorage.setItem('anki_llm_recent', JSON.stringify(state.recentCards));
    renderRecentCards();
  }

  function renderRecentCards() {
    if (!recentList) return;
    recentList.innerHTML = '';
    if (state.recentCards.length === 0) {
      recentList.innerHTML = `<p class="empty-state">${translations[state.appLang].recent_empty}</p>`;
      return;
    }

    state.recentCards.forEach(item => {
      const div = document.createElement('div');
      div.className = 'recent-item';
      div.innerHTML = `
        <span class="recent-item-word">${escapeHtml(item.word)}</span>
        <span class="recent-item-meaning">${escapeHtml(item.meaning)}</span>
        <span class="recent-item-deck">${escapeHtml(item.deck)}</span>
      `;
      recentList.appendChild(div);
    });
  }

  // Toast Notification handler
  let toastTimeout;
  function showToast(message, type = 'info') {
    clearTimeout(toastTimeout);
    
    toast.className = `toast toast-${type}`;
    toastMessage.textContent = message;
    toast.classList.remove('hide');

    toastTimeout = setTimeout(() => {
      toast.classList.add('hide');
    }, 4000);
  }
});
