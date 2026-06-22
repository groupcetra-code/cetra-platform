@echo off
cd /d %~dp0\..
if exist .github\workflows\ci.yml del /q .github\workflows\ci.yml
del /q scripts\collect_logs.cmd
del /q next.config.js
copy /y next.config.ts next.config.js >nul 2>&1
echo Reverted created automation files. Please restore application files manually or from backup.
pause
