const fs = require('fs');

try {
    // Read the old logo base64 to find it in the HTML
    const oldLogoPath = 'c:\\Users\\USER\\Downloads\\nexus\\assets\\nexora-logo.png'; // This is where we copied it
    let oldBase64Logo;
    if (fs.existsSync(oldLogoPath)) {
        oldBase64Logo = fs.readFileSync(oldLogoPath).toString('base64');
    } else {
        // Fallback to the original componet directory where the user referenced it from
        oldBase64Logo = fs.readFileSync('c:\\Users\\USER\\Downloads\\nexus\\componet\\Gemini_Generated_Image_tmf3omtmf3omtmf3.png').toString('base64');
    }
    const oldDataUri = `data:image/png;base64,${oldBase64Logo}`;

    // Read the new logo
    const newLogoPath = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\28fc9f3a-b83c-4766-b36f-7a1adf72d802\\media__1773935732175.jpg';
    const newBase64Logo = fs.readFileSync(newLogoPath).toString('base64');
    const newDataUri = `data:image/jpeg;base64,${newBase64Logo}`;

    let htmlContent = fs.readFileSync('index.html', 'utf8');

    // Make the replacements inside the PAGES dictionary payloads
    const pagesRegex = /([a-zA-Z0-9_]+:\s*")([^"]+)(")/g;
    
    let replacementCount = 0;

    htmlContent = htmlContent.replace(pagesRegex, (match, prefix, base64Payload, suffix) => {
        let decoded = Buffer.from(base64Payload, 'base64').toString('utf8');
        
        if (decoded.includes(oldDataUri)) {
            // Replace the old directly injected base64 with the new one
            // We use global strings replace by splitting and rejoining
            let replaced = decoded.split(oldDataUri).join(newDataUri);
            let encoded = Buffer.from(replaced, 'utf8').toString('base64');
            replacementCount++;
            return prefix + encoded + suffix;
        } else {
            return match;
        }
    });

    fs.writeFileSync('index.html', htmlContent, 'utf8');
    
    // Also copy the new logo over to assets folder
    fs.copyFileSync(newLogoPath, 'c:\\Users\\USER\\Downloads\\nexus\\assets\\nexora-logo.jpg');
    
    console.log(`Successfully replaced the official logo across \${replacementCount} sections!`);
} catch (e) {
    console.error("Error updating logos:", e);
}
