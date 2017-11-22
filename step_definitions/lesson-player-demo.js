const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open the Demo page$/, () => {
    return client.url('http://localhost:3000/en/lesson-player/demo')
  });


  When('I click the {string} button', (string) => {
    return client
      .waitForElementVisible('a[data-trainer='+string+']', 6000)
      .click()
  });


  Then('I should be on the {string} trainer page', function (string, callback) {

  });
});

