const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const pagesRegex = /(home|markets|dashboard|docs):\s*"([^"]+)"/g;
let match;
while ((match = pagesRegex.exec(h)) !== null) {
  if (match[1] === 'dashboard') {
    console.log('Dashboard string:', match[2]);
  }
}
