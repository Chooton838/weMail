const { test } = require('@playwright/test');
const { base_url } = require('../utils/data');
const fs = require('fs');


function overview_details() {
    test("overview_details", async ({ page }) => {
        const overview_stats = [];
        await page.goto(base_url);
        await page.waitForTimeout(3000);

        /* ---- Data Scrapping ---- */
        // const x = await page.locator('').evaluate(node => node.innerText);
        // const y = await page.locator('').innerText();

        const total_Subscribers = await page.locator('(//*[@class="qty"])[1]').evaluate(node => node.innerText);
        const emails_Sent = await page.locator('(//div[@class="qty"])[2]').evaluate(node => node.innerText);
        const unsubscriber = await page.locator('(//div[@class="qty"])[3]').evaluate(node => node.innerText);
        const opens = await page.locator('//span[text()="Opens"]/../../..//h1').evaluate(node => node.innerText);
        const clicks = await page.locator('//span[text()="Clicks"]/../../..//h1').evaluate(node => node.innerText);
        const unsubscribes = await page.locator('//span[text()="Unsubscribes"]/../../..//h1').evaluate(node => node.innerText);
        const bounces = await page.locator('//span[text()="Bounces"]/../../..//h1').evaluate(node => node.innerText);

        overview_stats.push({
            total_Subscribers, emails_Sent, unsubscriber, opens, clicks,
            unsubscribes, bounces
        });
        const data = JSON.stringify(overview_stats);
        fs.writeFile('overview stats.json', data, function () { });
    });
}


module.exports = {
    overview_details,
}