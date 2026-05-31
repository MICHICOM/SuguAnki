const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const { fork } = require('child_process');

let mainWindow;
let serverProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 1032,
    x: 0,
    y: 0,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // URLを開く際に、デフォルトのブラウザで開くようにフックする
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  // バックエンド（Express）の起動処理
  const isPackaged = app.isPackaged;
  let serverScriptPath;

  if (isPackaged) {
    // ビルド後の環境 (extraResourcesにコピーされたbackendを参照)
    serverScriptPath = path.join(process.resourcesPath, 'backend', 'server.js');
  } else {
    // 開発環境
    serverScriptPath = path.join(__dirname, '../../packages/backend/server.js');
  }

  // サーバーを子プロセスとして起動
  serverProcess = fork(serverScriptPath, [], {
    env: {
      ...process.env,
      ENV_FILE_PATH: path.join(app.getPath('userData'), '.env'),
      NODE_PATH: isPackaged ? path.join(process.resourcesPath, 'app.asar', 'node_modules') : process.env.NODE_PATH
    }
  });

  serverProcess.on('error', (err) => {
    console.error('バックエンドプロセスの起動に失敗しました。', err);
  });

  // サーバーの起動を少し待ってからUIを読み込む
  setTimeout(() => {
    mainWindow.loadURL('http://localhost:3000');
  }, 1500);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  // Electron終了時にバックエンドプロセスをキルする
  if (serverProcess) {
    serverProcess.kill();
  }
});
