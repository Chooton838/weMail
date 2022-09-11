const { chromium } = require('@playwright/test');
const { test } = require('@playwright/test');
const { base_url } = require('../utils/data');
const { lgn } = require('../utils/locators');
const fs = require('fs');

function login() {
  test("login", async ({ }) => {

    fs.writeFile('state.json', '{"cookies":[],"origins": []}', function () { });

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(base_url);
    await page.locator(lgn.email).fill("chooton838@gmail.com");
    await page.locator(lgn.pass).fill("fMO*(B#odlws8%j#qrrp13$9");
    await page.locator(lgn.submit).click();
    await page.context().storageState({ path: 'state.json' });
    await browser.close();
  })
}

module.exports = {
  login,
}