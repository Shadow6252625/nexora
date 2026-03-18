const fs = require('fs');
const filePath = 'C:\\\\Users\\\\USER\\\\Downloads\\\\nexus from githup\\\\edited-nexus\\\\index.html';
if (fs.existsSync(filePath)) {
    const text = fs.readFileSync(filePath, 'utf8');
    const match = text.match(/dashboard:\s*"([^"]+)"/);
    if(match) {
        const decoded = Buffer.from(match[1], 'base64').toString('utf8');
        fs.writeFileSync('extracted_dashboard_from_github.html', decoded);
        console.log('Decoded length from GitHub index.html:', decoded.length);
    } else {
        console.log('No dashboard string found in GitHub index.html');
    }
} else {
    console.log('GitHub index.html not found.');
}
