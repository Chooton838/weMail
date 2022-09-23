require('dotenv').config()
const { test } = require('@playwright/test');
const { camp_data, list_data, subscriber_data,
  form_data, integration_data } = require("../utils/data");

const login = require("./login");
const overview = require("./overview.js");
const camp = require("./campaign");
const list = require("./list.js");
const auto = require("./automation");
const subscriber = require("./subscriber");
const forms = require("./forms.js");
const ecom = require("./ecom_integration.js");

test.describe.configure({ mode: "serial" });

test.describe("wemail Automation", async () => {

  /* ---- Login ---- */
  //login.login(process.env.USER_NAME, process.env.PASSWORD);

  /* ---- Overview ---- */
  //overview.overview_details();

  /* ---- List ---- */
  //list.list_create(list_data.list_name, list_data.list_description);
  //list.list_details(list_data.list_name);
  //list.list_delete(list_data.list_name);

  /* ---- Subscriber ---- */
  //subscriber.create_subscriber(list_data.list_name);
  //subscriber.add_subscriber(list_data.list_name);
  //subscriber.details_subscriber(list_data.list_name, subscriber_data.subscriber_email);
  //subscriber.delete_subscriber(list_data.list_name, subscriber_data.subscriber_email);
  //subscriber.subscribe_subscriber(list_data.list_name, subscriber_data.subscriber_email);
  //subscriber.unsubscribe_subscriber(list_data.list_name, subscriber_data.subscriber_email);


  /* ---- Campaign ---- */
  //camp.campaign_create(camp_data.camp_name, camp_data.camp_subject, camp_data.lists_name);
  //camp.campaign_details(camp_data.camp_name);
  //camp.campaign_delete(camp_data.camp_name);

  /* ---- Automation ---- */
  //auto.create_automation();
  //auto.delete_automation("Product Purchase");
  //auto.update_automation("Product Purchase");
  //auto.active_automation("Product Purchase");
  //auto.details_automation("Product Purchase");

  /* ---- Forms ---- */
  //forms.create_form(form_data.form_name, form_data.list_name);
  //forms.trash_form(form_data.form_name);
  //forms.delete_form(form_data.form_name);
  //forms.update_form_status(form_data.form_name);

  /* ---- Ecommerce Integration ---- */
  //ecom.edd_integration(integration_data.list_name);
  //ecom.wcom_integration(integration_data.list_name);
  ecom.disconnect_sync(integration_data.integration_name)

})