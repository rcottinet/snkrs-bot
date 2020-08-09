// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
    console.log('Running tests..')
    const page = await browser.newPage()
    await page.goto('https://arh.antoinevastel.com/bots/areyouheadless')
    await page.waitFor(5000)
    await page.screenshot({ path: 'areyouheadless.png', fullPage: true })
    await browser.close()
    console.log(`All done, check the screenshot. ✨`)
})