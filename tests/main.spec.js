const { test } = require('@playwright/test');
const { camp_data, list_data } = require("../utils/data");

const login = require("./login");
const camp = require("./campaign");
const list = require("./list.js");
const auto = require("./automation");
const subscriber = require("./subscriber");

test.describe.configure({ mode: "serial" });

test.describe("wemail Automation", async () => {

  login.login();

  //camp.campaign_create(camp_data.camp_name, camp_data.camp_subject, camp_data.lists_name);
  //camp.campaign_details(camp_data.camp_name);
  //camp.campaign_delete(camp_data.camp_name);

  //auto.automation();

  //list
  //list.list_create(list_data.list_name, list_data.list_description);
  //list.list_details(list_data.list_name);
  //list.list_delete(list_data.list_name);

  //Subscriber
  subscriber.create_subscriber(list_data.list_name);

})