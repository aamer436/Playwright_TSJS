// @ts-check
const {devices} = require('@playwright/test')

const config=({
  testDir: './tests',
  timeout: 40_000, // time for element or page load, default is 30 sec 
  // -- basically time for test method..it method does not complete in this timeframe.. the test will fail
  expect:{
     timeout: 10_000, // default is 5 sec
  },
  reporter:'html',
  use: {
    browserName: 'chromium', //chromium, firefox, webkit
    headless: false
  }
});
module.exports= config

