const fs = require('fs');
let htmlContent = fs.readFileSync('index.html', 'utf8');
const pagesRegex = /(home:\s*")([^"]+)(")/;
const match = htmlContent.match(pagesRegex);
if (match) {
    let decodedHtml = Buffer.from(match[2], 'base64').toString('utf8');
    // Replace all literal \n strings with an actual newline character
    decodedHtml = decodedHtml.replace(/\\n/g, '\n');
    let newBase64Str = Buffer.from(decodedHtml, 'utf8').toString('base64');
    htmlContent = htmlContent.replace(match[0], `home: "${newBase64Str}"`);
    fs.writeFileSync('index.html', htmlContent, 'utf8');
    console.log('Fixed literal newlines');
}
