const fs = require('fs');
const path = require('path');

const platform = process.argv[2];
if (!platform || (platform !== 'windows' && platform !== 'android')) {
  console.error('Error: Please specify a platform (windows or android).');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const version = require(path.join(rootDir, 'package.json')).version;

const buildsDir = path.join(rootDir, 'Builds');
if (!fs.existsSync(buildsDir)) {
  fs.mkdirSync(buildsDir, { recursive: true });
}

if (platform === 'windows') {
  const distDir = path.join(rootDir, 'apps/windows/dist');
  const filesToCopy = [
    { src: `SuguAnki-Setup-${version}.exe`, dest: `SuguAnki-Setup-${version}.exe` },
    { src: `SuguAnki-${version}-win.zip`, dest: `SuguAnki-${version}-win.zip` },
    { src: 'latest.yml', dest: `v${version}_latest.yml` },
    { src: 'latest.yml', dest: 'latest.yml' }
  ];

  console.log(`Copying Windows build artifacts for version ${version}...`);
  filesToCopy.forEach(file => {
    const srcPath = path.join(distDir, file.src);
    const destPath = path.join(buildsDir, file.dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✔ Copied ${file.src} to Builds/${file.dest}`);
    } else {
      console.error(`Error: Source file not found: ${srcPath}`);
      process.exit(1);
    }
  });
} else if (platform === 'android') {
  const apkSrc = path.join(rootDir, `apps/mobile/android/app/build/outputs/apk/debug/SuguAnki-${version}.apk`);
  const apkDest = path.join(buildsDir, `SuguAnki-${version}.apk`);

  console.log(`Copying Android build artifacts for version ${version}...`);
  if (fs.existsSync(apkSrc)) {
    fs.copyFileSync(apkSrc, apkDest);
    console.log(`✔ Copied SuguAnki-${version}.apk to Builds/`);
  } else {
    console.error(`Error: Source file not found: ${apkSrc}`);
    process.exit(1);
  }
}

console.log('Post-build copy completed successfully.');
