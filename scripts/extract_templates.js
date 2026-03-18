const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const marketsMatch = text.match(/markets:\s*"([^"]+)"/);
if (marketsMatch) {
  fs.writeFileSync('markets_source.html', Buffer.from(marketsMatch[1], 'base64').toString('utf8'));
}
const homeMatch = text.match(/home:\s*"([^"]+)"/);
if (homeMatch) {
  fs.writeFileSync('home_source.html', Buffer.from(homeMatch[1], 'base64').toString('utf8'));
}
console.log('Extracted home and markets.');
