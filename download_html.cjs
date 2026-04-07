const https = require('https');
const fs = require('fs');

https.get('https://www.shantui-global.com/product/excavator.htm', (res) => {
  const file = fs.createWriteStream('shantui_raw.html');
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download completed.');
  });
}).on('error', (err) => {
  fs.unlink('shantui_raw.html');
  console.log('Error: ', err.message);
});
