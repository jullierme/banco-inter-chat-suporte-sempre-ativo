const { chromium } = require('@playwright/test');

const LOGIN_WAIT_TIME_MS = 60000; // 1 minute
const MESSAGE_INTERVAL_MS = 180000; // 3 minutes
const KEEP_BROWSER_OPEN_MS = 3600000 * 24; // 24 hours
const DUMMY_MESSAGE = '.'; // 24 hours

(async () => {
    console.log('Iniciando o navegador...');
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('Navegando até a página de login do Banco Inter...');
    await page.goto('https://contadigital.inter.co/home', { waitUntil: 'networkidle' });

    console.log(`Esperando ${LOGIN_WAIT_TIME_MS / 1000 / 60} minuto(s) para login manual...`);
    await page.waitForTimeout(LOGIN_WAIT_TIME_MS);

    console.log('Login manual deve estar concluído e chat aberto...');

    const sendMessage = async () => {
        try {
            console.log('Tentando localizar o iframe do chat...');
            const iframeElement = await page.waitForSelector('iframe[name=intercom-messenger-frame]');
            const iframe = await iframeElement.contentFrame();
            if (!iframe) {
                console.error('Não foi possível acessar o iframe.');
                return;
            }
            console.log('Iframe localizado. Tentando enviar mensagem...');
            await iframe.fill('textarea[name=message]', DUMMY_MESSAGE);
            await iframe.click('.intercom-composer-send-button');
            console.log('Mensagem enviada com sucesso.');
        } catch (e) {
            console.error(`Erro ao enviar mensagem: ${e}`);
        }
    };

    console.log('Enviando mensagem inicial...');
    await sendMessage();

    console.log(`Configurando envio de mensagem a cada ${MESSAGE_INTERVAL_MS / 1000 / 60} minuto(s)...`);
    setInterval(sendMessage, MESSAGE_INTERVAL_MS);

    console.log('Script está rodando. O navegador permanecerá aberto até que você o feche manualmente.');

    // Keep the browser open indefinitely or 24h
    await page.waitForTimeout(KEEP_BROWSER_OPEN_MS);
    await browser.close();
})();
