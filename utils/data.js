const { faker } = require('@faker-js/faker');

module.exports = {

    base_url: "https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/",

    list_data: {
        list_name: "edd",
        list_description: "Demo List 5",
    },

    camp_data: {
        camp_name: "demo camp 4",
        camp_subject: "Demo Campaign X1",
        lists_name: ["demo_list_4", "edd-user"],
    },

    subscriber_data: {
        email: faker.internet.email(),
        subscriber_emails: ["choton838@gmail.com", "chooton838@gmail.com",
            "qa1@wedevsqa.com", "qa2@wedevsqa.com", "qa3@wedevsqa.com"],
        subscriber_email: 'panda@ndc.com',

    },

    form_data: {
        form_name: 'Test Form N1',
        list_name: 'edd',
    },

    integration_data: {
        list_name: 'edd',
        integration_name: 'WooCommerce',
    },

    settings_data: {
        mail_server: 'smtp.mailtrap.io',
        port: '2525',
        encryption: 'tls',
        limit: '3600',
        from_name: 'Mozammel Hossin',
        from_email: 'hossinmozammel838@gmail.com',
        reply_to_name: 'Mozammel Hossin',
        reply_to_email: 'hossinmozammel838@gmail.com',
    }
}