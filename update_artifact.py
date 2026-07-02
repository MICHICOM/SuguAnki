import json
path = 'apps/windows/package.json'
with open(path, 'r', encoding='utf-8') as f:
    pkg = json.load(f)

pkg['build']['nsis']['artifactName'] = '${productName}-Setup-${version}.${ext}'

with open(path, 'w', encoding='utf-8') as f:
    json.dump(pkg, f, indent=2)
