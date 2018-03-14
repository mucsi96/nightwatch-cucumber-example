const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const { setPageInContext } = require('../utils/context');

const duckDuckGo = client.page.duckduckgo();

Given('I open DuckDuckGo search page', () => {
  setPageInContext(duckDuckGo);
  return duckDuckGo.navigate();
});