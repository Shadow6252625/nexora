const fs = require('fs');

let htmlContent = fs.readFileSync('index.html', 'utf8');

const pagesRegex = /(home:\s*")([^"]+)(")/;
const match = htmlContent.match(pagesRegex);

if (match) {
    let decodedHtml = Buffer.from(match[2], 'base64').toString('utf8');
    
    // Replace Card 1 icon
    decodedHtml = decodedHtml.replace(
        /<div class="w-16 h-16 rounded-full bg-indigo-500\/10 border border-indigo-500\/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500\/20 transition-all duration-300">\s*<span class="iconify text-3xl text-indigo-400" data-icon="lucide:activity" data-width="32"><\/span>\s*<\/div>/g,
        '<div class="w-24 h-24 mb-6 group-hover:scale-110 transition-all duration-300">\\n                            <img src="assets/volume_mined_logo.png" alt="Volume Mined" class="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] rounded-2xl">\\n                        </div>'
    );
    
    // Replace Card 2 icon
    decodedHtml = decodedHtml.replace(
        /<div class="w-16 h-16 rounded-full bg-blue-500\/10 border border-blue-500\/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500\/20 transition-all duration-300">\s*<span class="iconify text-3xl text-blue-400" data-icon="lucide:cpu" data-width="32"><\/span>\s*<\/div>/g,
        '<div class="w-24 h-24 mb-6 group-hover:scale-110 transition-all duration-300">\\n                            <img src="assets/neural_nodes_logo.png" alt="Neural Nodes" class="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-2xl">\\n                        </div>'
    );

    // Replace Card 3 icon
    decodedHtml = decodedHtml.replace(
        /<div class="w-16 h-16 rounded-full bg-emerald-500\/10 border border-emerald-500\/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500\/20 transition-all duration-300">\s*<span class="iconify text-3xl text-emerald-400" data-icon="lucide:zap" data-width="32"><\/span>\s*<\/div>/g,
        '<div class="w-24 h-24 mb-6 group-hover:scale-110 transition-all duration-300">\\n                            <img src="assets/subsecond_latency_logo.png" alt="Latency" class="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-2xl">\\n                        </div>'
    );

    let newBase64Str = Buffer.from(decodedHtml, 'utf8').toString('base64');
    
    htmlContent = htmlContent.replace(match[0], `home: "${newBase64Str}"`);
    fs.writeFileSync('index.html', htmlContent, 'utf8');
    console.log('Successfully replaced standard icons with detailed 3D logos.');
} else {
    console.error('Failed to find home base64 payload in index.html');
}
