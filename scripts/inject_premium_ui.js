const fs = require('fs');

let htmlContent = fs.readFileSync('index.html', 'utf8');

const advancedCss = `
<!-- ADVANCED PREMIUM UI OVERRIDES -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
    /* Global Typography */
    body, p, span, div, a, button, input, th, td {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
    }
    h1, h2, h3, h4, h5, h6, .text-3xl, .text-4xl, .text-5xl, .text-7xl {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        letter-spacing: -0.02em !important;
    }

    /* Ultra-Premium Glassmorphism Panels */
    .panel-glass, .sidebar-glass {
        background: radial-gradient(130% 130% at 50% -20%, rgba(255, 255, 255, 0.05) 0%, rgba(10, 10, 14, 0.4) 100%), 
                    rgba(10, 10, 12, 0.3) !important;
        backdrop-filter: blur(48px) saturate(160%) !important;
        -webkit-backdrop-filter: blur(48px) saturate(160%) !important;
        border: 1px solid rgba(255, 255, 255, 0.04) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.12) !important;
        border-left: 1px solid rgba(255, 255, 255, 0.08) !important;
        box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.9), 
                    inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease !important;
    }
    
    .panel-glass:hover, .sidebar-glass {
        box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 1.0), 
                    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    }
    
    .panel-glass:hover {
        transform: translateY(-2px) !important;
    }

    /* Header Refinement */
    .header-glass {
        background: linear-gradient(to bottom, rgba(5, 5, 8, 0.6) 0%, rgba(5, 5, 8, 0.0)) !important;
        backdrop-filter: blur(24px) !important;
        -webkit-backdrop-filter: blur(24px) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
    }

    /* High-Tech Brand Buttons */
    .bg-brand {
        background: linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #8b5cf6 100%) !important;
        color: white !important;
        border: none !important;
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.3) !important;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    .bg-brand:hover {
        background: linear-gradient(135deg, #4f46e5 0%, #818cf8 50%, #a855f7 100%) !important;
        box-shadow: 0 0 30px rgba(139, 92, 246, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.5) !important;
        transform: scale(1.02) !important;
    }

    /* High-Tech Text Gradients */
    .text-brand {
        background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        text-shadow: none !important;
        font-weight: 800 !important;
    }

    /* Crisp Inputs */
    .input-dark {
        background: rgba(0, 0, 0, 0.3) !important;
        border: 1px solid rgba(255, 255, 255, 0.05) !important;
        border-radius: 124px !important;
        color: white !important;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.3) !important;
        transition: all 0.3s ease !important;
    }
    .input-dark:focus {
        background: rgba(0, 0, 0, 0.5) !important;
        border-color: #818cf8 !important;
        box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.25), inset 0 2px 4px rgba(0,0,0,0.3) !important;
        outline: none !important;
    }

    /* Universal Button Transitions */
    button {
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, background 0.2s ease !important;
    }
    button:active {
        transform: scale(0.97) !important;
    }
</style>
`;

function injectAdvancedStyles(html) {
    if(html.includes('<!-- ADVANCED PREMIUM UI OVERRIDES -->')) return html;
    return html.replace('</head>', advancedCss + '</head>');
}

const pagesRegex = /(home|markets|dashboard|docs):\s*"([^"]+)"/g;
const matches = [...htmlContent.matchAll(pagesRegex)];

for (const match of matches) {
    const pageKey = match[1];
    const base64Str = match[2];
    
    let decodedHtml = Buffer.from(base64Str, 'base64').toString('utf8');
    let advancedHtml = injectAdvancedStyles(decodedHtml);
    let newBase64Str = Buffer.from(advancedHtml, 'utf8').toString('base64');
    
    const searchString = `${pageKey}: "${base64Str}"`;
    const replacementString = `${pageKey}: "${newBase64Str}"`;
    htmlContent = htmlContent.replace(searchString, replacementString);
}

htmlContent = injectAdvancedStyles(htmlContent);
fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Advanced CSS overrides injected completely.');
