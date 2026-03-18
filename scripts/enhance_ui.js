const fs = require('fs');

const indexHtmlPath = 'index.html';
let htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// The file contains a JavaScript object `const PAGES = { home: "...", markets: "...", dashboard: "...", docs: "..." }`
const pagesRegex = /(home|markets|dashboard|docs):\s*"([^"]+)"/g;

function enhanceAesthetics(html) {
    let enhanced = html;
    
    // 1. TYPOGRAPHY: Swap Inter for Outfit, and add the font links
    enhanced = enhanced.replace(
        /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[^"]+" rel="stylesheet">/,
        '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">'
    );
    enhanced = enhanced.replace(/font-family: 'Inter', sans-serif;/g, "font-family: 'Outfit', sans-serif;");
    
    // Make headings slightly tighter for a premium feel
    enhanced = enhanced.replace(/class="text-3xl font-semibold/g, 'class="text-3xl font-semibold tracking-tight');
    enhanced = enhanced.replace(/class="text-4xl font-semibold/g, 'class="text-4xl font-bold tracking-tighter');
    enhanced = enhanced.replace(/class="text-5xl md:text-7xl font-bold/g, 'class="text-5xl md:text-7xl font-extrabold tracking-tighter');

    // 2. BRAND COLOR: Shift to a more vibrant, modern glowing Indigo
    // Old: #4f46e5 (bg-brand) -> New: #6366f1 (Indigo 500 equivalent but we'll use a custom hex that pops more)
    // Actually, let's use a very electric indigo/purple blend.
    enhanced = enhanced.replace(/\.bg-brand \{[^}]+\}/, '.bg-brand { background-color: #6366f1; box-shadow: 0 0 20px rgba(99, 102, 241, 0.4); }');
    enhanced = enhanced.replace(/\.text-brand \{[^}]+\}/, '.text-brand { color: #818cf8; text-shadow: 0 0 10px rgba(129, 140, 248, 0.3); }');
    enhanced = enhanced.replace(/\.border-brand \{[^}]+\}/, '.border-brand { border-color: #6366f1; box-shadow: inset 0 0 10px rgba(99, 102, 241, 0.2); }');
    
    // 3. DEEP GLASSMORPHISM & SHADOWS
    // Upgrade panel-glass to be much sleeker
    enhanced = enhanced.replace(
        /\.panel-glass \{[^}]+\}/,
        `.panel-glass {
            background: linear-gradient(180deg, rgba(30, 30, 35, 0.6) 0%, rgba(15, 15, 20, 0.8) 100%);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-top: 1px solid rgba(255, 255, 255, 0.15); /* inner top highlight */
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }`
    );

    // Upgrade sidebar glass
    enhanced = enhanced.replace(
        /\.sidebar-glass \{[^}]+\}/,
        `.sidebar-glass {
            background: rgba(10, 10, 12, 0.65);
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
            border-right: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 10px 0 30px rgba(0, 0, 0, 0.4);
        }`
    );
    
    // Upgrade header glass
    enhanced = enhanced.replace(
        /\.header-glass \{[^}]+\}/,
        `.header-glass {
            background: linear-gradient(to bottom, rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.4));
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }`
    );

    // 4. INPUT REFINEMENT
    enhanced = enhanced.replace(
        /\.input-dark \{[^}]+\}/,
        `.input-dark {
            background-color: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: white;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }`
    );
    enhanced = enhanced.replace(
        /\.input-dark:focus \{[^}]+\}/,
        `.input-dark:focus {
            background-color: rgba(255, 255, 255, 0.06);
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2), inset 0 2px 4px rgba(0,0,0,0.2);
            outline: none;
        }`
    );

    // 5. SCROLLBARS (Slimmer)
    enhanced = enhanced.replace(/width: 6px;/g, 'width: 4px;');
    
    return enhanced;
}

const matches = [...htmlContent.matchAll(pagesRegex)];

for (const match of matches) {
    const pageKey = match[1];
    const base64Str = match[2];
    
    let decodedHtml = Buffer.from(base64Str, 'base64').toString('utf8');
    let enhancedHtml = enhanceAesthetics(decodedHtml);
    let newBase64Str = Buffer.from(enhancedHtml, 'utf8').toString('base64');
    
    const searchString = `${pageKey}: "${base64Str}"`;
    const replacementString = `${pageKey}: "${newBase64Str}"`;
    htmlContent = htmlContent.replace(searchString, replacementString);
}

// Ensure the root index.html wrapper font is also updated if present
htmlContent = htmlContent.replace(
    /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[^"]+" rel="stylesheet">/,
    '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">'
);
htmlContent = htmlContent.replace(/font-family: 'Inter', sans-serif;/g, "font-family: 'Outfit', sans-serif;");

fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Premium aesthetic enhancements applied successfully.');
