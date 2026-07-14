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
    licenses_btn: "クレジットとライセンス",
    licenses_title: "クレジットとライセンス",
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
    generate_btn: "カードを作る",
    generating: "生成中...",
    recent_title: "最近追加した単語",
    recent_empty: "このセッションで追加されたカードはありません",
    preview_title: "生成プレビュー",
    preview_placeholder: "単語を入力して生成すると、ここにAnkiカードのプレビューが表示されます。",
    tab_front: "表面 (Front)",
    tab_back: "裏面 (Back)",
    tab_details: "詳細データ",
    tab_general: "一般",
    tab_env: "環境設定",
    tab_ext: "拡張機能",
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
    register_btn: "カードを登録する",
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
    toast_add_error: "登録エラー: ",
    update_available: "新しいアップデート（{latest}）が利用可能です。\nダウンロードしてインストールしますか？\n(現在のバージョン: {current})",
    update_downloading: "アップデートのダウンロードを開始します...",
    update_ready: "ダウンロード完了。インストールを開始します...",
    update_plugin_error: "必要なプラグインがロードされていません",
    update_error: "アップデートの確認・処理中にエラーが発生しました: ",
    field_pos: "品詞 (Part of Speech)",
    field_pronunciation: "発音記号 (Pronunciation)",
    generate_custom_fields: "カスタムフィールドを生成する (消費トークン↑)",
    custom_fields_setting_title: "カスタムフィールド",
    custom_fields_setting_desc: "ここで設定した項目をAIが抽出します",
    save_cf_btn: "フィールド設定を保存",
    app_theme_label: "アプリテーマ",
    card_theme_label: "カード出力用CSS",
    add_cf_btn: "追加"
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
    licenses_btn: "Credits & Licenses",
    licenses_title: "Credits & Licenses",
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
    generate_btn: "Generate",
    generating: "Generating...",
    recent_title: "Recently Added",
    recent_empty: "No cards added in this session",
    preview_title: "Generation Preview",
    preview_placeholder: "Generate a card to see the preview here.",
    tab_front: "Front",
    tab_back: "Back",
    tab_details: "Detail Data",
    tab_general: "General",
    tab_env: "Preferences",
    tab_ext: "Extensions",
    preview_front_tag: "Anki Front Preview",
    preview_back_tag: "Anki Back Preview",
    field_base: "Base Form",
    field_article: "Article",
    field_gender: "Gender",
    gender_none: "None",
    gender_masc: "Masculine",
    gender_fem: "Female",
    gender_neuter: "Neuter",
    field_meaning: "Meaning",
    field_core: "Core Image",
    field_etymology: "Etymology",
    field_example_org: "Example (Original)",
    field_example_tr: "Example (Translation)",
    edit_tip: "💡 You can fine-tune the data before adding. Changes reflect instantly on the Back preview.",
    register_btn: "Add to Deck",
    new_deck_title: "Create New Deck",
    new_deck_desc: "Enter a name for the new deck (you can nest decks using double colons like \"English::Vocab\").",
    cancel: "Cancel",
    create: "Create",
    status_connected: "Connected",
    status_disconnected: "Disconnected",
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
    toast_add_error: "Registration error: ",
    update_available: "A new update ({latest}) is available.\nWould you like to download and install it?\n(Current version: {current})",
    update_downloading: "Downloading update...",
    update_ready: "Download complete. Starting installation...",
    update_plugin_error: "Required plugins are not loaded.",
    update_error: "An error occurred during the update process: ",
    field_pos: "Part of Speech",
    field_pronunciation: "Pronunciation",
    generate_custom_fields: "Generate Custom Fields (Token↑)",
    custom_fields_setting_title: "Custom Fields",
    custom_fields_setting_desc: "The AI will extract these items",
    save_cf_btn: "Save Custom Fields",
    app_theme_label: "App Theme",
    card_theme_label: "Card Theme CSS",
    add_cf_btn: "Add"
  }
};

