const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://phunong.com.vn', { waitUntil: 'networkidle', timeout: 30000 });
const color = await page.evaluate(() => {
  const els = document.querySelectorAll('footer, .footer, #footer, [class*="footer"]');
  const results = [];
  for (const el of els) {
    results.push(el.className + ' => bg: ' + window.getComputedStyle(el).backgroundColor + ' | bgImg: ' + window.getComputedStyle(el).backgroundImage);
  }
  return results.join('\n');
});
console.log(color);
await browser.close();
