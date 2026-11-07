// @ts-check
const {devices} = require('@playwright/test')

const config=({
  testDir: './tests',
  timeout: 40_000, // time for element or page load, default is 30 sec
  expect:{
     timeout: 30_000, // default is 5 sec
  },
  reporter:'html',
  use: {
    browserName: 'chromium'
  }
});
module.exports= config

