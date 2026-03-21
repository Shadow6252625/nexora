const fs = require('fs');

try {
    let htmlContent = fs.readFileSync('index.html', 'utf8');
    const pagesRegex = /([a-zA-Z0-9_]+:\s*")([^"]+)(")/g;
    
    let replacementCount = 0;

    htmlContent = htmlContent.replace(pagesRegex, (match, prefix, base64Payload, suffix) => {
        let decoded = Buffer.from(base64Payload, 'base64').toString('utf8');
        let initialDecoded = decoded;
        
        // 1. Replace the top nav link
        decoded = decoded.replace(
            /href="https:\/\/x\.com\/nexus_protocolx"/g,
            `href="https://x.com/Nexora_xx"`
        );

        // 2. Replace the footer `<a>` wrap for Twitter/X logo
        // Since we know the exact block, let's use a regex that matches `href="#"... lucide:twitter`
        decoded = decoded.replace(
            /<a href="#" (class="[^"]+")>\s*<span class="iconify" data-icon="lucide:twitter"/g,
            `<a href="https://x.com/Nexora_xx" target="_blank" rel="noopener noreferrer" $1>\n                            <span class="iconify" data-icon="simple-icons:x"`
        );

        if(decoded !== initialDecoded) {
            replacementCount++;
            let encoded = Buffer.from(decoded, 'utf8').toString('base64');
            return prefix + encoded + suffix;
        } else {
            return match;
        }
    });

    fs.writeFileSync('index.html', htmlContent, 'utf8');
    console.log(`Successfully updated X/Twitter links across ${replacementCount} sections!`);

} catch (e) {
    console.error("Error updating X links:", e);
}
