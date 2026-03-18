const fs = require('fs');

let htmlContent = fs.readFileSync('index.html', 'utf8');
const pagesRegex = /(home:\s*")([^"]+)(")/;
const match = htmlContent.match(pagesRegex);

if (match) {
    let decodedHtml = Buffer.from(match[2], 'base64').toString('utf8');

    // 1: Volume Mined
    decodedHtml = decodedHtml.replace(
        /<div class="w-24 h-24 mb-6 group-hover:scale-110 transition-all duration-300">\s*<img src="(data:image\/png;base64,[^"]+)" alt="Volume Mined" class="[^"]+">\s*<\/div>/,
        `<div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:border-indigo-500/50 group-hover:scale-110 transition-all duration-300 border-t-indigo-500/30">
                            <img src="$1" alt="Volume Mined" class="w-10 h-10 object-contain drop-shadow-md">
                        </div>`
    );

    // 2: Neural Nodes
    decodedHtml = decodedHtml.replace(
        /<div class="w-24 h-24 mb-6 group-hover:scale-110 transition-all duration-300">\s*<img src="(data:image\/png;base64,[^"]+)" alt="Neural Nodes" class="[^"]+">\s*<\/div>/,
        `<div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-300 border-t-blue-500/30">
                            <img src="$1" alt="Neural Nodes" class="w-10 h-10 object-contain drop-shadow-md">
                        </div>`
    );

    // 3: Latency
    decodedHtml = decodedHtml.replace(
        /<div class="w-24 h-24 mb-6 group-hover:scale-110 transition-all duration-300">\s*<img src="(data:image\/png;base64,[^"]+)" alt="Latency" class="[^"]+">\s*<\/div>/,
        `<div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-300 border-t-emerald-500/30">
                            <img src="$1" alt="Latency" class="w-10 h-10 object-contain drop-shadow-md">
                        </div>`
    );

    let newBase64Str = Buffer.from(decodedHtml, 'utf8').toString('base64');
    htmlContent = htmlContent.replace(match[0], `home: "${newBase64Str}"`);
    fs.writeFileSync('index.html', htmlContent, 'utf8');
    
    // Also extract it for viewing
    fs.writeFileSync('home_extracted.html', decodedHtml, 'utf8');
    
    console.log('Successfully formatted 3D icons to act like real icons in a container!');
} else {
    console.error('Failed to find home base64 payload.');
}
