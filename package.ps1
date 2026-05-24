# AnkiLLM Packaging Script
$PSScriptRoot = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
Set-Location $PSScriptRoot

$ZipPath = Join-Path $PSScriptRoot "AnkiLLM.zip"

# Remove existing zip if it exists
if (Test-Path $ZipPath) {
    Remove-Item $ZipPath -Force
}

Write-Host "Creating AnkiLLM package..." -ForegroundColor Cyan

# Files and folders to include
$Includes = @(
    "public",
    "server.js",
    "package.json",
    "package-lock.json",
    ".env.example",
    "start.bat",
    "README.md"
)

# Zip files
Compress-Archive -Path $Includes -DestinationPath $ZipPath -Force

Write-Host "Success! Created package at: $ZipPath" -ForegroundColor Green
Write-Host "You can share this ZIP file. The receiver just needs to unzip it and double-click start.bat!" -ForegroundColor Green
