@echo off
title AnkiLLM Vocab Builder
cd /d "%~dp0"

echo ==========================================
echo  AnkiLLM Vocab Builder - Startup Script
echo ==========================================

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed on this PC.
    echo Please install Node.js from https://nodejs.org/ first.
    pause
    exit /b
)

:: Check if node_modules exists, if not install
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b
    )
)

echo [INFO] Starting the server...
echo Please open http://localhost:3000 in your browser.
echo Press Ctrl+C in this window to stop the server.
echo ==========================================
call npm start
pause
