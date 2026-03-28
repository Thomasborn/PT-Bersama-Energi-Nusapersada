import fs from 'fs';
import path from 'path';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
         arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(path.join(process.cwd(), 'src'), []);
const urlRegex = /https?:\/\/[^\s'"]+/g;
let urls = [];

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(urlRegex) || [];
  urls = urls.concat(matches);
});

const uniqueUrls = [...new Set(urls)].filter(url => 
  url.includes('unsplash') || url.includes('.jpg') || url.includes('.png') || url.includes('.webp') || url.includes('.jpeg') || url.includes('assets.gulfoilltd.com')
);

async function checkUrls() {
  console.log(`Found ${uniqueUrls.length} unique image URLs to check.`);
  let broken = 0;
  for (const url of uniqueUrls) {
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
  console.log(`Finished checking. Broken URLs: ${broken}`);
}

checkUrls();