// --- Hardcoded Anki Card Subtitles per Target Language ---
const cardSubtitles = {
  Japanese: { meaning: "意味", coreImage: "コアイメージ", etymology: "語源", example: "例文", inflectionTable: "活用・変化表" },
  English: { meaning: "Meaning", coreImage: "Core Image", etymology: "Etymology", example: "Example", inflectionTable: "Inflection Table" },
  German: { meaning: "Bedeutung", coreImage: "Kernbild", etymology: "Etymologie", example: "Beispiel", inflectionTable: "Deklination / Konjugation" },
  French: { meaning: "Signification", coreImage: "Image centrale", etymology: "Étymologie", example: "Exemple", inflectionTable: "Conjugaison / Déclinaison" },
  Spanish: { meaning: "Significado", coreImage: "Imagen central", etymology: "Etimología", example: "Ejemplo", inflectionTable: "Conjugación / Declinación" },
  Italian: { meaning: "Significato", coreImage: "Immagine centrale", etymology: "Etimologia", example: "Esempio", inflectionTable: "Coniugazione / Declinazione" },
  Chinese: { meaning: "含义", coreImage: "核心意象", etymology: "词源", example: "例句", inflectionTable: "词形变化" },
  Korean: { meaning: "의미", coreImage: "핵심 이미지", etymology: "어원", example: "예문", inflectionTable: "활용표" },
  Russian: { meaning: "Значение", coreImage: "Ключевой образ", etymology: "Этимология", example: "Пример", inflectionTable: "Склонение / Спряжение" },
  Portuguese: { meaning: "Significado", coreImage: "Imagem central", etymology: "Etimologia", example: "Exemplo", inflectionTable: "Conjugação / Declinação" },
  Dutch: { meaning: "Betekenis", coreImage: "Kernbeeld", etymology: "Etymologie", example: "Voorbeeld", inflectionTable: "Verbuiging / Vervoeging" },
  Arabic: { meaning: "المعنى", coreImage: "الصورة الأساسية", etymology: "أصل الكلمة", example: "مثال", inflectionTable: "جدول التصريف" }
};

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    ankiConnected: false,
    geminiConfigured: false,
    decks: [],
    currentData: null, // Holds the generated/modified word details
    recentCards: JSON.parse(localStorage.getItem('suguanki_recent') || '[]'),
    appLang: localStorage.getItem('suguanki_app_lang') || 'ja',
  };

  // DOM Elements
  const appLangSelect = document.getElementById('app-lang-select');
  const ankiStatusBadge = document.getElementById('anki-status');
  const geminiStatusBadge = document.getElementById('gemini-status');
  const geminiKeyInput = document.getElementById('gemini-key-input');
  const saveKeyBtn = document.getElementById('save-key-btn');
  const sourceLangSelect = document.getElementById('source-lang-select');
  const targetLangSelect = document.getElementById('target-lang-select');
  const swapLangBtn = document.getElementById('swap-lang-btn');
  const deckSelect = document.getElementById('deck-select');
  const newDeckBtn = document.getElementById('new-deck-btn');
  const modelSelect = document.getElementById('model-select');
  const appThemeSelect = document.getElementById('app-theme-select');
  const cardThemeSelect = document.getElementById('card-theme-select');
  
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
  const fieldPos = document.getElementById('field-pos');
  const fieldArticle = document.getElementById('field-article');
  const fieldGender = document.getElementById('field-gender');
  const fieldMeaning = document.getElementById('field-meaning');
  const fieldPronunciation = document.getElementById('field-pronunciation');
  const customFieldsContainer = document.getElementById('custom-fields-container');
  const fieldCoreImage = document.getElementById('field-core-image');
  const fieldEtymology = document.getElementById('field-etymology');
  const fieldExampleEn = document.getElementById('field-example-en');
  const fieldExampleJa = document.getElementById('field-example-ja');
  
  const generateCustomFieldsCb = document.getElementById('generate-custom-fields-cb');
  const cfLangSelect = document.getElementById('cf-lang-select');
  const cfDynamicList = document.getElementById('cf-dynamic-list');
  const addCfFieldBtn = document.getElementById('add-cf-field-btn');
  const saveCfBtn = document.getElementById('save-cf-btn');

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
  
  const licensesModal = document.getElementById('licenses-modal');
  const openLicensesBtn = document.getElementById('open-licenses-btn');
  const licensesCloseBtn = document.getElementById('licenses-close-btn');
  
  // Toast Element
  const toast = document.getElementById('toast');
  const toastMessage = toast.querySelector('.toast-message');

  // Initialize Language
  applyLanguage(state.appLang);

  // Initialize Status checks with a short delay for Capacitor
  checkSystemStatus();

  // Re-check Anki connection when window gains or loses focus if disconnected
  const handleWindowFocusBlur = () => {
    if (!state.ankiConnected) {
      checkSystemStatus();
    }
  };
  window.addEventListener('focus', handleWindowFocusBlur);
  window.addEventListener('blur', handleWindowFocusBlur);

  renderRecentCards();

  // Restore language selections
  const savedSourceLang = localStorage.getItem('suguanki_source_lang');
  if (savedSourceLang && Array.from(sourceLangSelect.options).some(o => o.value === savedSourceLang)) {
    sourceLangSelect.value = savedSourceLang;
  }
  const savedTargetLang = localStorage.getItem('suguanki_target_lang');
  if (savedTargetLang && Array.from(targetLangSelect.options).some(o => o.value === savedTargetLang)) {
    targetLangSelect.value = savedTargetLang;
  }
  const savedModel = localStorage.getItem('suguanki_model');
  if (savedModel && Array.from(modelSelect.options).some(o => o.value === savedModel)) {
    modelSelect.value = savedModel;
  }

  sourceLangSelect.addEventListener('change', () => {
    localStorage.setItem('suguanki_source_lang', sourceLangSelect.value);
  });
  targetLangSelect.addEventListener('change', () => {
    localStorage.setItem('suguanki_target_lang', targetLangSelect.value);
  });
  modelSelect.addEventListener('change', () => {
    localStorage.setItem('suguanki_model', modelSelect.value);
  });

  const savedAppTheme = localStorage.getItem('suguanki_app_theme') || 'default';
  if (appThemeSelect && Array.from(appThemeSelect.options).some(o => o.value === savedAppTheme)) {
    appThemeSelect.value = savedAppTheme;
  }
  document.documentElement.setAttribute('data-theme', savedAppTheme);

  const savedCardTheme = localStorage.getItem('suguanki_card_theme') || 'default';
  if (cardThemeSelect && Array.from(cardThemeSelect.options).some(o => o.value === savedCardTheme)) {
    cardThemeSelect.value = savedCardTheme;
  }

  if (appThemeSelect) {
    appThemeSelect.addEventListener('change', () => {
      const theme = appThemeSelect.value;
      localStorage.setItem('suguanki_app_theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
      updateThemePreviews();
    });
  }

  if (cardThemeSelect) {
    cardThemeSelect.addEventListener('change', () => {
      localStorage.setItem('suguanki_card_theme', cardThemeSelect.value);
      updateThemePreviews();
      if (state.currentData) {
        updatePreview(state.currentData);
      }
    });
  }

  const appColors = {
    'default': ['#2f2f31', '#3a3a3c', '#59adeb'],
    'modern-dark': ['#0a0a12', '#1a1a2e', '#6366f1'],
    'nord': ['#2e3440', '#3b4252', '#88c0d0'],
    'dracula': ['#282a36', '#44475a', '#ff79c6'],
    'light': ['#f8fafc', '#ffffff', '#3b82f6']
  };

  const cardColors = {
    'default': ['#3a3a3c', '#59adeb', '#e25d5d', '#50b050'],
    'modern-dark': ['#1e1e2e', '#89b4fa', '#f38ba8', '#a6e3a1'],
    'modern-light': ['#ffffff', '#1e3a8a', '#9d174d', '#065f46'],
    'nord-dark': ['#3b4252', '#81a1c1', '#b48ead', '#a3be8c']
  };

  function makeCustomSelect(selectElement, colorsMap) {
    if (!selectElement) return;
    
    selectElement.style.display = 'none';
    
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select-wrapper';
    
    const display = document.createElement('div');
    display.className = 'custom-select-display';
    
    const optionsList = document.createElement('div');
    optionsList.className = 'custom-select-options hide';
    
    Array.from(selectElement.options).forEach(opt => {
      const item = document.createElement('div');
      item.className = 'custom-select-option';
      item.dataset.value = opt.value;
      
      const colors = colorsMap[opt.value] || [];
      const swatchesHtml = colors.map(c => `<div class="mini-swatch" style="background: ${c};" title="${c}"></div>`).join('');
      
      item.innerHTML = `<span>${opt.text}</span><div class="swatches-container">${swatchesHtml}</div>`;
      
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        selectElement.value = opt.value;
        updateDisplay();
        optionsList.classList.add('hide');
        selectElement.dispatchEvent(new Event('change'));
      });
      optionsList.appendChild(item);
    });

    function updateDisplay() {
      const opt = selectElement.options[selectElement.selectedIndex];
      if (!opt) return;
      const colors = colorsMap[opt.value] || [];
      const swatchesHtml = colors.map(c => `<div class="mini-swatch" style="background: ${c};" title="${c}"></div>`).join('');
      display.innerHTML = `<span>${opt.text}</span><div class="swatches-container">${swatchesHtml}</div>`;
    }

    display.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = optionsList.classList.contains('hide');
      document.querySelectorAll('.custom-select-options').forEach(el => el.classList.add('hide'));
      if (isHidden) optionsList.classList.remove('hide');
    });

    document.addEventListener('click', () => {
      optionsList.classList.add('hide');
    });

    updateDisplay();
    wrapper.appendChild(display);
    wrapper.appendChild(optionsList);
    selectElement.parentNode.insertBefore(wrapper, selectElement.nextSibling);
  }

  // Initialize custom selects
  makeCustomSelect(appThemeSelect, appColors);
  makeCustomSelect(cardThemeSelect, cardColors);

  if (swapLangBtn) {
    swapLangBtn.addEventListener('click', () => {
      const temp = sourceLangSelect.value;
      sourceLangSelect.value = targetLangSelect.value;
      targetLangSelect.value = temp;
      localStorage.setItem('suguanki_source_lang', sourceLangSelect.value);
      localStorage.setItem('suguanki_target_lang', targetLangSelect.value);
    });
  }

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
      
      if (cfLangSelect) {
        const currentCfLang = cfLangSelect.value;
        cfLangSelect.innerHTML = '';
        Array.from(sourceLangSelect.options).forEach(opt => {
          const newOpt = document.createElement('option');
          newOpt.value = opt.value;
          newOpt.textContent = opt.textContent;
          cfLangSelect.appendChild(newOpt);
        });
        if (currentCfLang) cfLangSelect.value = currentCfLang;
      }
      
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
    localStorage.setItem('suguanki_app_lang', selectedLang);
    applyLanguage(selectedLang);
    if (state.currentData) {
      updatePreview(state.currentData);
    }
  });

  // --- API / Backend Interactions ---
  const ANKI_CONNECT_URL = 'http://127.0.0.1:8765';

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
        const response = await fetch('/api/anki/proxy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action,
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
        if (error.message === 'Failed to fetch' || error.message.includes('NetworkError')) {
          throw new Error(`AnkiConnect connection failed. Please ensure Anki or AnkiDroid is running and API integration is enabled.`);
        }
        throw error;
      }
    }
  }

  // Check Configuration & Anki Connection
  async function checkSystemStatus() {
    try {
      // 1. Check Gemini config
      if (isAndroidApp) {
        // Android: Check localStorage
        const savedApiKey = localStorage.getItem('suguanki_gemini_api_key');
        state.geminiConfigured = !!savedApiKey;
      } else {
        // Windows: Check from backend
        const configRes = await fetch('/api/config');
        if (configRes.ok) {
          const config = await configRes.json();
          state.geminiConfigured = config.geminiConfigured;
        } else {
          state.geminiConfigured = false;
        }
      }
      
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
      if (isAndroidApp) {
        // Android: Save to localStorage
        localStorage.setItem('suguanki_gemini_api_key', key);
      } else {
        // Windows: Save via backend
        const response = await fetch('/api/config', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ geminiApiKey: key })
        });
        
        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error || 'Failed to save API key');
        }
      }

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
    
    // Re-enable controls if they were previously disabled
    deckSelect.disabled = false;
    newDeckBtn.disabled = false;

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
    const savedDeck = localStorage.getItem('suguanki_selected_deck');
    if (savedDeck && decks.includes(savedDeck)) {
      deckSelect.value = savedDeck;
    } else {
      // Find Default deck if available, else first
      const defaultOpt = decks.find(d => d.toLowerCase() === 'default') || decks[0];
      deckSelect.value = defaultOpt;
    }
  }

  deckSelect.addEventListener('change', () => {
    localStorage.setItem('suguanki_selected_deck', deckSelect.value);
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
      localStorage.setItem('suguanki_selected_deck', deckName);
      
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

  // Licenses Modal events
  if (openLicensesBtn && licensesModal && licensesCloseBtn) {
    openLicensesBtn.addEventListener('click', () => {
      licensesModal.classList.remove('hide');
    });

    licensesCloseBtn.addEventListener('click', () => {
      licensesModal.classList.add('hide');
    });
  }

  // Custom Fields Settings Logic
  function getCustomFieldsConfig() {
    return JSON.parse(localStorage.getItem('suguanki_custom_fields_config') || '{}');
  }

  function renderCustomFieldsList(fields) {
    if (!cfDynamicList) return;
    cfDynamicList.innerHTML = '';
    if (!fields || fields.length === 0) {
      fields = [''];
    }
    fields.forEach((val) => {
      addCustomFieldInput(val);
    });
  }

  function addCustomFieldInput(val = '') {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '4px';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = val;
    input.placeholder = '例: Past Tense';
    input.className = 'cf-item-input';
    input.style.flex = '1';

    const rmBtn = document.createElement('button');
    rmBtn.className = 'btn btn-icon-only';
    rmBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    rmBtn.style.width = '32px';
    rmBtn.style.padding = '0';
    rmBtn.style.background = 'rgba(255,0,0,0.1)';
    rmBtn.style.color = '#f38ba8';
    rmBtn.onclick = () => {
      div.remove();
    };

    div.appendChild(input);
    div.appendChild(rmBtn);
    cfDynamicList.appendChild(div);
  }

  if (addCfFieldBtn) {
    addCfFieldBtn.addEventListener('click', () => {
      addCustomFieldInput('');
    });
  }

  function loadCustomFieldsForLang(langValue) {
    const config = getCustomFieldsConfig();
    const valString = config[langValue] || '';
    const fields = valString ? valString.split(',').map(s => s.trim()).filter(s => s) : [];
    renderCustomFieldsList(fields);
  }

  if (cfLangSelect) {
    cfLangSelect.addEventListener('change', () => {
      loadCustomFieldsForLang(cfLangSelect.value);
    });
  }

  if (saveCfBtn) {
    saveCfBtn.addEventListener('click', () => {
      const langValue = cfLangSelect.value;
      const inputs = cfDynamicList.querySelectorAll('.cf-item-input');
      const vals = [];
      inputs.forEach(input => {
        const v = input.value.trim();
        // remove commas from input to avoid breaking the serialization format
        if (v) vals.push(v.replace(/,/g, ''));
      });
      const valString = vals.join(',');
      const config = getCustomFieldsConfig();
      if (valString) {
        config[langValue] = valString;
      } else {
        delete config[langValue];
      }
      localStorage.setItem('suguanki_custom_fields_config', JSON.stringify(config));
      showToast("カスタムフィールド設定を保存しました", "success");
    });
  }

  // Initialize and persist Custom Fields toggle
  const enableCustomFields = localStorage.getItem('suguanki_enable_custom_fields') === 'true';
  if (generateCustomFieldsCb) {
    generateCustomFieldsCb.checked = enableCustomFields;
    generateCustomFieldsCb.addEventListener('change', (e) => {
      localStorage.setItem('suguanki_enable_custom_fields', e.target.checked);
    });
  }

  // Generate Vocab Card Action
  vocabForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const word = wordInput.value.trim();
    if (!word) return;

    if (!state.geminiConfigured) {
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
      let parsedData = null;

      const includeCustomFields = generateCustomFieldsCb.checked;
      let customFieldsList = [];
      if (includeCustomFields) {
        const config = getCustomFieldsConfig();
        if (config[sourceLang]) {
          customFieldsList = config[sourceLang].split(',').map(s => s.trim()).filter(s => s);
        }
      }

      if (isAndroidApp) {
        // Android: Direct fetch to Gemini API
        const apiKey = localStorage.getItem('suguanki_gemini_api_key');
        if (!apiKey) throw new Error("API Key is missing from localStorage");
        
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        let prompt = `Analyze the vocabulary word, phrase, or idiom: "${word}" in ${sourceLang}.
You must return the dictionary base form (原型) of the expression in ${sourceLang} (if it's an idiom or phrasal verb, return its standard base form, e.g., 'kick the bucket', 'look forward to'), its part of speech (品詞) in ${sourceLang} (e.g., Idiom, Phrasal Verb, Noun, Verb, etc.), its pronunciation (発音記号) in IPA format, its meaning in ${targetLang}, the core image/essence (コアイメージ) of the expression in ${targetLang} (keep it concise and clear), the etymology/word origin (語源) of the expression in ${targetLang} (explain prefixes, roots, or origin briefly. If it is a compound word (合成語), explicitly state so and briefly explain its parts. If not applicable or unknown, explicitly state "不明" (Unknown) and provide a very brief explanation. Do not output a single character or empty parentheses), and a helpful example sentence in ${sourceLang} with its translation in ${targetLang}.`;

        const properties = {
          baseForm: { type: "STRING" },
          partOfSpeech: { type: "STRING", description: `The part of speech in ${sourceLang} (e.g., if German, use Substantiv).` },
          pronunciation: { type: "STRING" },
          gender: { type: "STRING" },
          article: { type: "STRING" },
          meaning: { type: "STRING" },
          coreImage: { type: "STRING" },
          etymology: { type: "STRING" },
          inflectionTable: { type: "STRING" },
          exampleSentence: {
            type: "OBJECT",
            properties: { original: { type: "STRING" }, translation: { type: "STRING" } },
            required: ["original", "translation"]
          }
        };

        const required = ["baseForm", "partOfSpeech", "pronunciation", "gender", "article", "meaning", "coreImage", "etymology", "inflectionTable", "exampleSentence"];

        if (customFieldsList.length > 0) {
          prompt += `\nAdditionally, please extract and provide values for the following custom fields: ${customFieldsList.join(", ")}. IMPORTANT: If a field is not applicable to the word (e.g., past tense for a noun), you MUST return an empty string ("") as the value.`;
          properties.customFields = {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                fieldName: { type: "STRING" },
                value: { type: "STRING", description: "Leave as empty string if not applicable." }
              },
              required: ["fieldName", "value"]
            }
          };
          required.push("customFields");
        }

        const payload = {
          contents: [ { parts: [ { text: prompt } ] } ],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties,
              required
            }
          }
        };

        const response = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
        parsedData = JSON.parse(textResponse);
      } else {
        // Windows: Use local backend proxy
        const payload = {
          word,
          sourceLang,
          targetLang,
          model,
          customFieldsList
        };

        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errJson = await response.json().catch(() => ({}));
          throw new Error(errJson.error || `Server returned HTTP ${response.status}`);
        }

        parsedData = await response.json();
      }

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
    fieldPos.value = data.partOfSpeech || '';
    fieldPronunciation.value = data.pronunciation || '';
    fieldArticle.value = data.article || '';
    fieldGender.value = data.gender || 'none';
    fieldMeaning.value = data.meaning;
    fieldCoreImage.value = data.coreImage;
    fieldEtymology.value = data.etymology || '';
    fieldExampleEn.value = data.exampleSentence.original;
    fieldExampleJa.value = data.exampleSentence.translation;

    customFieldsContainer.innerHTML = '';
    if (data.customFields && Array.isArray(data.customFields)) {
      data.customFields.forEach((cf, index) => {
        const div = document.createElement('div');
        div.className = 'field-item';
        const span = document.createElement('span');
        span.className = 'field-name';
        span.textContent = cf.fieldName;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = cf.value;
        input.dataset.index = index;

        input.addEventListener('input', (e) => {
          if (state.currentData && state.currentData.customFields) {
            state.currentData.customFields[e.target.dataset.index].value = e.target.value;
            updatePreview(state.currentData);
          }
        });

        div.appendChild(span);
        div.appendChild(input);
        customFieldsContainer.appendChild(div);
      });
    }
  }

  // Update visual card previews based on values
  function updatePreview(data) {
    previewFrontWord.innerHTML = generateFrontHtml(data);
    previewBackHtmlRender.innerHTML = generateBackHtml(data);
  }

  // Watch Field Editor changes to dynamically update preview
  const liveInputs = [fieldBaseForm, fieldPos, fieldPronunciation, fieldArticle, fieldGender, fieldMeaning, fieldCoreImage, fieldEtymology, fieldExampleEn, fieldExampleJa];
  liveInputs.forEach(input => {
    const eventName = input.tagName === 'SELECT' ? 'change' : 'input';
    input.addEventListener(eventName, () => {
      if (!state.currentData) return;

      // Update state data from fields
      state.currentData.baseForm = fieldBaseForm.value;
      state.currentData.partOfSpeech = fieldPos.value;
      state.currentData.pronunciation = fieldPronunciation.value;
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

    try {
      // Always use SuguAnki Basic by default
      let targetModel = 'SuguAnki Basic';
      let targetFields = { front: 'Front', back: 'Back' };

      const models = await callAnkiConnect('modelNames');
      if (!models || !models.includes(targetModel)) {
        await callAnkiConnect('createModel', {
          modelName: targetModel,
          inOrderFields: ["Front", "Back"],
          css: ".card {\n font-family: arial;\n font-size: 20px;\n text-align: center;\n color: black;\n background-color: white;\n}\n",
          isCloze: false,
          cardTemplates: [
            {
              Name: "Card 1",
              Front: "{{Front}}",
              Back: "{{FrontSide}}\n<hr id=answer>\n{{Back}}"
            }
          ]
        });
      }

      const noteParams = {
        note: {
          deckName,
          modelName: targetModel,
          fields: {
            [targetFields.front]: frontText,
            [targetFields.back]: backHtml
          },
          options: {
            allowDuplicate: false,
          },
          tags: ['SuguAnki']
        }
      };

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

  // Get CSS for Anki Card based on theme
  function getCardCss() {
    const theme = localStorage.getItem('suguanki_card_theme') || 'modern-dark';
    let bgCol, txtCol, borderCol, accent1, bgAcc1, accent2, bgAcc2, accent3, bgAcc3, accent4, bgAcc4, labelCol;

    if (theme === 'modern-light') {
      bgCol = '#ffffff'; txtCol = '#1e293b'; borderCol = '#e2e8f0'; labelCol = '#64748b';
      accent1 = '#1e3a8a'; bgAcc1 = '#eff6ff'; // Blue
      accent2 = '#9d174d'; bgAcc2 = '#fdf2f8'; // Pink
      accent3 = '#065f46'; bgAcc3 = '#ecfdf5'; // Green
      accent4 = '#7c3aed'; bgAcc4 = '#f5f3ff'; // Purple
    } else if (theme === 'nord-dark') {
      bgCol = '#3b4252'; txtCol = '#eceff4'; borderCol = '#4c566a'; labelCol = '#d8dee9';
      accent1 = '#81a1c1'; bgAcc1 = 'rgba(129, 161, 193, 0.15)'; // Blue
      accent2 = '#b48ead'; bgAcc2 = 'rgba(180, 142, 173, 0.15)'; // Purple/Pink
      accent3 = '#a3be8c'; bgAcc3 = 'rgba(163, 190, 140, 0.15)'; // Green
      accent4 = '#ebcb8b'; bgAcc4 = 'rgba(235, 203, 139, 0.15)'; // Yellow
    } else if (theme === 'modern-dark') {
      bgCol = '#1e1e2e'; txtCol = '#cdd6f4'; borderCol = '#313244'; labelCol = '#a6adc8';
      accent1 = '#89b4fa'; bgAcc1 = 'rgba(137, 180, 250, 0.15)';
      accent2 = '#f38ba8'; bgAcc2 = 'rgba(243, 139, 168, 0.15)';
      accent3 = '#a6e3a1'; bgAcc3 = 'rgba(166, 227, 161, 0.15)';
      accent4 = '#cba6f7'; bgAcc4 = 'rgba(203, 166, 247, 0.15)';
    } else {
      // default (Anki Classic Dark)
      bgCol = '#3a3a3c'; txtCol = '#f5f5f5'; borderCol = '#4a4a4c'; labelCol = '#999999';
      accent1 = '#59adeb'; bgAcc1 = 'transparent';
      accent2 = '#e25d5d'; bgAcc2 = 'transparent';
      accent3 = '#50b050'; bgAcc3 = 'transparent';
      accent4 = '#e5b567'; bgAcc4 = 'transparent';
    }

    return `
<style>
  .anki-card-container, .anki-card-container *,
  .anki-front-container, .anki-front-container * {
    box-sizing: border-box;
  }
  .anki-front-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: center !important;
    font-size: 2.2rem;
    font-weight: 800;
    max-width: 550px;
    margin: 10px auto;
    padding: 30px 20px;
    background: ${bgCol};
    color: ${txtCol};
    border-radius: 12px;
    border: 1px solid ${borderCol};
  }
  .anki-card-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: left !important;
    max-width: 550px;
    margin: 10px auto;
    padding: 18px;
    background: ${bgCol};
    color: ${txtCol};
    border-radius: 12px;
    border: 1px solid ${borderCol};
    font-size: 15px;
  }
  .anki-article {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 6px;
    vertical-align: middle;
    display: inline-block;
  }
  .gender-masculine {
    color: ${accent1};
    background: ${bgAcc1};
    border: 1px solid ${theme === 'default' ? 'transparent' : accent1};
  }
  .gender-feminine {
    color: ${accent2};
    background: ${bgAcc2};
    border: 1px solid ${theme === 'default' ? 'transparent' : accent2};
  }
  .gender-neuter {
    color: ${accent3};
    background: ${bgAcc3};
    border: 1px solid ${theme === 'default' ? 'transparent' : accent3};
  }
  .anki-word-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 12px;
    font-size: 1.6rem;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 12px;
    color: ${accent1};
    border-bottom: 2px solid ${theme === 'default' ? borderCol : bgAcc1};
    padding-bottom: 6px;
    text-align: left !important;
  }
  .anki-section {
    margin-bottom: 12px;
    text-align: left !important;
  }
  .anki-label {
    font-size: 10px;
    color: ${labelCol};
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
    color: ${accent2};
    font-size: 1.1rem;
    text-align: left !important;
  }
  .anki-value.core-image {
    color: ${accent4};
    background: ${theme === 'default' ? 'transparent' : bgAcc4};
    padding: ${theme === 'default' ? '0' : '8px 12px'};
    border-radius: 6px;
    border-left: 4px solid ${theme === 'default' ? 'transparent' : accent4};
    text-align: left !important;
  }
  .anki-value.etymology {
    color: ${accent1};
    background: ${theme === 'default' ? 'transparent' : bgAcc1};
    padding: ${theme === 'default' ? '0' : '8px 12px'};
    border-radius: 6px;
    border-left: 4px solid ${theme === 'default' ? 'transparent' : accent1};
    text-align: left !important;
  }
  .anki-value.example-en {
    font-style: italic;
    color: ${accent3};
    margin-bottom: 1px;
    text-align: left !important;
  }
  .anki-value.example-ja {
    font-size: 13px;
    color: ${theme === 'default' ? '#aaaaaa' : txtCol};
    text-align: left !important;
  }
  .anki-pos {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${bgCol};
    background: ${labelCol};
    padding: 2px 8px;
    border-radius: 4px;
    vertical-align: middle;
    margin-left: 8px;
    display: inline-block;
  }
  .anki-pronunciation {
    font-size: 1.1rem;
    color: ${labelCol};
    margin-left: 8px;
    font-weight: normal;
  }
</style>
`;
  }

  // Construct card Front HTML for Anki
  function generateFrontHtml(data) {
    const showArticle = data.article && data.article.trim() !== '';
    const genderClass = data.gender && data.gender !== 'none' ? `gender-${data.gender}` : '';
    
    return getCardCss() + `
<div class="anki-front-container">
  ${showArticle ? `<span class="anki-article ${genderClass}">${escapeHtml(data.article)}</span>` : ''}
  <span class="anki-word-text">${escapeHtml(data.baseForm)}</span>
</div>
    `;
  }

  // Construct card Back HTML for Anki
  function generateBackHtml(data) {
    const showArticle = data.article && data.article.trim() !== '';
    const showPos = data.partOfSpeech && data.partOfSpeech.trim() !== '';
    const showPronunciation = data.pronunciation && data.pronunciation.trim() !== '';
    const genderClass = data.gender && data.gender !== 'none' ? `gender-${data.gender}` : '';
    
    const targetLang = targetLangSelect ? targetLangSelect.value : 'English';
    const labels = cardSubtitles[targetLang] || cardSubtitles['English'];

    let customFieldsHtml = '';
    if (data.customFields && Array.isArray(data.customFields)) {
      data.customFields.forEach(cf => {
        if (cf.value && cf.value.trim() !== '') {
          customFieldsHtml += `
  <div class="anki-section">
    <div class="anki-label">${escapeHtml(cf.fieldName)}</div>
    <div class="anki-value">${escapeHtml(cf.value)}</div>
  </div>`;
        }
      });
    }

    return getCardCss() + `
<div class="anki-card-container">
  <h2 class="anki-word-header">
    ${showArticle ? `<span class="anki-article ${genderClass}">${escapeHtml(data.article)}</span>` : ''}
    <span class="anki-word-text">${escapeHtml(data.baseForm)}</span>
    ${showPronunciation ? `<span class="anki-pronunciation">/${escapeHtml(data.pronunciation)}/</span>` : ''}
    ${showPos ? `<span class="anki-pos">${escapeHtml(data.partOfSpeech)}</span>` : ''}
  </h2>
  <div class="anki-section">
    <div class="anki-label">${escapeHtml(labels.meaning)}</div>
    <div class="anki-value meaning">${escapeHtml(data.meaning)}</div>
  </div>
  ${customFieldsHtml}
  <div class="anki-section">
    <div class="anki-label">${escapeHtml(labels.coreImage)}</div>
    <div class="anki-value core-image">${escapeHtml(data.coreImage, true)}</div>
  </div>
  <div class="anki-section">
    <div class="anki-label">${escapeHtml(labels.etymology)}</div>
    <div class="anki-value etymology">${escapeHtml(data.etymology, true)}</div>
  </div>
  ${data.inflectionTable && data.inflectionTable.trim() !== '' ? `
  <div class="anki-section">
    <div class="anki-label">${escapeHtml(labels.inflectionTable)}</div>
    <div class="anki-value inflection-table">${typeof DOMPurify !== 'undefined' ? DOMPurify.sanitize(data.inflectionTable) : data.inflectionTable}</div>
  </div>` : ''}
  <div class="anki-section">
    <div class="anki-label">${escapeHtml(labels.example)}</div>
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

  // Settings Tab switching
  const settingsTabBtns = document.querySelectorAll('.settings-tab-btn');
  const settingsTabContents = document.querySelectorAll('.settings-tab-content');
  
  settingsTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      settingsTabBtns.forEach(b => b.classList.remove('active'));
      settingsTabContents.forEach(c => c.classList.add('hide'));

      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.remove('hide');
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
    localStorage.setItem('suguanki_recent', JSON.stringify(state.recentCards));
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

  // --- Android Auto Updater ---
  const CURRENT_APP_VERSION = "v1.0.4"; // Update this when releasing a new version
  
  async function checkForAndroidUpdate() {
    if (!isAndroidApp) return;
    try {
      const response = await fetch('https://api.github.com/repos/MICHICOM/SuguAnki/releases/latest');
      if (!response.ok) return;
      
      const release = await response.json();
      const latestVersion = release.tag_name;
      
      const cleanLatest = latestVersion.replace(/^v/, '');
      const cleanCurrent = CURRENT_APP_VERSION.replace(/^v/, '');
      
      if (latestVersion && cleanLatest !== cleanCurrent) {
        // Find APK asset
        const apkAsset = release.assets.find(a => a.name.endsWith('.apk'));
        if (!apkAsset) return;
        
        const confirmMsg = translations[state.appLang].update_available
          .replace('{latest}', latestVersion)
          .replace('{current}', CURRENT_APP_VERSION);
          
        const wantUpdate = confirm(confirmMsg);
        
        if (wantUpdate) {
          showToast(translations[state.appLang].update_downloading, "info");
          
          const { Filesystem, FileOpener } = window.Capacitor.Plugins;
          
          if (!Filesystem || !FileOpener) {
            throw new Error(translations[state.appLang].update_plugin_error);
          }
          
          // Download the APK
          const downloadRes = await Filesystem.downloadFile({
            url: apkAsset.browser_download_url,
            path: 'SuguAnki_update.apk',
            directory: 'CACHE' // Saving to cache directory
          });
          
          showToast(translations[state.appLang].update_ready, "success");
          
          // Open the APK to trigger Android installer
          await FileOpener.open({
            filePath: downloadRes.path,
            contentType: 'application/vnd.android.package-archive'
          });
        }
      }
    } catch (e) {
      console.error("AutoUpdate error:", e);
      showToast(translations[state.appLang].update_error + e.message, "error");
    }
  }

  // Check for updates on startup with a slight delay
  if (isAndroidApp) {
    setTimeout(checkForAndroidUpdate, 2000);
  }

});
