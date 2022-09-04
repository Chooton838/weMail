const {test} = require('@playwright/test');
const locator = require('../utils/locators');

//locators for campaign create
const campaign = locator.camp.campaign;
const new_camp = locator.camp.new_camp;
const campaign_name = locator.camp.camp_name;
const camp_name_next = locator.camp.camp_name_next;
const select_list = locator.camp.select_list;
const list_name = locator.camp.list_name;
const campaign_subject = locator.camp.camp_subject;
const create_camp = locator.camp.create_camp;
const hovar_template = locator.camp.hovar_template;
const select_template = locator.camp.select_template;
const template_next = locator.camp.template_next;
const peview_next = locator.camp.peview_next;
const send_next = locator.camp.send_next;
const send = locator.camp.send;

//locators for campaign delete
const camp_search = locator.camp.camp_search;
const camp_hover = locator.camp.camp_hover;
const camp_del = locator.camp.camp_del;
const del = locator.camp.del;

//locators for campaign details
const camp_details = locator.camp.camp_details;

function campaign_create(camp_name, camp_subject, lists_name){
    test("campaign create", async({ page }) => {

    await page.goto("https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/");
    await page.locator(campaign).click();
    await page.locator(new_camp).click();
    await page.locator(campaign_name).fill(camp_name);
    await page.locator(camp_name_next).click();
    
    await page.locator(select_list).click();
    for (let i=0; i<lists_name.length ; i++ ){
        await page.locator(list_name).fill(lists_name[i]);
        await page.keyboard.press('Enter');
    }
    
    await page.locator(campaign_subject).fill(camp_subject);
    await page.locator(create_camp).click();
    await page.locator(hovar_template).hover();
    await page.locator(select_template).click();
    await page.locator(template_next).click();
    await page.locator(peview_next).click();
    await page.locator(send_next).click();
    await page.locator(send).click();
    await page.waitForTimeout(3000);
})
}


function campaign_delete(camp_name){
    test("campaign delete", async({ page }) => {

    await page.goto("https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/");
    await page.locator(campaign).click();
    await page.locator(camp_search).fill(camp_name);
    await page.locator(camp_hover).hover();
    await page.locator(camp_del).click();
    await page.locator(del).click();
    await page.locator(camp_search).fill("");
    await page.waitForTimeout(3000);
})
}


function campaign_details(camp_name){
    test("campaign details", async({ page }) => {

    await page.goto("https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/");
    await page.locator(campaign).click();
    await page.locator(camp_search).fill(camp_name);
    await page.locator(camp_hover).hover();
    await page.locator(camp_details).click();
    await page.waitForTimeout(3000);
})
}


module.exports = {
    campaign_create,
    campaign_delete,
    campaign_details,
}