const https = require('https');
const fs = require('fs');

const url = 'https://www.shantui-global.com/product/excavator.htm';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const products = [];
    
    const chunks = data.split('class="pro-item'); 
    if (chunks.length < 2) {
       console.log('Could not find pro-item. Trying list items <li>');
       const liChunks = data.split('<li');
       for (let block of liChunks) {
          const nameMatch = block.match(/>([^<>]+)<\/a>/) || block.match(/name["']>([^<>]+)</) || block.match(/<h3>([^<]+)<\/h3>/);
          const imgMatch = block.match(/<img[^>]+src="([^">]+)"/);
          if (nameMatch && imgMatch && nameMatch[1].trim() !== '') {
             const name = nameMatch[1].trim();
             if (name.includes('SE')) {
                products.push({
                   name: name,
                   image: imgMatch[1].startsWith('http') ? imgMatch[1] : 'https://www.shantui-global.com' + imgMatch[1]
                });
             }
          }
       }
    } else {
        chunks.forEach((block, i) => {
          if (i === 0) return;
          const nameMatch = block.match(/class="name"[^>]*>([^<]+)<\/div>/) || block.match(/<h3>([^<]+)<\/h3>/);
          const imgMatch = block.match(/<img[^>]+src="([^">]+)"/);
          if (nameMatch && imgMatch) {
             products.push({
                name: nameMatch[1].trim(),
                image: imgMatch[1].startsWith('http') ? imgMatch[1] : 'https://www.shantui-global.com' + imgMatch[1]
             });
          }
        });
    }

    if (products.length === 0) {
        let regex = /<img[^>]+src="([^">]+)"[^>]*>[\s\S]*?<div class="name">([^<]+)<\/div>/gi;
        let match;
        while ((match = regex.exec(data)) !== null) {
            products.push({
               image: 'https://www.shantui-global.com' + match[1],
               name: match[2].trim()
            });
        }
    }
    
    if (products.length === 0) {
        let regex2 = /<div class="div_img">[\s\S]*?<img[^>]+src="([^">]+)"[\s\S]*?<h3>([^<]+)<\/h3>/gi;
        let match2;
        while ((match2 = regex2.exec(data)) !== null) {
            products.push({
               image: 'https://www.shantui-global.com' + match2[1],
               name: match2[2].trim()
            });
        }
    }

    fs.writeFileSync('shantui_data.json', JSON.stringify(products, null, 2));
    console.log(`Extracted ${products.length} products`);
  });
}).on('error', (e) => {
  console.error(e);
});
