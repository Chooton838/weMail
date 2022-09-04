const { chromium } = require('@playwright/test');
const {test} = require('@playwright/test');
const fs = require('fs');

module.exports.login = async config => {
  
  test("login", async({}) => {
    
    fs.writeFile('state.json', '{"cookies":[],"origins": []}', function () {});

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://stagingwp.getwemail.io/wp-admin/');
    await page.locator("//*[@id=\"user_login\"]").fill("chooton838@gmail.com");
    await page.locator("//*[@id=\"user_pass\"]").fill("fMO*(B#odlws8%j#qrrp13$9");
    await page.locator("//*[@id=\"wp-submit\"]").click();
    await page.context().storageState({ path: 'state.json' });
    await browser.close();
  })
};