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
        if (await page.locator('//section/h1').isVisible()) {
            await page.locator('//button[contains(text(),"Disconnect")]').click();
            await page.locator('//div[@class="swal-button-container"]/button[contains(text(),"Disconnect")]').click();
        }
        else {
            await page.locator('//a[contains(text(),"Cancel")]').click();
        }
    })
}

function edd_integration(list_name) {
    test("EDD Integration", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(integration.navigate).click();
        await page.locator(integration.e_com_integration).click();

        const wcom_status = await page.locator('//h3[contains(text(),"WooCommerce")]/../../span').innerText();

        if (wcom_status.trim() == "Active") {

            //sync_status(page, "WooCommerce");

            await page.locator(integration.wcom).click();
            if (await page.locator('//section/h1').isVisible()) {
                await page.locator('//button[contains(text(),"Disconnect")]').click();
                await page.locator('//div[@class="swal-button-container"]/button[contains(text(),"Disconnect")]').click();
            }
            else {
                await page.locator('//a[contains(text(),"Cancel")]').click();
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

        const edd_status = await page.locator('//h3[contains(text(),"EDD")]/../../span').innerText();

        if (edd_status.trim() == "Active") {

            //sync_status(page, "EDD");

            await page.locator(integration.edd).click();
            if (await page.locator('//section/h1').isVisible()) {
                await page.locator('//button[contains(text(),"Disconnect")]').click();
                await page.locator('//div[@class="swal-button-container"]/button[contains(text(),"Disconnect")]').click();
            }
            else {
                await page.locator('//a[contains(text(),"Cancel")]').click();
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