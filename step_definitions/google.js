const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const { setPageInContext } = require('../utils/context');

const google = client.page.google();

Given('I open Google`s search page', () => {
  setPageInContext(google);
  return google.navigate();
});