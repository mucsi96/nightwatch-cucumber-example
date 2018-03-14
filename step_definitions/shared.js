const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const { getPageInContext } = require('../utils/context');

Then('the title is {string}', (text) => {
  return client.assert.title(text);
});

Then('the search form exists', () => {
  return getPageInContext().assert.visible('@searchBar');
});
