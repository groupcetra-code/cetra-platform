@echo off
REM Run from project root or this script will change directory to its own location
cd /d %~dp0\.. 
echo Project path: %cd%
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js not found in PATH. Please install Node.js and rerun this script.
  pause
  exit /b 1
)

echo === npm install ===
npm install > install-output.txt 2>&1 || echo INSTALL_FAILED

echo === npm run build ===
npm run build > build-output.txt 2>&1 || echo BUILD_FAILED

echo === npx eslint ===
npx eslint . --ext .ts,.tsx,.js,.jsx > eslint-output.txt 2>&1 || echo ESLINT_FAILED

echo Done. Outputs saved:
echo - install-output.txt
echo - build-output.txt
echo - eslint-output.txt
echo You can paste these files or attach them here for me to inspect.
pause
