const fs = require('fs');

try {
    let htmlContent = fs.readFileSync('index.html', 'utf8');
    const pagesRegex = /([a-zA-Z0-9_]+:\s*")([^"]+)(")/g;
    
    let replacementCount = 0;

    htmlContent = htmlContent.replace(pagesRegex, (match, prefix, base64Payload, suffix) => {
        let decoded = Buffer.from(base64Payload, 'base64').toString('utf8');
        let initialDecoded = decoded;
        
        // Let's do a simple string replace for the image paths
        // Replace the dynamically injected ${item.image} and add the onerror right after the src!
        decoded = decoded.replace(
            /src="\$\{item\.image\}"/g,
            `src="https://assets.coincap.io/assets/icons/\${item.symbol.toLowerCase()}@2x.png" onerror="this.onerror=null; this.src='https://assets.coincap.io/assets/icons/btc@2x.png'"`
        );
        // Fallback generic BTC logo as an onerror since inline SVG string might be messy and we know Coincap BTC logo is reliable and never 404s.

        // Fix fallback Data directly:
        decoded = decoded.replace(
            /"https:\/\/coin-images\.coingecko\.com\/coins\/images\/[^\/]+\/large\/bitcoin\.png"/g,
            `"https://assets.coincap.io/assets/icons/btc@2x.png"`
        );
        decoded = decoded.replace(
            /"https:\/\/coin-images\.coingecko\.com\/coins\/images\/[^\/]+\/large\/ethereum\.png"/g,
            `"https://assets.coincap.io/assets/icons/eth@2x.png"`
        );
        decoded = decoded.replace(
            /"https:\/\/coin-images\.coingecko\.com\/coins\/images\/[^\/]+\/large\/solana\.png"/g,
            `"https://assets.coincap.io/assets/icons/sol@2x.png"`
        );
        decoded = decoded.replace(
            /"https:\/\/coin-images\.coingecko\.com\/coins\/images\/[^\/]+\/large\/xrp-symbol-[^"]*\.png"/g,
            `"https://assets.coincap.io/assets/icons/xrp@2x.png"`
        );
        decoded = decoded.replace(
            /"https:\/\/coin-images\.coingecko\.com\/coins\/images\/[^\/]+\/large\/bnb-icon[^"]*\.png"/g,
            `"https://assets.coincap.io/assets/icons/bnb@2x.png"`
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
    console.log(`Successfully fixed broken coin image URLs across ${replacementCount} sections!`);
} catch (e) {
    console.error("Error updating logos:", e);
}
