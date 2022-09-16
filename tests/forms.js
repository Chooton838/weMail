const { test } = require('@playwright/test');
const { base_url } = require('../utils/data');
const { form } = require('../utils/locators');

function create_form(form_name, list_name) {

    test("create_form", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(form.navigate).click();
        await page.locator(form.new_form).click();
        await page.locator(form.hover_template).hover();
        await page.locator(form.select_template).click();
        await page.locator(form.select_list).click();
        await page.locator(form.list_name).fill(list_name);
        await page.keyboard.press('Enter');
        await page.locator(form.form_name).fill(form_name);
        await page.locator(form.save).click();
        await page.locator(form.save_form).click();
        await page.waitForTimeout(3000);
        await page.locator(form.navigate).click();
    })
}

function details_form(form_name) {

    test("details form", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(form.navigate).click();
        await page.locator(form.search_form).fill(form_name);
        await page.locator(form.select_form).hover();

        await page.locator(form.trash_form).click();
        await page.locator(form.search_form).fill("");
        await page.waitForTimeout(3000);
    })
}

function trash_form(form_name) {

    test("trash form", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(form.navigate).click();
        await page.locator(form.search_form).fill(form_name);
        await page.locator(form.select_form).hover();
        await page.locator(form.trash_form).click();
        await page.locator(form.search_form).fill("");
        await page.waitForTimeout(3000);
    })
}

function delete_form(form_name) {

    test("delete form", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(form.navigate).click();
        await page.locator(form.switch_trash).click();
        await page.locator(form.search_form).fill(form_name);
        await page.locator(form.select_form).hover();
        await page.locator(form.delete_form).click();
        await page.locator(form.delete).click();
        await page.locator(form.search_form).fill("");
        await page.waitForTimeout(3000);
    })
}

function update_form_status(form_name) {

    test("update form status", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(form.navigate).click();
        await page.locator(form.search_form).fill(form_name);
        await page.waitForTimeout(3000);
        await page.locator(form.change_status).click();
        await page.waitForTimeout(3000);
    })
}


module.exports = {
    create_form,
    details_form,
    trash_form,
    delete_form,
    update_form_status,
}