const { test, chromium } = require('@playwright/test');
const { base_url } = require('../utils/data');
const { lgn } = require('../utils/locators');
const fs = require('fs');

function login(user_name, password) {
  test("login", async ({ }) => {

    fs.writeFile('state.json', '{"cookies":[],"origins": []}', function () { });

    const browser = await chromium.launch({
      viewport: null
    });
    const page = await browser.newPage();
    await page.goto(base_url);
    await page.locator(lgn.email).fill(user_name);
    await page.locator(lgn.pass).fill(password);
    await page.locator(lgn.submit).click();
    await page.context().storageState({ path: 'state.json' });
    await browser.close();
  })
}

module.exports = {
  login,
}