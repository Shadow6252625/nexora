const fs = require('fs');
const htmlContent = fs.readFileSync('index.html', 'utf8');
const pagesRegex = /home:\s*"([^"]+)"/;
const match = htmlContent.match(pagesRegex);
if(match) {
    const decodedHtml = Buffer.from(match[1], 'base64').toString('utf8');
    fs.writeFileSync('home_extracted.html', decodedHtml, 'utf8');
    console.log('Home page extracted to home_extracted.html');
}
