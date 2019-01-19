require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

function init(link, inWidth, inHeight) {
  const width = parseInt(inWidth);
  const height = parseInt(inHeight);
  const options = new chrome.Options();
  options.addArguments(
    "headless",
    "start-maximized",
    "--start-fullscreen",
    "disable-infobars",
    "--disable-extensions",
    "--disable-dev-shm-usage",
    "--no-sandbox"
  );

  options.setMobileEmulation({
    deviceMetrics: {
      width: width,
      height: height,
      pixelRatio: 1
    },
    userAgent:
      "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
  });
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
  return driver;
}
async function openAndShoot(driver, url) {
  try {
    await driver.get(url);

    await driver.sleep(200);
    const result = await driver.takeScreenshot().then(res => {
      driver.close();
      return res;
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}
module.exports.seleniumScreen = async function(link, inWidth, inHeight) {
  try {
    // initialize
    const driver = await init(link, inWidth, inHeight);
    const result = await openAndShoot(driver, link).then(res => res);
    return result;
  } catch (err) {
    console.log(err);
  }
};
