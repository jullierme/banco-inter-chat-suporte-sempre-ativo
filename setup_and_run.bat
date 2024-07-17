@echo off

:: Verifica se o Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js não está instalado. Por favor, instale o Node.js e tente novamente.
    exit /b
)

:: Instala as dependências do projeto
echo Instalando dependências...
npm install @playwright/test

:: Instala os navegadores suportados pelo Playwright
echo Instalando navegadores suportados pelo Playwright...
npx playwright install

:: Executa o script
echo Executando o script...
node index.js
