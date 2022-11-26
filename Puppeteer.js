const puppeteer = require('puppeteer');

/**
 * Initializes and returns a puppeteer instance
 * @name {getPuppeteerInstance}
 * @returns {Promise} resolves with puppeteer instance
 */
module.exports = async () => {
  try {
    const options = {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      defaultViewport: {
        width: 1440,
        height: 900,
      },
      timeout: 0,  // 0ms timeout is no timeout 
    };
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage(); ``

    page.setDefaultTimeout(0);
    page.setDefaultNavigationTimeout(0);

    return { browser, page };
  } catch (error) {
    console.log(`error`, error);

    return {};
  }
};
