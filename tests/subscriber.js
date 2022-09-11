const { test } = require('@playwright/test');
const { base_url, subscriber_data } = require('../utils/data');
const { subscriber } = require('../utils/locators');


function create_subscriber(list_name) {

    test("create subscriber", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(subscriber.list_navigate).click();
        await page.locator(subscriber.search_list).fill(list_name);
        await page.locator(subscriber.select_list).click();
        await page.locator(subscriber.add_subscriber).click();
        await page.locator(subscriber.new_subscriber).click();
        await page.locator(subscriber.subscriber_email).fill(subscriber_data.email);
        await page.locator(subscriber.save_subscriber).click();

        await page.waitForTimeout(3000);

    })
}

module.exports = {
    create_subscriber,
}