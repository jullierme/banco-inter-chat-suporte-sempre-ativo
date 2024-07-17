#!/bin/bash

# Verifica se o Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "Node.js não está instalado. Por favor, instale o Node.js e tente novamente."
    exit
fi

# Instala as dependências do projeto
echo "Instalando dependências..."
npm install @playwright/test

# Instala os navegadores suportados pelo Playwright
echo "Instalando navegadores suportados pelo Playwright..."
npx playwright install

# Executa o script
echo "Executando o script..."
node index.js
