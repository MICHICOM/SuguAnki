## Disclaimer: This project is powered by LLMs. Use at your own risk.
## このプロジェクトはLLMを用いて作成されています。ご使用は自己責任でお願いいたします。

# [Download the latest version from here](https://github.com/MICHICOM/AnkiLLM/releases/)
# [インストールはこちらから](https://github.com/MICHICOM/AnkiLLM/releases/)

---

# 🇺🇸 English

## 🎉 AnkiLLM Vocab Builder
A tool that automatically generates English or multilingual vocabulary card information using the Gemini API and registers it directly to Anki.

### 🚀 Installation
You can download the latest version for your platform from the **Releases** page:

**For Windows:**
- `AnkiLLM Setup X.X.X.exe` : Installer (Recommended)
- `AnkiLLM-X.X.X-win.zip` : Portable version (No installation required)

**For Android:**
- `AnkiLLM-Android-vX.X.X.apk` : Install directly on your Android device

---

### ⚙️ Quick Start (Windows)
1. **Prerequisite (AnkiConnect Setup):** 
   - Open **Anki** on your PC.
   - Go to **Tools -> Add-ons** from the top menu.
   - Click **Get Add-ons...**, type the code `2055492159`, and click OK.
   - **Restart Anki** to activate the add-on. *(Note: You must keep Anki running in the background whenever you use AnkiLLM!)*
2. Launch AnkiLLM and click the **Settings (⚙️)** in the header to register your Gemini API Key.
3. Check that the status shows **Anki: Connected** and **Gemini: Configured**.
4. Select your languages, type a word, and click "Generate card info with AI".
5. Click "Add this card to Anki" to save the beautiful card directly to your deck!

### 📱 Android Specific Setup (AnkiDroid Integration)
The Android app communicates directly with **AnkiDroid** installed on your device. No PC is required!
1. Install **AnkiDroid** on your device from the Google Play Store.
2. Open AnkiDroid, go to **Settings -> Advanced**, and enable **"AnkiDroid API"** (Enable third-party app integration).
3. **Note:** Please create at least one Deck in AnkiDroid manually first, as decks cannot be created directly from AnkiLLM on Android.
4. Open the AnkiLLM app and grant the requested database access permissions. Your generated cards will be saved directly to your AnkiDroid!

---

### 🛠️ Development (Running from Source)
1. Install [Node.js](https://nodejs.org/).
2. Run `npm install` in the root folder.
3. Run `npm run start:windows` to launch the desktop application.
   *(You can also run `npm run dev` if you only want to start the local backend server).*

---
---

# 🇯🇵 日本語

## 🎉 AnkiLLM Vocab Builder
Gemini APIを使用して英単語や多言語の語彙カード情報を自動生成し、Ankiへ直接登録するツールです。

### 🚀 インストール方法
**Releases（リリース）** ページから、お使いの端末に合わせた最新のファイルをダウンロードしてください。

**Windowsをお使いの方:**
- `AnkiLLM Setup X.X.X.exe` : インストーラー版 (推奨)
- `AnkiLLM-X.X.X-win.zip` : ポータブル版 (解凍するだけで使えます)

**Androidをお使いの方:**
- `AnkiLLM-Android-vX.X.X.apk` : Android端末に直接インストールできます

---

### ⚙️ 使い方 (Windows版)
1. **事前準備 (AnkiConnectの導入):** 
   - PCで **Anki** を起動します。
   - 上部のメニューから「**ツール -> アドオン**」を開きます。
   - 右側の「**アドオンを取得...**」をクリックし、コード `2055492159` を入力してOKを押します。
   - インストールが完了したら、必ず **Ankiを一度再起動** してください。（※AnkiLLMを使用する際は、常にAnkiを起動したままにしておく必要があります）
2. アプリを起動し、ヘッダーの **設定 (⚙️)** からGemini APIキーを登録します。
3. ヘッダーのステータスが **Anki: 接続中** および **Gemini: 設定済** になったことを確認します。
4. 言語を選択して単語を入力し、「AIでカード情報を生成」をクリックします。
5. 内容を確認して「このカードをAnkiに登録」を押せば、Ankiへの登録完了です！

### 📱 Android版固有の設定 (AnkiDroidとの連携方法)
Androidアプリは、端末にインストールされている **AnkiDroid** アプリと直接連携して動作します（PCは不要です）。
1. お使いのAndroid端末に **AnkiDroid** をインストールします。
2. AnkiDroidを開き、「**設定 -> 高度な設定**」から「**サードパーティアプリからのアクセス (AnkiDroid API を有効にする)**」をオンにします。
3. **注意:** Android版AnkiLLMからはデッキの新規作成ができない仕様のため、あらかじめAnkiDroid上で登録先のデッキを作成しておいてください。
4. AnkiLLMを開くとデータベースへのアクセス権限を求められるので「許可」します。これでAIが生成したカード情報が直接AnkiDroidに保存されるようになります！

---

### 🛠️ 開発者向け (ソースコードから起動する場合)
1. [Node.js](https://nodejs.org/) をインストールします。
2. コマンドプロンプト等でルートフォルダを開き、`npm install` を実行します。
3. `npm run start:windows` を実行すると、デスクトップアプリが立ち上がります。
