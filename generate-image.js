(async () => {
  try {
    const dir = './output';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://codeforces-readme-stats.vercel.app/api/card?username=shankarlohar');
    await page.screenshot({ path: `${dir}/generated_image.png` });
    await browser.close();
  } catch (error) {
    console.error("Error generating image:", error);
    process.exit(1);  // Causes the GitHub Action to fail if any error occurs
  }
})();
