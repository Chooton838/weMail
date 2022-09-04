const {test} = require('@playwright/test');
const data = require("../utils/data");

const login = require("./login");
const camp = require("./campaign");
const list = require("./list.js");
const auto = require("./automation");

const camp_name = data.camp.camp_name;
const camp_subject = data.camp.camp_subject;
const lists_name = data.camp.lists_name;

const list_name = data.list.list_name;
const list_description = data.list.list_description;

test.describe.configure({mode: "serial"});

test.describe("wemail Automation", async() => {

  //login.login();

  //camp.campaign_create(camp_name, camp_subject, lists_name);
  camp.campaign_details(camp_name);
  //camp.campaign_delete(camp_name);

  //auto.automation();

  //list.list_create(list_name, list_description);
  //list.list_details(list_name);
  //list.list_delete(list_name);

})