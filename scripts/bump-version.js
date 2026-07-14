const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const newVersion = process.argv[2];
if (!newVersion) {
  console.error('Error: Please specify a new version. Example: npm run bump 1.0.4');
  process.exit(1);
}

// 簡易的なセマンティックバージョンのバリデーション
if (!/^\d+\.\d+\.\d+$/.test(newVersion)) {
  console.error('Error: Invalid version format. Use X.Y.Z (e.g. 1.0.4)');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');

// 更新するpackage.jsonファイルのリスト
const packageJsonPaths = [
  'package.json',
  'packages/backend/package.json',
  'packages/frontend/package.json',
  'apps/windows/package.json',
  'apps/mobile/package.json'
];

console.log(`Updating package.json files to version ${newVersion}...`);
packageJsonPaths.forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  if (fs.existsSync(fullPath)) {
    const pkg = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    pkg.version = newVersion;
    fs.writeFileSync(fullPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
    console.log(`✔ Updated ${relPath}`);
  } else {
    console.warn(`⚠ File not found: ${relPath}`);
  }
});

// build.gradle の更新
const gradlePath = path.join(rootDir, 'apps/mobile/android/app/build.gradle');
if (fs.existsSync(gradlePath)) {
  console.log('Updating Android build.gradle (versionName and versionCode)...');
  let content = fs.readFileSync(gradlePath, 'utf8');
  
  // versionCode のインクリメント
  content = content.replace(/versionCode\s+(\d+)/, (match, p1) => {
    const code = parseInt(p1, 10) + 1;
    console.log(`✔ Incremented versionCode to ${code}`);
    return `versionCode ${code}`;
  });
  
  // versionName の更新
  content = content.replace(/versionName\s+"[^"]+"/, () => {
    console.log(`✔ Updated versionName to "${newVersion}"`);
    return `versionName "${newVersion}"`;
  });
  
  fs.writeFileSync(gradlePath, content, 'utf8');
} else {
  console.warn(`⚠ build.gradle not found at ${gradlePath}`);
}

console.log('Version bump completed successfully.');

// Git 操作
try {
  console.log('Creating Git commit and tag...');
  execSync('git add .', { stdio: 'inherit', cwd: rootDir });
  execSync(`git commit -m "chore(release): v${newVersion}"`, { stdio: 'inherit', cwd: rootDir });
  execSync(`git tag v${newVersion}`, { stdio: 'inherit', cwd: rootDir });
  console.log(`✔ Created git commit and tag v${newVersion}`);
  console.log('\n======================================================');
  console.log('Ready to push! Run the following command to push to GitHub:');
  console.log(`  git push origin main --tags`);
  console.log('======================================================');
} catch (error) {
  console.error('Warning: Failed to run Git commands. You may need to commit and tag manually.', error.message);
}
