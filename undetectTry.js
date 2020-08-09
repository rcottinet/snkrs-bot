const puppeteer = require('puppeteer-extra')
const pluginStealth = require('puppeteer-extra-plugin-stealth')
puppeteer.use(pluginStealth())
const chromeLauncher = require('chrome-launcher');
const axios = require('axios');
const Xvfb = require('xvfb');

const xvfb = new Xvfb();
xvfb.startSync();
const chromeConfig = {
    chromePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
}
const runSnkrBot = () => {
    (async () => {
        const chrome = await chromeLauncher.launch(chromeConfig);
        const response = await axios.get(`http://localhost:${chrome.port}/json/version`);
        const { webSocketDebuggerUrl } = response.data;
        const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });
    })();
};

runSnkrBot();