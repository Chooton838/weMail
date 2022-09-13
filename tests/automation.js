const { test } = require('@playwright/test');
const { base_url } = require('../utils/data');
const { auto } = require('../utils/locators');

function create_automation() {

    test("create_automation", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(auto.navigate).click();
        await page.locator(auto.new_auto).click();
        await page.locator(auto.select_template).click();
        await page.locator(auto.create_auto).click();
        await page.waitForTimeout(3000);
        await page.locator(auto.auto_home).click();
        await page.waitForTimeout(3000);
    })
}

function delete_automation(auto_name) {

    test("delete_automation", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(auto.navigate).click();
        await page.locator(auto.search_auto).fill(auto_name);
        await page.locator(auto.hover_menu).click();
        await page.locator(auto.click_delete).click();
        await page.locator(auto.delete).click();
        await page.locator(auto.navigate).click();
        await page.waitForTimeout(3000);
    })
}

function details_automation(auto_name) {

    test("details_automation", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(auto.navigate).click();
        await page.locator(auto.search_auto).fill(auto_name);
        await page.locator(auto.select_automation).click();
        await page.waitForTimeout(3000);
        await page.locator(auto.navigate).click();
        await page.waitForTimeout(3000);
    })
}

function update_automation(auto_name) {

    test("update_automation", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(auto.navigate).click();
        await page.locator(auto.search_auto).fill(auto_name);
        await page.locator(auto.select_automation).click();
        await page.waitForTimeout(3000);
        await page.locator(auto.auto_home).click();
        await page.waitForTimeout(3000);
    })
}

function active_automation(auto_name) {

    test("active_automation", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(auto.navigate).click();
        await page.locator(auto.search_auto).fill(auto_name);
        await page.locator(auto.select_automation).click();
        await page.locator(auto.change_status).click();
        await page.locator(auto.active_auto).click();
        await page.waitForTimeout(3000);
        await page.locator(auto.auto_home).click();
        await page.waitForTimeout(3000);
    })
}


module.exports = {
    create_automation,
    delete_automation,
    update_automation,
    active_automation,
    details_automation,
}