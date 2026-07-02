const { app, BrowserWindow, shell, dialog } = require('electron');
const path = require('path');
const { fork } = require('child_process');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

// Setup auto updater logger
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';

// Configure autoUpdater events
autoUpdater.on('error', (err) => {
  log.error('AutoUpdater Error: ', err);
});

autoUpdater.on('update-downloaded', (info) => {
  dialog.showMessageBox({
    type: 'info',
    title: 'アップデート準備完了',
    message: '新しいバージョンのダウンロードが完了しました。再起動してインストールしますか？',
    buttons: ['再起動する', '後で']
  }).then((result) => {
    if (result.response === 0) {
      autoUpdater.quitAndInstall();
    }
  });
});


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

const fs = require('fs');
const { exec } = require('child_process');

function migrateFromAnkiLLM() {
  const newUserDataPath = app.getPath('userData');
  const oldUserDataPath = path.join(app.getPath('appData'), 'AnkiLLM');
  
  const newEnvPath = path.join(newUserDataPath, '.env');
  const oldEnvPath = path.join(oldUserDataPath, '.env');

  if (!fs.existsSync(newEnvPath) && fs.existsSync(oldEnvPath)) {
    try {
      if (!fs.existsSync(newUserDataPath)) {
        fs.mkdirSync(newUserDataPath, { recursive: true });
      }
      fs.copyFileSync(oldEnvPath, newEnvPath);
      log.info('Migrated .env from AnkiLLM to SuguAnki.');
    } catch (err) {
      log.error('Failed to migrate .env', err);
    }
  }

  const localAppData = path.join(app.getPath('appData'), '../Local');
  const oldUninstallerPath = path.join(localAppData, 'Programs', 'ankillm', 'Uninstall AnkiLLM.exe');
  
  if (fs.existsSync(oldUninstallerPath)) {
    log.info('Found old AnkiLLM uninstaller. Running silently to clean up...');
    exec(`"${oldUninstallerPath}" /S`, (error, stdout, stderr) => {
      if (error) {
        log.error('Failed to uninstall AnkiLLM silently:', error);
      } else {
        log.info('Successfully uninstalled old AnkiLLM.');
      }
    });
  }
}

app.whenReady().then(() => {
  migrateFromAnkiLLM();
  createWindow();

  if (app.isPackaged) {
    autoUpdater.checkForUpdatesAndNotify();
  }

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
