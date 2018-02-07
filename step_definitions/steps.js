const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given(/^I open Google`s search page$/, () => {
  return client
    .url('http://google.com');
});

Given(/^I open DuckDuckGo search page$/, () => {
  return client
    .url('https://duckduckgo.com/');
});

Then(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text);
});

Then(/^the Google search form exists$/, () => {
  return client.assert.visible('input[name="q"]');
});

Then(/^the DuckDuckGo search form exists$/, () => {
  return client.assert.visible('input[name="q"]');
});
