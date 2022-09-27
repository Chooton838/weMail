require('dotenv').config()
const { test } = require('@playwright/test');
const { base_url, settings_data } = require('../utils/data');
const { settings } = require('../utils/locators');

function email_gateway_smtp() {

    test("Email Gateway Srttings for SMTP", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(settings.navigate).click();
        await page.locator(settings.smtp).click();
        await page.locator(settings.edit_credential).click();
        await page.locator(settings.mail_server).fill(settings_data.mail_server);
        await page.locator(settings.port).fill(settings_data.port);
        await page.locator(settings.encryption).selectOption(settings_data.encryption);
        await page.locator(settings.username).fill(process.env.SMTP_USERNAME);
        await page.locator(settings.password).fill(process.env.SMTP_PASSWORD);
        await page.locator(settings.limit).fill(settings_data.limit);
        await page.locator(settings.next).click();
        await page.waitForTimeout(3000);

    })
}

function configure_form_and_reply_to() {

    test("Email Gateway Srttings for SMTP", async ({ page }) => {

        await page.goto(base_url);
        await page.locator(settings.navigate).click();
        await page.locator(settings.hover_configure).hover();
        await page.locator(settings.configure).click();
        await page.locator(settings.from_name).fill(settings_data.from_name);
        await page.locator(settings.from_email).fill(settings_data.from_email);
        await page.locator(settings.reply_to_name).fill(settings_data.reply_to_name);
        await page.locator(settings.reply_to_email).fill(settings_data.reply_to_email);
        await page.locator(settings.save_changes).click();
        await page.waitForTimeout(3000);

    })
}


module.exports = {
    email_gateway_smtp,
    configure_form_and_reply_to,
}