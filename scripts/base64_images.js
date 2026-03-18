const fs = require('fs');
const path = require('path');

let htmlContent = fs.readFileSync('index.html', 'utf8');
const pagesRegex = /(home:\s*")([^"]+)(")/;
const match = htmlContent.match(pagesRegex);

if (match) {
    let decodedHtml = Buffer.from(match[2], 'base64').toString('utf8');
    
    // Read images and convert to base64
    const volLg = fs.readFileSync('assets/volume_mined_logo.png').toString('base64');
    const nodesLg = fs.readFileSync('assets/neural_nodes_logo.png').toString('base64');
    const latencyLg = fs.readFileSync('assets/subsecond_latency_logo.png').toString('base64');

    // Replace relative paths with data URIs
    decodedHtml = decodedHtml.replace('src="assets/volume_mined_logo.png"', `src="data:image/png;base64,${volLg}"`);
    decodedHtml = decodedHtml.replace('src="assets/neural_nodes_logo.png"', `src="data:image/png;base64,${nodesLg}"`);
    decodedHtml = decodedHtml.replace('src="assets/subsecond_latency_logo.png"', `src="data:image/png;base64,${latencyLg}"`);

    let newBase64Str = Buffer.from(decodedHtml, 'utf8').toString('base64');
    htmlContent = htmlContent.replace(match[0], `home: "${newBase64Str}"`);
    fs.writeFileSync('index.html', htmlContent, 'utf8');
    console.log('Successfully injected base64 images to fix absolute pathing inside iframe.');
} else {
    console.error('Failed to find home base64 payload.');
}
