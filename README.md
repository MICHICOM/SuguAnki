### "This project is powered by LLMs. Use at your own risk."
### このプロジェクトはLLMを用いて作成されています。ご使用は自己責任でお願いいたします。

# AnkiLLM Vocab Builder

A tool that automatically generates English or multilingual vocabulary card information using the Gemini API and registers it directly to Anki running on your PC. 
*(English and Japanese documentation below / 英語・日本語のドキュメント)*

---

# English

## 📋 Prerequisites

To use this tool, you need to install and launch the following:

1. **Anki App & AnkiConnect Add-on**
   * **Anki** must be running on your PC.
   * Please install the **AnkiConnect** add-on in Anki.
     * Add-on code: `2055492159`
     * How to install: From the Anki menu, select "Tools" > "Add-ons" > "Get Add-ons...", enter the code, and restart Anki.

## 🚀 Installation & How to Start

### Option 1: Using the Windows Installer (Recommended)
1. Download and run the `AnkiLLM Setup X.X.X.exe` installer.
2. Launch the application from your desktop or start menu.

### Option 2: Running from Source Code (Development)
1. Install [Node.js](https://nodejs.org/).
2. Run `npm install` in the root folder.
3. Run `npm run start:windows` to launch the desktop application.
   *(You can also run `npm run dev` if you only want to start the local backend server).*

## ⚙️ How to Use

1. **Register API Key (First time only)**
   * Click the **Settings (Gear icon)** in the header.
   * Enter your API key (obtained from Google AI Studio, etc.) and click "Save".
   * The key is automatically saved, so you will not need to enter it again from the second time onward.

2. **Check Connection**
   * Make sure the status indicators in the header show **Anki: Connected** and **Gemini: Configured**.

3. **Generate and Register Words**
   * Select your source learning language and target explanation language from the dropdown menus in the header.
   * Enter a word in the input field and click "Generate card info with AI".
   * Check the preview of the generated results (base form, meaning, core image, example sentence, and translation).
   * Click "Add this card to Anki" to automatically add a beautifully styled card to Anki!

## 📦 Building from Source (Packaging)

To build the standalone `.exe` installer for Windows:
```bash
npm run build:windows
```
The installer will be generated in the `apps/windows/dist/` directory.

---

# 日本語

Gemini APIを使用して英単語や多言語の語彙カード情報を自動生成し、PCで起動中のAnkiへ直接登録するデスクトップツールです。

## 📋 事前準備

このツールを使用するには、あらかじめ以下の準備が必要です。

1. **Ankiアプリ ＆ AnkiConnectアドオン**
   - PCで **Anki** が起動している必要があります。
   - Ankiに **AnkiConnect** アドオンをインストールしてください。
     - アドオンコード: `2055492159`
     - インストール方法: Ankiメニューから「ツール」>「アドオン」>「アドオンを取得...」を選択し、コードを入力して再起動。

## 🚀 インストールと起動方法

### 方法1：Windowsインストーラーを使う場合（推奨）
1. 配布されている `AnkiLLM Setup X.X.X.exe` をダウンロードして実行し、インストールします。
2. デスクトップやスタートメニューからアプリを起動します。

### 方法2：ソースコードから起動する場合（開発用）
1. [Node.js](https://nodejs.org/) をインストールします。
2. コマンドプロンプト等でルートフォルダを開き、`npm install` を実行します。
3. `npm run start:windows` を実行すると、デスクトップアプリが立ち上がります。

## ⚙️ 使い方

1. **APIキーの登録 (初回のみ)**
   - 画面ヘッダーにある **設定ボタン（歯車アイコン）** をクリックします。
   - Google AI Studio等で取得したGemini APIキーを入力して保存します。
   - （キーは内部に自動保存されるため、2回目以降の入力は不要です）

2. **接続確認**
   - ヘッダーのステータスランプが **Anki: 接続中** および **Gemini: 設定済** になっていることを確認します。

3. **単語生成と登録**
   - ヘッダー部分で「学ぶ言語」と「説明の言語」を選択します。
   - 単語を入力して「AIでカード情報を生成」をクリックします。
   - 生成結果（原型、意味、コアイメージ、例文と翻訳）のプレビューを確認します。
   - 「このカードをAnkiに登録」を押すと、Ankiへ自動的にデザインされたカードが追加されます！

## 📦 ビルド・パッケージ化について

ご自身でWindows用のインストーラー（.exe）を作成する場合は、以下のコマンドを実行します：
```bash
npm run build:windows
```
ビルドが完了すると、`apps/windows/dist/` フォルダ内にセットアップ用ファイルが生成されます。
