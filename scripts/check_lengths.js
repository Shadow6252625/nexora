const fs = require('fs');
const h = fs.readFileSync('temp_head.txt', 'utf8');
const pagesRegex = /(home|markets|dashboard|docs):\s*"([^"]+)"/g;
let match;
while ((match = pagesRegex.exec(h)) !== null) {
  console.log(match[1], match[2].length);
}
