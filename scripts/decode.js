const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/home:\s*"([^"]+)"/);
if (match) {
    fs.writeFileSync('home.html', Buffer.from(match[1], 'base64').toString('utf8'));
}
