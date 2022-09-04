module.exports ={

    camp:{

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

    }
    }