const fs = require('fs');

let htmlContent = fs.readFileSync('index.html', 'utf8');
const pagesRegex = /(home:\s*")([^"]+)(")/;
const match = htmlContent.match(pagesRegex);

if (match) {
    let decodedHtml = Buffer.from(match[2], 'base64').toString('utf8');

    // Load base64 images
    const img1 = fs.readFileSync('C:\\Users\\USER\\.gemini\\antigravity\\brain\\28fc9f3a-b83c-4766-b36f-7a1adf72d802\\media__1773839079455.png').toString('base64');
    const img2 = fs.readFileSync('C:\\Users\\USER\\.gemini\\antigravity\\brain\\28fc9f3a-b83c-4766-b36f-7a1adf72d802\\media__1773839127628.png').toString('base64');
    const img3 = fs.readFileSync('C:\\Users\\USER\\.gemini\\antigravity\\brain\\28fc9f3a-b83c-4766-b36f-7a1adf72d802\\media__1773839161847.png').toString('base64');

    // 1: Adaptive Valuation (Brain Circuit -> Gear)
    decodedHtml = decodedHtml.replace(
        /<div class="w-16 h-16 bg-black\/50 border border-white\/10 rounded-2xl flex items-center justify-center mb-8 shadow-\[0_0_15px_rgba\(99,102,241,0.2\)\] group-hover:border-indigo-500\/50 transition-colors border-t-indigo-500\/30">\s*<span class="iconify[^>]+data-icon="lucide:brain-circuit"[^>]*><\/span>\s*<\/div>/,
        `<div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl overflow-hidden mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:border-indigo-500/50 transition-colors border-t-indigo-500/30">
                                <img src="data:image/png;base64,${img1}" alt="Adaptive Valuation" class="w-full h-full object-cover">
                            </div>`
    );

    // 2: Institutional-Grade (Shield Check -> Shield)
    decodedHtml = decodedHtml.replace(
        /<div class="w-16 h-16 bg-black\/50 border border-white\/10 rounded-2xl flex items-center justify-center mb-8 shadow-\[0_0_15px_rgba\(16,185,129,0.2\)\] group-hover:border-emerald-500\/50 transition-colors border-t-emerald-500\/30">\s*<span class="iconify[^>]+data-icon="lucide:shield-check"[^>]*><\/span>\s*<\/div>/,
        `<div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl overflow-hidden mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:border-emerald-500/50 transition-colors border-t-emerald-500/30">
                                <img src="data:image/png;base64,${img2}" alt="Institutional Grade" class="w-full h-full object-cover">
                            </div>`
    );

    // 3: Cross-Chain Liquidity (Network -> Hierarchy)
    decodedHtml = decodedHtml.replace(
        /<div class="w-16 h-16 bg-black\/50 border border-white\/10 rounded-2xl flex items-center justify-center mb-8 shadow-\[0_0_15px_rgba\(59,130,246,0.2\)\] group-hover:border-blue-500\/50 transition-colors border-t-blue-500\/30">\s*<span class="iconify[^>]+data-icon="lucide:network"[^>]*><\/span>\s*<\/div>/,
        `<div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl overflow-hidden mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-500/50 transition-colors border-t-blue-500/30">
                                <img src="data:image/png;base64,${img3}" alt="Cross-Chain Liquidity" class="w-full h-full object-cover">
                            </div>`
    );

    let newBase64Str = Buffer.from(decodedHtml, 'utf8').toString('base64');
    htmlContent = htmlContent.replace(match[0], `home: "${newBase64Str}"`);
    fs.writeFileSync('index.html', htmlContent, 'utf8');
    
    fs.writeFileSync('home_extracted.html', decodedHtml, 'utf8');
    
    console.log('Successfully replaced Section 2 icons with Base64 3D icons.');
} else {
    console.error('Failed to find home base64 payload.');
}
