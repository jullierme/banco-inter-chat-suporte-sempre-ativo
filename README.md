
# Script tabajara para manter o chat de suporte do Banco Inter sempre ativo!

## Problema

Você já tentou falar com o suporte online do Banco Inter, apenas para perder seu tempo e ganhar alguns cabelos brancos, porque a sessão foi encerrada automaticamente após 5 minutos? Pois é, eu também. Não se preocupe, eu tenho a solução REVOLUCIONÁRIA para evitar que você jogue seu computador pela janela.


## Solução

Este script usa Playwright, uma ferramenta de automação de navegadores, para interagir com o chat do Banco Inter. Ele envia uma mensagem no chat a cada 3 minutos para manter a sessão ativa e garantir que você não precise começar tudo de novo. Legal, né? Aposto que os atendentes preguiçosos não esperavam por essa. (Com todo respeito aos atendentes sempre muito eficientes...)

## Requisitos

- Node.js instalado no seu computador. Sério, isso é importante.

## Instalação e execuçāo no Windows

1. **Clone o repositório.**

   ```sh
   git clone https://github.com/jullierme/banco-inter-chat-suporte-sempre-ativo.git
   cd banco-inter-chat-suporte-sempre-ativo
   ```

2. **Execute o arquivo bat para instalar as dependencias e inciar script.**

   ```sh
   setup_and_run.bat
   ```

## Instalação e execuçāo no MacOS ou Linux

1. **Clone o repositório ou baixe o arquivo.**

   ```sh
   git clone https://github.com/jullierme/banco-inter-chat-suporte-sempre-ativo.git
   cd banco-inter-chat-suporte-sempre-ativo
   ```

2. **Torne o arquivo sh executável:**

   ```sh
   chmod +x setup_and_run.sh
   ```

2. **Execute o arquivo sh para instalar as dependencias e inciar script.**

   ```sh
   ./setup_and_run.sh
   ```

## Uso

   - O script vai abrir o navegador e te levar até a página de login do Banco Inter.
   - Ele aguardará 1 minuto para que você possa fazer o login manualmente e abrir o chat. Com esse tempo todo de espera, da tempo para fazer um café, talvez?
   - Depois do login, o script enviará uma mensagem inicial com uma grande mensagem dizendo "." (Isso mesmo, apenas um "ponto"). A cada 3 minutos isso vai se repetir, porque ninguém merece ser ignorado.
   - Dessa forma, você pode ficar despreocupado com o fechamendo indevido do seu atendimento. 

## Nota

Não há nada de malicioso neste código. O único objetivo é manter sua conversa ativa durante o atendimento online do Banco Inter. Nenhuma mensagem será armazenada e nenhum dado será coletado. O código fonte é aberto e pode ser analisado/validado por qualquer pessoa. Confie, sou legal.

## Abrir uma Issue

Se o script deixar de funcionar ou se você encontrar algum problema, por favor, abra uma issue para que eu possa investigar e resolver o problema. Ou pelo menos tentar.