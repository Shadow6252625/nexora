const fs = require('fs');

try {
    const logoPath = 'c:\\Users\\USER\\Downloads\\nexus\\componet\\Gemini_Generated_Image_tmf3omtmf3omtmf3.png';
    const base64Logo = fs.readFileSync(logoPath).toString('base64');
    const dataUri = `data:image/png;base64,${base64Logo}`;

    let htmlContent = fs.readFileSync('index.html', 'utf8');

    // We will match every page payload in the PAGES object
    // They are like:  home: "base64string", dashboard: "base64string", markets: "base64string"
    const pagesRegex = /([a-zA-Z0-9_]+:\s*")([^"]+)(")/g;
    
    htmlContent = htmlContent.replace(pagesRegex, (match, prefix, base64Payload, suffix) => {
        let decoded = Buffer.from(base64Payload, 'base64').toString('utf8');
        
        // Let's replace the logo path with the dataUri
        let replaced = decoded.replace(/assets\/nexus-logo\.svg/g, dataUri);
        
        // Just in case it was referenced as something else like "assets/nexus-logo.svg" 
        // We caught it.
        
        let encoded = Buffer.from(replaced, 'utf8').toString('base64');
        return prefix + encoded + suffix;
    });

    fs.writeFileSync('index.html', htmlContent, 'utf8');
    console.log("Successfully replaced all Nexus logos with the new official generated logo across all sections!");
} catch (e) {
    console.error("Error updating logos:", e);
}
