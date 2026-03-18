const fs = require('fs');
const htmlContent = fs.readFileSync('index.html', 'utf8');
const match = htmlContent.match(/dashboard:\s*"([^"]+)"/);
if (match) {
    const decoded = Buffer.from(match[1], 'base64').toString('utf8');
    fs.writeFileSync('dashboard.html', decoded);
    console.log('Decoded dashboard to dashboard.html, length:', decoded.length);
} else {
    console.log('Dashboard string not found.');
}
