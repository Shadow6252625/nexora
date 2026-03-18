const fs = require('fs');

const indexHtmlPath = 'index.html';
const dashboardPath = 'dashboard.html';

const dashboardHtml = fs.readFileSync(dashboardPath, 'utf8');
const base64Dashboard = Buffer.from(dashboardHtml, 'utf8').toString('base64');

let indexContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace the dashboard base64 string
// The dashboard string is usually small initially, so we can use a regex
// But wait, what if it's already big? Let's use a safe replacement based on check_lengths
const regex = /dashboard:\s*"([^"]+)"/;
if (regex.test(indexContent)) {
    indexContent = indexContent.replace(regex, `dashboard: "${base64Dashboard}"`);
    fs.writeFileSync(indexHtmlPath, indexContent);
    console.log('Successfully injected dashboard into index.html');
} else {
    console.error('Could not find dashboard string in index.html');
}
