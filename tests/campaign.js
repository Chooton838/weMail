const { test } = require('@playwright/test');
const { camp } = require('../utils/locators');
const { base_url } = require('../utils/data');


function campaign_create(camp_name, camp_subject, lists_name) {
    test("campaign create", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(camp.campaign).click();
        await page.locator(camp.new_camp).click();
        await page.locator(camp.camp_name).fill(camp_name);
        await page.locator(camp.camp_name_next).click();

        await page.locator(camp.select_list).click();
        for (let i = 0; i < lists_name.length; i++) {
            await page.locator(camp.list_name).fill(lists_name[i]);
            await page.keyboard.press('Enter');
        }

        await page.locator(camp.camp_subject).fill(camp_subject);
        await page.locator(camp.create_camp).click();
        await page.locator(camp.hovar_template).hover();
        await page.locator(camp.select_template).click();
        await page.locator(camp.template_next).click();
        await page.locator(camp.peview_next).click();
        await page.locator(camp.send_next).click();
        await page.locator(camp.send).click();
        await page.waitForTimeout(3000);
    })
}

function campaign_delete(camp_name) {
    test("campaign delete", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(camp.campaign).click();
        await page.locator(camp.camp_search).fill(camp_name);
        await page.locator(camp.camp_hover).hover();
        await page.locator(camp.camp_del).click();
        await page.locator(camp.del).click();
        await page.locator(camp.camp_search).fill("");
        //await page.waitForTimeout(3000);
    })
}

function campaign_details(camp_name) {
    test("campaign details", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(camp.campaign).click();
        await page.locator(camp.camp_search).fill(camp_name);
        await page.locator(camp.camp_hover).hover();
        await page.locator(camp.camp_details).click();
        await page.waitForTimeout(5000);

        // const name = await page.locator('//h1[@class="!wem-font-semibold"]').innerText();
        // console.log(name);

    });
}


module.exports = {
    campaign_create,
    campaign_delete,
    campaign_details,
}