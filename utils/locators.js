module.exports = {

    lgn: {
        email: '//*[@id="user_login"]',
        pass: '//*[@id="user_pass"]',
        submit: '//*[@id="wp-submit"]',
    },

    camp: {

        //locators for campaign create
        campaign: "//*[@id=\"toplevel_page_wemail\"]/ul/li[3]/a",
        new_camp: "//*[@class=\"wem-button-primary wem-ml-4 wem-inline-block\"]",
        camp_name: "#c-name",
        camp_name_next: "//button[@class=\"wem-button-primary\"]",
        camp_subject: "#subject",
        select_list: '//label[@for="subject" and contains(text(),"List")]//..//div[@class="multiselect__select"]',
        list_name: '//input[@class = "multiselect__input" and @placeholder="Select Lists"]',
        create_camp: '//button[@class="wem-button-primary" and contains(text(), "Create Campaign")]',
        hovar_template: "(//img[@height='620']//..//..)[1]",
        select_template: "(//i[@class='fa fa-check']//..)[1]",
        template_next: '//*[@id="wemail-admin"]/div/div/div[2]/div[1]/div[1]/div[3]/a',
        peview_next: '//*[@id="wemail-admin"]/div/div/div[2]/div/div[2]/a[2]',
        send_next: '//*[@id="wemail-admin"]/div/div/div[2]/div[2]/div[1]/div[6]/a[2]',
        send: '//button[@class="wem-button-primary wem-ml-4"]',

        //locators for campaign delete
        camp_search: '//input[@placeholder="Search campaign..."]',
        camp_hover: '//button[@class="wem-px-3"]',
        camp_del: '//a[contains(text(),"Delete")]',
        del: '//button[contains(text(),"Delete")]',

        //locators for campaign details
        camp_details: '//a[contains(text(), "View")]',

    },

    subscriber: {
        //Create Subscriber
        list_navigate: "//*[@id=\"toplevel_page_wemail\"]/ul/li[5]/a",
        search_list: "//*[@id=\"wemail-admin\"]/div/div[2]/div[2]/form/div/input",
        select_list: "//*[@id=\"wemail-admin\"]/div/div[2]/table/tbody/tr/td[2]/a",

        add_subscriber: '//a[contains(text(), "Add Subscriber")]',
        new_subscriber: '//button[contains(text(), "Create New Subscriber")]',
        subscriber_email: '#subscriber-modal-email-input',
        save_subscriber: '//*[@id="wemail-admin"]/div/div[3]/div[3]/div/div/form/fieldset/div[3]/span/button[1]',

        //Add Subscriber
        map_existing_subscriber: '//button[contains(text(), "Search Existing Subscribers")]',
        find_subscriber: '//span[@class="multiselect__placeholder" and contains(text(),"Search subscribers")]',
        subscriber_email: '//*[@class="multiselect__input" and @placeholder="Search subscribers"]',
        map_subscriber: '//button[@type="button" and contains(text(), "Add Subscribers")][1]',

        //Delete Subscriber
        search_subscriber: '//input[@type="search" and @placeholder="Search subscriber..."]',
        select_subscriber: '//table[@class="wemail-table"]/tbody/tr[1]/td[2]/a',
        delete_subscriber: '//button[@type="button" and contains(text(), "Delete Subscriber")]',
        delete: '//div[@class="swal-button-container"]/button[contains(text(), "Delete")]',

    },

    auto: {
        //Create Automation
        navigate: '//ul[@class="wp-submenu wp-submenu-wrap"][1]/li[4]/a[contains(text(), "Automations")]',
        new_auto: '//div/a[contains(text(), "New Automation")]',
        select_template: '//h3[contains(text(), "Product Purchase")]',
        create_auto: '//button[contains(text(), "Create Automation")]',
        change_status: '//button/span[contains(text(), "draft")]',
        active_auto: '//form/ul/li/input[@type="radio" and @value="active"]',
        auto_home: '//div[@class="workflow-top-bar"]/a',

        //Delete Automation
        search_auto: '//input[@type="search" and @placeholder="Search automation..."]',
        hover_menu: '//tbody/tr[1]//button[@class="wem-px-3"]/*[1]',
        click_delete: '//tbody/tr[1]//div/a[contains(text(), "Delete")]',
        delete: '//div[@class="swal-button-container"]/button[contains(text(), "Delete")]',

        select_automation: '//tbody/tr[1]/td[2]/h4/a',

    },

    form: {
        //create form
        navigate: '//ul[@class="wp-submenu wp-submenu-wrap"][1]/li[6]/a[contains(text(), "Forms")]',
        new_form: '//a[contains(text(), "New Form")]',
        hover_template: '(//div[@class="form-template"])[1]',
        select_template: '(//button[@type="button" and contains(text(),"Select")])[1]',
        select_list: '.multiselect__placeholder',
        form_name: '#name',
        list_name: '//input[@placeholder="Select Lists"]',
        save: '//button[@type="submit" and contains(text(), "Save")]',
        save_form: '//button[@class="button button-primary" and contains(text(), "Save")]',

        //trash form
        search_form: '//input[@placeholder="Search form..."]',
        select_form: '(//button[@class="wem-px-3"])[1]',
        trash_form: '(//a[@class="!wem-text-red-500" and contains(text(),"Trash")])[1]',

        //delete form
        switch_trash: '//a[contains(text(), "Trashed")]',
        delete_form: '(//a[contains(text(), "Delete Permanently")])[1]',
        delete: '//button[contains(text(),"Delete")]',

        //update for status
        change_status: '//tbody/tr[1]/td[@class="wem-pl-[8px]"][7]/label',


    },

}