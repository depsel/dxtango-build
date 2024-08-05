@echo off
:: Comprobar si el script tiene permisos de administrador
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo.
    echo ============================
    echo Por favor, ejecute este script como administrador.
    echo ============================
    echo.
    pause
    exit /b
)

setlocal

:: Define el nombre del servicio
set SERVICE_NAME=dxtango

:: Obtener la ruta de node.exe
for /f "delims=" %%i in ('where node') do set "NODE_PATH=%%i"

:: Obtener la ruta de AppData local
set APPDATA_PATH=%LOCALAPPDATA%

:: Obtener el directorio actual
set CURRENT_DIR=%cd%

set LOGS_PATH="%APPDATA_PATH%\%SERVICE_NAME%\logs"

:: Mostrar las variables obtenidas para depuración
echo CURRENT_DIR: %CURRENT_DIR%
echo NODE_PATH: %NODE_PATH%
echo APPDATA_PATH: %APPDATA_PATH%
echo LOGS_PATH: %LOGS_PATH%

:: Crear el directorio si no existe
if not exist "%LOGS_PATH%" (
  mkdir "%LOGS_PATH%"
)


set INFO_LOG="%LOGS_PATH%\info.log"
set ERROR_LOG="%LOGS_PATH%\error.log"


:: Instalar y configurar el servicio usando nssm
nssm stop %SERVICE_NAME%
nssm remove %SERVICE_NAME% confirm
nssm install %SERVICE_NAME% "%NODE_PATH%" ".\build\server\boot.js"
nssm set %SERVICE_NAME% AppDirectory "%CURRENT_DIR%"
nssm set %SERVICE_NAME% AppStdout "%APPDATA_PATH%\%SERVICE_NAME%\logs\info.log"
nssm set %SERVICE_NAME% AppStderr "%APPDATA_PATH%\%SERVICE_NAME%\logs\error.log"

:: Instalar dependencias de producción
npm i --omit=dev --no-audit --no-fund > "%LOGS_PATH%\install.log" 2>&1 || (
  echo Hubo problemas al instalar las dependencias, pero el script continuara.
)

nssm start %SERVICE_NAME%

endlocal
