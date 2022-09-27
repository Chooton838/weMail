const { test } = require('@playwright/test');
const { base_url } = require('../utils/data');
const { integration } = require('../utils/locators');


async function disconnect_sync(name) {
    test("Disconnect Sync", async ({ page }) => {
        await page.goto(base_url);
        await page.locator(integration.navigate).click();
        await page.locator(integration.e_com_integration).click();

        if (name == "WooCommerce") {
            await page.locator(integration.wcom).click();
        }
        else {
            await page.locator(integration.edd).click();
        }
        if (await page.locator(integration.integration_title).isVisible()) {
            await page.locator(integration.disconnect).click();
            await page.locator(integration.confirm_disconnect).click();
        }
        else {
            await page.locator(integration.cancel).click();
        }
    })
}

function edd_integration(list_name) {
    test("EDD Integration", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(integration.navigate).click();
        await page.locator(integration.e_com_integration).click();

        const wcom_status = await page.locator(integration.wcom_status).innerText();

        if (wcom_status.trim() == "Active") {

            await page.locator(integration.wcom).click();
            if (await page.locator(integration.integration_title).isVisible()) {
                await page.locator(integration.disconnect).click();
                await page.locator(integration.confirm_disconnect).click();
            }
            else {
                await page.locator(integration.cancel).click();
            }
        }

        await page.locator(integration.edd).click();
        await page.locator(integration.select_list).click();
        await page.locator(integration.list_name).fill(list_name);
        await page.keyboard.press('Enter');
        await page.locator(integration.sync).click();
        await page.locator(integration.authorize).click();
        await page.locator(integration.confirm).click();
        await page.locator(integration.save).click();
        await page.waitForTimeout(3000);

    })
}

function wcom_integration(list_name) {
    test("WooCommerce Integration", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(integration.navigate).click();
        await page.locator(integration.e_com_integration).click();

        const edd_status = await page.locator(integration.edd_status).innerText();

        if (edd_status.trim() == "Active") {

            await page.locator(integration.edd).click();
            if (await page.locator(integration.integration_title).isVisible()) {
                await page.locator(integration.disconnect).click();
                await page.locator(integration.confirm_disconnect).click();
            }
            else {
                await page.locator(integration.cancel).click();
            }
        }

        await page.locator(integration.wcom).click();
        await page.locator(integration.select_list).click();
        await page.locator(integration.list_name).fill(list_name);
        await page.keyboard.press('Enter');
        await page.locator(integration.sync).click();
        await page.locator(integration.authorize).click();
        await page.locator(integration.confirm).click();
        await page.locator(integration.save).click();
        await page.waitForTimeout(3000);

    })
}


module.exports = {
    edd_integration,
    wcom_integration,
    disconnect_sync,
}