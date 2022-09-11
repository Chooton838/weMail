const { test } = require('@playwright/test');
const { base_url, subscriber_data } = require('../utils/data');

function automation() {

    test("automation", async ({ page }) => {

        await page.goto(base_url);
        await page.locator("test").click();
        await page.waitForTimeout(3000);
    })
}

module.exports = {
    automation,
}