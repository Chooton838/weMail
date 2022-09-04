const {test} = require('@playwright/test');

module.exports.subscribers = function () {

    test("campaign", async({ page }) => {

    await page.goto("https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/");
    await page.locator("//*[@id=\"toplevel_page_wemail\"]/ul/li[4]/a").click();
  
    await page.waitForTimeout(3000);
    //console.log(a+5);
    })
}