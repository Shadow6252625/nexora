const fs = require('fs');

function performReplacements(html) {
    let replaced = html;
    
    // Global Title/Brand
    replaced = replaced.replace(/Nexus/g, 'Nexora');
    replaced = replaced.replace(/NEXUS/g, 'NEXORA');

    // Hero Section
    replaced = replaced.replace(
        /The first on-chain order book for fractionalized NFT liquidity\.\s*Zero-slippage swaps powered by neural valuation models\./g,
        'Nexora powers the first intelligent on-chain order book for fractionalized assets — delivering near-zero slippage execution through adaptive valuation models.'
    );

    // Announcement Badge
    replaced = replaced.replace(/V2 Protocol Upgrade Live/g, 'Neural Liquidity Engine V2 Live');

    // Button Text
    replaced = replaced.replace(/Launch Terminal/g, 'Launch Nexora Terminal');
    replaced = replaced.replace(/>Market</g, '>Explore Liquidity<');
    replaced = replaced.replace(/>\s*Market\s*</g, '>Explore Liquidity<');
    replaced = replaced.replace(/Get Started/g, 'Enter Nexora');
    replaced = replaced.replace(/View Markets/g, 'Explore Liquidity');

    // Section Copy Upgrades
    replaced = replaced.replace(/platform/g, 'protocol');
    replaced = replaced.replace(/Platform Fee/g, 'Protocol Fee');
    replaced = replaced.replace(/fast swaps/gi, 'high-efficiency execution');
    replaced = replaced.replace(/low slippage/gi, 'near-zero slippage execution');
    replaced = replaced.replace(/zero-slippage swaps/gi, 'near-zero slippage execution');
    replaced = replaced.replace(/AI pricing/gi, 'adaptive valuation models');

    // Developer Section
    replaced = replaced.replace(
        /Integrate Nexora appraisal oracles and liquidity pools directly into your dApp\. Our SDK handles the complexity of neural valuation and bonding curve management\./g,
        'Integrate Nexora appraisal oracles and liquidity pools directly into your dApp. Our execution engine handles the complexity of adaptive valuation models and bonding curve management.'
    );
    replaced = replaced.replace(/Nexus-SDK/g, 'Nexora-SDK'); // Because Nexus was replaced globally with Nexora, it'll be Nexora-SDK now. Double checking.

    // Footer Description
    replaced = replaced.replace(
        /The liquidity layer for the metaverse\. <br>\s*Fractionalize, trade, and earn\./g,
        'The intelligent protocol for on-chain assets. <br>\n                        High-efficiency execution via adaptive valuation systems.'
    );

    return replaced;
}

const dashboardHtml = fs.readFileSync('extracted_dashboard_from_github.html', 'utf8');
const rebrandedDashboardHtml = performReplacements(dashboardHtml);
const base64Dashboard = Buffer.from(rebrandedDashboardHtml, 'utf8').toString('base64');

let indexContent = fs.readFileSync('index.html', 'utf8');
const regex = /dashboard:\s*"([^"]+)"/;

if (regex.test(indexContent)) {
    indexContent = indexContent.replace(regex, `dashboard: "${base64Dashboard}"`);
    fs.writeFileSync('index.html', indexContent);
    console.log('Successfully rebranded and injected GitHub dashboard into index.html');
} else {
    console.error('Could not find dashboard string in index.html');
}
