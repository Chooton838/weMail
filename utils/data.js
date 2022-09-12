const { faker } = require('@faker-js/faker');

module.exports = {

    base_url: "https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/",

    list_data: {
        list_name: "demo_list_6",
        list_description: "Demo List 5",
    },

    camp_data: {
        camp_name: "Demo Campaign X1",
        camp_subject: "Demo Campaign X1",
        lists_name: ["demo_list_4", "edd-user"],
    },

    subscriber_data: {
        email: faker.internet.email(),
        subscriber_emails: ["choton838@gmail.com", "chooton838@gmail.com",
            "qa1@wedevsqa.com", "qa2@wedevsqa.com", "qa3@wedevsqa.com"],
        subscriber_email: 'qa1@wedevsqa.com',

    }

}