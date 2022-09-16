const { test } = require('@playwright/test');
const { base_url, subscriber_data } = require('../utils/data');
const { subscriber } = require('../utils/locators');


function create_subscriber(list_name) {
    test("create subscriber", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(subscriber.list_navigate).click();
        await page.locator(subscriber.search_list).fill(list_name);
        await page.waitForTimeout(3000);
        await page.locator(subscriber.select_list).click();
        await page.locator(subscriber.add_subscriber).click();
        await page.locator(subscriber.new_subscriber).click();
        await page.locator(subscriber.subscriber_email).fill(subscriber_data.email);
        await page.locator(subscriber.save_subscriber).click();

        await page.waitForTimeout(3000);

    })
}

function add_subscriber(list_name) {
    test("add subscriber", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(subscriber.list_navigate).click();
        await page.locator(subscriber.search_list).fill(list_name);
        await page.waitForTimeout(3000);
        await page.locator(subscriber.select_list).click();
        await page.locator(subscriber.add_subscriber).click();
        await page.locator(subscriber.map_existing_subscriber).click();
        await page.locator(subscriber.find_subscriber).click();

        for (let i = 0; i < subscriber_data.subscriber_emails.length; i++) {
            await page.locator(subscriber.subscriber_email).fill(subscriber_data.subscriber_emails[i]);
            await page.keyboard.press('Enter');
        }

        await page.locator(subscriber.map_subscriber).click();
        await page.locator(subscriber.map_subscriber).click();
        await page.waitForTimeout(3000);

    })
}

function details_subscriber(list_name, subscriber_email) {
    test("subscriber's details", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(subscriber.list_navigate).click();
        await page.locator(subscriber.search_list).fill(list_name);
        await page.waitForTimeout(3000);
        await page.locator(subscriber.select_list).click();

        await page.locator(subscriber.search_subscriber).fill(subscriber_email);
        await page.locator(subscriber.select_subscriber).click();
        await page.waitForTimeout(3000);

    })
}

function delete_subscriber(list_name, subscriber_email) {
    test("delete subscriber", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(subscriber.list_navigate).click();
        await page.locator(subscriber.search_list).fill(list_name);
        await page.waitForTimeout(3000);
        await page.locator(subscriber.select_list).click();

        await page.locator(subscriber.search_subscriber).fill(subscriber_email);
        await page.locator(subscriber.select_subscriber).click();
        await page.waitForTimeout(3000);
        await page.locator(subscriber.delete_subscriber).click();
        await page.locator(subscriber.delete).click();

        await page.waitForTimeout(3000);

    })
}

function unsubscribe_subscriber(list_name, subscriber_email) {
    test("subscriber's details", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(subscriber.list_navigate).click();
        await page.locator(subscriber.search_list).fill(list_name);
        await page.waitForTimeout(3000);
        await page.locator(subscriber.select_list).click();
        await page.locator(subscriber.search_subscriber).fill(subscriber_email);
        await page.waitForTimeout(3000);
        await page.locator(subscriber.check_subscriber).click();
        await page.locator(subscriber.mark_subscriber_unsubscribed).click();
        await page.waitForTimeout(3000);
        await page.locator(subscriber.search_list).fill("");
        await page.waitForTimeout(3000);

    })
}

function subscribe_subscriber(list_name, subscriber_email) {
    test("subscriber's details", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(subscriber.list_navigate).click();
        await page.locator(subscriber.search_list).fill(list_name);
        await page.waitForTimeout(3000);
        await page.locator(subscriber.select_list).click();
        await page.locator(subscriber.search_subscriber).fill(subscriber_email);
        await page.waitForTimeout(3000);
        await page.locator(subscriber.check_subscriber).click();
        await page.locator(subscriber.mark_subscriber_subscribed).click();
        await page.waitForTimeout(3000);
        await page.locator(subscriber.search_list).fill("");
        await page.waitForTimeout(3000);

    })
}


module.exports = {
    create_subscriber,
    add_subscriber,
    details_subscriber,
    delete_subscriber,
    unsubscribe_subscriber,
    subscribe_subscriber,
}