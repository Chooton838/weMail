const {test} = require('@playwright/test');
const { base_url } = require('../utils/data');


function list_create(list_name, list_description){
    test("list create", async({ page }) => {
        await page.goto(base_url);
        await page.locator("//*[@id=\"toplevel_page_wemail\"]/ul/li[5]/a").click();
        await page.locator("//*[@id=\"wemail-admin\"]/div/div[2]/div[1]/div/a").click();
        await page.locator("//*[@id=\"list-modal-name-input\"]").fill(list_name);
        await page.locator("//*[@id=\"wemail-list-create\"]/div/div/div/form/fieldset/div[2]/label[2]/textarea").fill(list_description);
        await page.locator("//*[@id=\"wemail-list-create\"]/div/div/div/form/fieldset/div[3]/button[2]").click();
        await page.waitForTimeout(3000);
    })
}

function list_details(list_name){
    test("list details", async({ page }) => {
        await page.goto(base_url);
        await page.locator("//*[@id=\"toplevel_page_wemail\"]/ul/li[5]/a").click();
        await page.locator("//*[@id=\"wemail-admin\"]/div/div[2]/div[2]/form/div/input").fill(list_name);
        await page.waitForTimeout(3000);
        await page.locator("//*[@id=\"wemail-admin\"]/div/div[2]/table/tbody/tr/td[2]/a").click();
        await page.waitForTimeout(3000);
    })
}

function list_delete(list_name){
    test("list delete", async({ page }) => {
        await page.goto(base_url);
        await page.locator("//*[@id=\"toplevel_page_wemail\"]/ul/li[5]/a").click();
        await page.locator("//*[@id=\"wemail-admin\"]/div/div[2]/div[2]/form/div/input").fill(list_name);
        await page.locator("//*[@id=\"wemail-admin\"]/div/div[2]/table/tbody/tr[1]/td[8]").hover();
        await page.locator("//*[@id=\"wemail-admin\"]/div/div[2]/table/tbody/tr[1]/td[8]/div/div/a[3]").click();
        await page.locator("body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div:nth-child(2) > button").click();
        await page.waitForTimeout(3000);
    })
}

module.exports = {
        list_create,
        list_details,
        list_delete,
}