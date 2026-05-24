### "This project is powered by LLMs. Use at your own risk."
### このプロジェクトはLLMを用いて作成されています。ご使用は自己責任でお願いいたします。




# AnkiLLM Vocab Builder
# English

A tool that automatically generates English or multilingual vocabulary card information using the Gemini API and registers it directly to Anki running on your PC.

## 📋 Prerequisites

To use this tool, you need to install and launch the following:

1. **Node.js**
   * Node.js must be installed on your computer.
   * If it is not installed, please download and install the recommended version from the [Node.js Official Website](https://nodejs.org/).

2. **Anki App & AnkiConnect Add-on**
   * **Anki** must be running on your PC.
   * Please install the **AnkiConnect** add-on in Anki.
     * Add-on code: `2055492159`
     * How to install: From the Anki menu, select "Tools" > "Add-ons" > "Get Add-ons...", enter the code, and restart Anki.

---

## 🚀 How to Start

1. Double-click **`start.bat`** in this folder to launch the application.
   * On the first launch, the necessary packages (Express, Dotenv, etc.) will be automatically downloaded and installed.
2. The startup is complete when the command prompt displays: "`Server is running at http://localhost:3000`".
3. Open the following URL in your browser:
   👉 **[http://localhost:3000](http://localhost:3000)**

---

## ⚙️ How to Use

1. **Register API Key (First time only)**
   * Enter your API key (obtained from Google AI Studio, etc.) into the "Gemini API Key" input field at the top left of the screen and click "Save".
   * The key is automatically saved to the `.env` file in the folder, so you will not need to enter it again from the second time onward.

2. **Check Connection**
   * Make sure the status indicators at the top of the screen show **Anki: Connected** and **Gemini: Configured**.
   * Select the target Anki deck from the dropdown menu (You can also create a new deck directly using the `+` button).

3. **Generate and Register Words**
   * Select your learning language and explanation language, enter a word, and click "Generate card info with AI".
   * Check the preview of the generated results (base form, meaning, core image, example sentence, and translation), and edit the details from the "Detailed Data" tab if necessary.
   * Click "Add this card to Anki" to automatically add a beautifully styled card to Anki!

---

## 📦 Packaging (Distribution / Backup)

If you are migrating to another PC or sharing the tool, please bundle this folder into a ZIP file **excluding** the `node_modules` folder and the `.env` file (which contains your API key).

* **Automatic Packaging Script:**
  Right-click `package.ps1` in the folder and select "Run with PowerShell". An **`AnkiLLM.zip`** file containing only the necessary files will be automatically created in the root directory.

# 日本語
Gemini APIを使用して英単語や多言語の語彙カード情報を自動生成し、PCで起動中のAnkiへ直接登録するツールです。

## 📋 事前準備

このツールを使用するには、以下のインストールと起動が必要です。

1. **Node.js**
   - パソコンに Node.js がインストールされている必要があります。
   - インストールされていない場合は [Node.js 公式サイト](https://nodejs.org/) から推奨版をダウンロードしてインストールしてください。

2. **Ankiアプリ ＆ AnkiConnectアドオン**
   - PCで **Anki** が起動している必要があります。
   - Ankiに **AnkiConnect** アドオンをインストールしてください。
     - アドオンコード: `2055492159`
     - インストール方法: Ankiメニューから「ツール」>「アドオン」>「アドオンを取得...」を選択し、コードを入力して再起動。

---

## 🚀 起動方法

1. このフォルダ内の **`start.bat`** をダブルクリックして起動します。
   - 初回起動時は、必要なパッケージ（Express, Dotenvなど）が自動的にダウンロード・インストールされます。
2. コマンドプロンプトに「`Server is running at http://localhost:3000`」と表示されたら起動完了です。
3. ブラウザで以下のURLを開きます：
   👉 **[http://localhost:3000](http://localhost:3000)**

---

## ⚙️ 使い方

1. **APIキーの登録 (初回のみ)**
   - 画面左上の「Gemini API Key」入力欄に、Google AI Studio等で取得したAPIキーを入力して「保存 (Save)」を押します。
   - キーはフォルダ内の `.env` ファイルに自動保存されるため、2回目以降の入力は不要です。

2. **接続確認**
   - 画面上のステータスランプが **Anki: 接続中 (Connected)** および **Gemini: 設定済 (Configured)** になっていることを確認します。
   - 登録先のAnkiデッキをプルダウンから選択します（`+` ボタンから新規デッキを直接作成することも可能です）。

3. **単語生成と登録**
   - 学ぶ言語と説明の言語を選択し、単語を入力して「AIでカード情報を生成」をクリックします。
   - 生成結果（原型、意味、コアイメージ、例文と翻訳）のプレビューを確認し、必要に応じて「詳細データ」タブから編集します。
   - 「このカードをAnkiに登録」を押すと、Ankiへ自動的に美しいスタイルのカードが追加されます！

---

## 📦 パッケージ化（配布・バックアップ）について

他のPCに移行したりする場合は、このフォルダ内の `node_modules` フォルダや `.env`（APIキーが含まれるファイル）を**除外して**ZIPにまとめてください。

* **自動パッケージ化スクリプト:**
  フォルダ内の `package.ps1` を右クリックして「PowerShell で実行」を選択すると、必要なファイルだけが自動でまとめられた **`AnkiLLM.zip`** がルートフォルダに作成されます。
