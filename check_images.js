import fs from 'fs';
import path from 'path';

// Extract URLs from gulfProducts.ts
const content = fs.readFileSync(path.join(process.cwd(), 'src/data/gulfProducts.ts'), 'utf-8');
const urlRegex = /https?:\/\/[^\s'"]+/g;
const urls = content.match(urlRegex) || [];
const uniqueUrls = [...new Set(urls)];

async function checkUrls() {
  console.log(`Found ${uniqueUrls.length} unique URLs to check.`);
  let broken = 0;
  for (const url of uniqueUrls) {
    if (url.includes('unsplash') || url.includes('.jpg') || url.includes('.png') || url.includes('.webp') || url.includes('.jpeg')) {
      try {
        const fetchUrl = url.replace(/\\\//g, '/'); // remove escape chars if any
        const res = await fetch(fetchUrl, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!res.ok) {
           console.log(`[BROKEN] HTTP ${res.status}: ${url}`);
           broken++;
        }
      } catch (e) {
        console.log(`[ERROR] Failed to fetch: ${url} - ${e.message}`);
        broken++;
      }
    }
  }
  console.log(`Finished checking. Broken URLs: ${broken}`);
}

checkUrls();
