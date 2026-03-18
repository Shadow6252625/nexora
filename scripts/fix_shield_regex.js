const fs = require('fs');

let htmlContent = fs.readFileSync('index.html', 'utf8');
const pagesRegex = /(home:\s*")([^"]+)(")/;
const match = htmlContent.match(pagesRegex);

if (match) {
    let decodedHtml = Buffer.from(match[2], 'base64').toString('utf8');

    // Load base64 image for the Shield
    const img2 = fs.readFileSync('C:\\Users\\USER\\.gemini\\antigravity\\brain\\28fc9f3a-b83c-4766-b36f-7a1adf72d802\\media__1773839127628.png').toString('base64');

    // 2: Institutional-Grade (Shield Check -> Shield) fixing the PURPLE regex
    decodedHtml = decodedHtml.replace(
        /<div class="w-16 h-16 bg-black\/50 border border-white\/10 rounded-2xl flex items-center justify-center mb-8 shadow-\[0_0_15px_rgba\(168,85,247,0.2\)\] group-hover:border-purple-500\/50 transition-colors border-t-purple-500\/30">\s*<span class="iconify[^>]+data-icon="lucide:shield-check"[^>]*><\/span>\s*<\/div>/,
        `<div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl overflow-hidden mb-8 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-purple-500/50 transition-colors border-t-purple-500/30">
                                <img src="data:image/png;base64,${img2}" alt="Institutional Grade" class="w-full h-full object-cover">
                            </div>`
    );

    let newBase64Str = Buffer.from(decodedHtml, 'utf8').toString('base64');
    htmlContent = htmlContent.replace(match[0], `home: "${newBase64Str}"`);
    fs.writeFileSync('index.html', htmlContent, 'utf8');
    
    fs.writeFileSync('home_extracted.html', decodedHtml, 'utf8');
    
    console.log('Successfully fixed the missing Shield icon.');
} else {
    console.error('Failed to find home base64 payload.');
}
