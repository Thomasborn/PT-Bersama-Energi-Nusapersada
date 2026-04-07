import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.shantui-global.com/product/excavator.htm', { waitUntil: 'networkidle2' });

  // Get categories and products
  const data = await page.evaluate(() => {
    const results = [];
    // Just find all active product items
    const items = document.querySelectorAll('.pro-item, li.item, .list li, .product-item');
    items.forEach(el => {
       const nameEl = el.querySelector('.name, h3, .title');
       const imgEl = el.querySelector('img');
       if (nameEl && imgEl) {
          results.push({
             name: nameEl.innerText.trim(),
             image: imgEl.src
          });
       }
    });

    // Or specific to Shantui:
    const specificItems = document.querySelectorAll('.pro_list li');
    if (specificItems.length > 0) {
        specificItems.forEach(el => {
            const nameEl = el.querySelector('.name');
            const imgEl = el.querySelector('.img img, .pic img');
            if (nameEl && imgEl) {
                results.push({ name: nameEl.innerText.trim(), image: imgEl.src });
            }
        });
    }

    return results;
  });

  fs.writeFileSync('puppeteer_data.json', JSON.stringify(data, null, 2));
  console.log(`Extracted ${data.length} items`);
  await browser.close();
})();
