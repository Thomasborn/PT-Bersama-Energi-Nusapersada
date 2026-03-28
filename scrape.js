import https from 'https';

const urls = [
  'https://apac.gulfoilltd.com/products/automotive/gulf-formula',
  'https://apac.gulfoilltd.com/products/automotive/gulf-ultrasynth',
  'https://apac.gulfoilltd.com/products/automotive/gulf-max',
  'https://apac.gulfoilltd.com/products/automotive/gulf-syntrac',
  'https://apac.gulfoilltd.com/products/automotive/gulf-powertrac',
  'https://apac.gulfoilltd.com/products/automotive/gulf-pride',
  'https://apac.gulfoilltd.com/products/gulf-harmony-aw',
  'https://apac.gulfoilltd.com/products/gulf-harmony-hvi-plus'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let raw = '';
    res.on('data', chunk => raw += chunk);
    res.on('end', () => {
      const matches = raw.match(/<img[^>]+src="([^">]+)"/gi);
      if(matches) {
         const srcs = matches.map(m => m.match(/src="([^">]+)"/)[1])
            .filter(src => src.includes('.png') || src.includes('.jpg') || src.includes('.webp'))
            .filter(src => !src.includes('logo') && !src.includes('icon') && !src.includes('svg'));
         
         // Usually the product image sits in a specific path, e.g., /media/ or /assets/
         const productImg = srcs.find(s => s.toLowerCase().includes('product')) || srcs[0];
         console.log(url, ' -> ', productImg);
      }
    });
  }).on('error', e => console.error(e));
});
