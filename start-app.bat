@echo off
echo Starting Jalees Booklist App...
echo.

echo Starting Backend Server...
start "Backend Server" /D "%~dp0backend" cmd /k "npm start"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo Starting Frontend Server...
start "Frontend Server" /D "%~dp0frontend" cmd /k "npm start"

echo.
echo Both servers are starting...
echo Backend: http://localhost:4000
echo Frontend: http://localhost:3000
echo.
echo Press any key to close this window...
pause > nul
