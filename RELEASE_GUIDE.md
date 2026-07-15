# SuguAnki リリース手順書 (Release Guide)

本プロジェクトでアプリの新しいバージョンをリリースする際の手順書です。
バージョン情報の更新、Gitタグの作成、ビルド、およびGitHub Releasesへの下書き作成までが自動化されています。

---

## 🛠 事前準備（確認）

GitHub Actionsでリリース署名を行うため、以下のSecretsがGitHubリポジトリ（`Settings > Secrets and variables > Actions`）に正しく登録されている必要があります。
*(※すでに登録済みのため、通常は再設定の必要はありません。鍵を変更する場合のみ再設定してください)*

* `ANDROID_KEYSTORE_BASE64`: Androidデバッグ用キーストアのBase64文字列
* `ANDROID_KEYSTORE_PASSWORD`: `android`
* `ANDROID_KEY_ALIAS`: `androiddebugkey`
* `ANDROID_KEY_PASSWORD`: `android`

---

## 🚀 リリース手順

新しいバージョン（例: `1.0.5`）をリリースする際は、以下のステップを実行します。

### ステップ 1: ローカルでバージョンを一括更新する
プロジェクトのルートディレクトリで以下のコマンドを実行します。
```bash
npm run bump 1.0.5
```

**【このコマンドが自動で行うこと】**
1. 全 `package.json`（5箇所）のバージョンを `1.0.5` に更新
2. Android の `build.gradle` 内の `versionName` を `"1.0.5"`、`versionCode` を `+1` インクリメント
3. フロントエンドの `packages/frontend/public/app.js` 内の `CURRENT_APP_VERSION` を `"v1.0.5"` に更新（無限アップデート防止）
4. 変更をGitにステージングし、コミット（`chore(release): v1.0.5`）と Gitタグ（`v1.0.5`）をローカルに自動作成

---

### ステップ 2: 変更とタグをGitHubにプッシュする
作成されたコミットとタグをGitHubに送信します。
```bash
# 1. コードの送信
git push origin main

# 2. タグの送信
git push origin v1.0.5
```
*(※一度認証情報をWindows資格情報マネージャーに記憶させていれば、パスワード等の入力なしでプッシュできます)*

---

### ステップ 3: GitHub Actionsでの自動ビルド完了を待つ
タグがプッシュされると、GitHub上の「Actions」タブで自動ビルド（`Release Build and Draft`）が開始されます。
* Windowsアプリ（`.exe` / `.zip`）、および署名済みのAndroidアプリ（`.apk`）が自動でビルドされます。
* ビルドが完了するまで約5〜8分かかります。ステータスが緑色のチェックマーク（Success）に変わるのを待ちます。

---

### ステップ 4: 下書き（Draft）リリースを公開する
自動ビルドが成功すると、GitHubの「Releases」ページに `v1.0.5` の下書き（Draft）リリースが自動作成されます。

1. GitHubの **Releases ページ**（`https://github.com/MICHICOM/SuguAnki/releases`）を開きます。
2. 作成された下書きリリースの右上にある **`Edit`（編集）ボタン** をクリックします。
3. **アセットのクリーンアップ（推奨）**:
   `Assets` 欄に、不要な古いバージョン情報（例: `v1.0.5_latest.yml` など）がある場合は、アセット名の右側にあるゴミ箱マークをクリックして手動で削除します。
   *(※ `latest.yml`、`SuguAnki-Setup-1.0.5.exe`、`SuguAnki-1.0.5-win.zip`、`SuguAnki-1.0.5.apk` が残っていれば十分です)*
4. **リリースノートの確認**:
   コミット履歴をベースに英語・日本語のサマリーが自動生成されます。必要に応じて確認・調整してください。
5. **公開（Publish）**:
   画面最下部にある **`Publish release`** ボタンをクリックします。

これで新しいバージョンのリリースが正式に完了します。
