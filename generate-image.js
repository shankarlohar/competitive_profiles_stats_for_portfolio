const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://codeforces-readme-stats.vercel.app/api/card?username=shankarlohar');
  await page.screenshot({ path: './output/generated_image.png' });
  await browser.close();
})();
