const puppeteer = require('puppeteer');

(async () => {
  const fs = require('fs');
  
  // Create directory if it doesn't exist
  const dir = './output';
  
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://codeforces-readme-stats.vercel.app/api/card?username=shankarlohar');
  await page.screenshot({path: `${dir}/generated_image.png`});
  await browser.close();
})();
