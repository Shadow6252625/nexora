const fs = require('fs');
let htmlContent = fs.readFileSync('index.html', 'utf8');
const pagesRegex = /([a-zA-Z0-9_]+:\s*")([^"]+)(")/g;

let regex = htmlContent.replace(pagesRegex, (match, prefix, base64Payload, suffix) => {
    let decoded = Buffer.from(base64Payload, 'base64').toString('utf8');
    
    // Find lines with x or twitter icons
    let lines = decoded.split('\n');
    lines.forEach((line, i) => {
        if (line.match(/twitter|simple-icons:x/i)) {
            console.log(`\n--- Match around line \${i} ---`);
            for(let j=Math.max(0, i-2); j <= Math.min(lines.length-1, i+2); j++) {
                console.log(lines[j]);
            }
        }
    });
    return match;
});
