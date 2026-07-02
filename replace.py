import codecs

file_path = 'packages/frontend/public/app.js'
with codecs.open(file_path, 'r', 'utf-8') as f:
    content = f.read()

content = content.replace("let targetModel = 'AnkiLLM Basic';", "let targetModel = 'SuguAnki Basic';")
content = content.replace("tags: ['AnkiLLM']", "tags: ['SuguAnki']")
content = content.replace("https://api.github.com/repos/MICHICOM/AnkiLLM/releases/latest", "https://api.github.com/repos/MICHICOM/SuguAnki/releases/latest")
content = content.replace("path: 'AnkiLLM_update.apk',", "path: 'SuguAnki_update.apk',")

update_logic = """      if (release.tag_name !== currentVersion) {
        const confirmUpdate = confirm(translations[state.appLang].update_available.replace('{latest}', release.tag_name).replace('{current}', currentVersion));"""
        
new_update_logic = """      if (release.tag_name !== currentVersion) {
        // SuguAnki migration logic for Android
        alert("【SuguAnkiへの移行のお願い】\\n旧アプリ「AnkiLLM」から「SuguAnki」へ名称変更されました。\\nこの自動アップデートでSuguAnkiがインストールされますが、旧AnkiLLMは自動で削除されないため、お手数ですが手動でアンインストールをお願いします。\\nまた、設定もリセットされるため再設定をお願いいたします。");
        const confirmUpdate = confirm(translations[state.appLang].update_available.replace('{latest}', release.tag_name).replace('{current}', currentVersion));"""
content = content.replace(update_logic, new_update_logic)

content = content.replace("'anki_llm_", "'suguanki_")
content = content.replace('"anki_llm_', '"suguanki_')

with codecs.open(file_path, 'w', 'utf-8') as f:
    f.write(content)
