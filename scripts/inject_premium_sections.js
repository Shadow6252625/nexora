const fs = require('fs');

let htmlContent = fs.readFileSync('index.html', 'utf8');

const section1Str = `
        <!-- PREMIUM SECTION 1: Metrics Grid -->
        <section class="py-16 px-6 relative z-20">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Card 1 -->
                    <div class="panel-glass p-8 rounded-2xl flex flex-col justify-center items-center text-center group cursor-default">
                        <div class="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                            <span class="iconify text-3xl text-indigo-400" data-icon="lucide:activity" data-width="32"></span>
                        </div>
                        <h4 class="text-neutral-400 text-sm font-semibold uppercase tracking-widest mb-2">Total Volume Mined</h4>
                        <span class="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition-all">$1.2B+</span>
                    </div>
                    <!-- Card 2 -->
                    <div class="panel-glass p-8 rounded-2xl flex flex-col justify-center items-center text-center group cursor-default">
                        <div class="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                            <span class="iconify text-3xl text-blue-400" data-icon="lucide:cpu" data-width="32"></span>
                        </div>
                        <h4 class="text-neutral-400 text-sm font-semibold uppercase tracking-widest mb-2">Active Neural Nodes</h4>
                        <span class="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-500 transition-all">42,891</span>
                    </div>
                    <!-- Card 3 -->
                    <div class="panel-glass p-8 rounded-2xl flex flex-col justify-center items-center text-center group cursor-default">
                        <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                            <span class="iconify text-3xl text-emerald-400" data-icon="lucide:zap" data-width="32"></span>
                        </div>
                        <h4 class="text-neutral-400 text-sm font-semibold uppercase tracking-widest mb-2">Sub-Second Latency</h4>
                        <span class="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 transition-all">~400ms</span>
                    </div>
                </div>
            </div>
        </section>

`;

const section2Str = `
        <!-- PREMIUM SECTION 2: Core Infrastructure -->
        <section class="py-24 px-6 relative z-20 overflow-hidden">
            <!-- Background Accent Glow -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-20 space-y-4">
                    <span class="text-brand text-sm font-bold tracking-widest uppercase">The Nexora Advantage</span>
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">Core Platform Infrastructure</h2>
                    <p class="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">Built from the ground up to solve the liquidity fragmentation crisis, providing seamless swaps across isolated assets.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div class="panel-glass p-10 rounded-3xl relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:border-indigo-500/50 transition-colors border-t-indigo-500/30">
                                <span class="iconify text-2xl text-white drop-shadow-md" data-icon="lucide:brain-circuit" data-width="28"></span>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4 tracking-tight">Adaptive Valuation</h3>
                            <p class="text-neutral-400 leading-relaxed font-medium">Neural appraisal models constantly ingest multi-chain market data to formulate highly accurate, real-time pricing for low-velocity assets.</p>
                        </div>
                    </div>
                    <!-- Feature 2 -->
                    <div class="panel-glass p-10 rounded-3xl relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-purple-500/50 transition-colors border-t-purple-500/30">
                                <span class="iconify text-2xl text-white drop-shadow-md" data-icon="lucide:shield-check" data-width="28"></span>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4 tracking-tight">Institutional-Grade</h3>
                            <p class="text-neutral-400 leading-relaxed font-medium">Execution layers audited by top-tier security firms. Hardware-secured oracle feeds guarantee robust protection against manipulation.</p>
                        </div>
                    </div>
                    <!-- Feature 3 -->
                    <div class="panel-glass p-10 rounded-3xl relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-500/50 transition-colors border-t-blue-500/30">
                                <span class="iconify text-2xl text-white drop-shadow-md" data-icon="lucide:network" data-width="28"></span>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4 tracking-tight">Cross-Chain Liquidity</h3>
                            <p class="text-neutral-400 leading-relaxed font-medium">Interoperability protocols bridge remote capital. Access deep liquidity pools spanning across Ethereum, Solana, and Layer 2s.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

`;

const section3Str = `
        <!-- PREMIUM SECTION 3: Trust Marquee & CTA -->
        <section class="py-24 relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-xl">
            <!-- Marquee -->
            <div class="max-w-7xl mx-auto px-6 mb-24">
                 <p class="text-center text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-10">Secured & Trusted By Industry Leaders</p>
                 <div class="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
                     <div class="flex items-center gap-2 group hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all cursor-default">
                         <span class="iconify text-3xl text-white" data-icon="simple-icons:solana"></span>
                         <span class="text-xl font-bold tracking-tighter text-white">Solana Foundation</span>
                     </div>
                     <div class="flex items-center gap-2 group hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(42,90,218,0.8)] transition-all cursor-default">
                         <span class="iconify text-4xl text-[#2A5ADA]" data-icon="simple-icons:chainlink"></span>
                         <span class="text-xl font-bold tracking-tighter text-white">Chainlink Labs</span>
                     </div>
                     <div class="flex items-center gap-2 group hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all cursor-default">
                         <span class="iconify text-3xl text-indigo-500" data-icon="lucide:shield"></span>
                         <span class="text-xl font-bold tracking-tighter text-white">Halborn Security</span>
                     </div>
                 </div>
            </div>
            
            <!-- CTA Block -->
            <div class="max-w-5xl mx-auto px-6">
                <div class="panel-glass rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
                    <!-- Energy Core Glow -->
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-600/30 to-purple-600/30 blur-[100px] pointer-events-none"></div>
                    
                    <div class="relative z-10 space-y-8">
                        <h2 class="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight drop-shadow-2xl">
                            Ready to experience <br> <span class="text-brand">absolute liquidity?</span>
                        </h2>
                        <p class="text-xl text-neutral-300 max-w-2xl mx-auto font-light">Join thousands of institutions and traders executing near-zero slippage swaps on the Nexora Protocol.</p>
                        
                        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
                            <a href="dashboard.html" class="bg-brand px-10 py-5 rounded-full text-lg font-bold w-full sm:w-auto flex items-center justify-center gap-3">
                                Launch Nexora Terminal <span class="iconify" data-icon="lucide:rocket" data-width="20"></span>
                            </a>
                            <a href="docs.html" class="text-white text-lg font-medium hover:text-indigo-400 transition-colors border-b border-transparent hover:border-indigo-400 pb-1">Read the Whitepaper</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

const pagesRegex = /(home:\s*")([^"]+)(")/;
const match = htmlContent.match(pagesRegex);

if (match) {
    let decodedHtml = Buffer.from(match[2], 'base64').toString('utf8');
    
    // Inject Section 1 before Advanced Interface Section
    decodedHtml = decodedHtml.replace('<!-- Advanced Interface Section -->', section1Str + '\\n        <!-- Advanced Interface Section -->');
    
    // Inject Section 2 before Live Feed Section
    decodedHtml = decodedHtml.replace('<!-- Live Feed Section -->', section2Str + '\\n        <!-- Live Feed Section -->');
    
    // Inject Section 3 to replace Trust Grid and end before CTA/Footer
    const trustGridRegex = /<!-- Trust Grid -->[\s\S]*?<!-- CTA \/ Footer -->/;
    decodedHtml = decodedHtml.replace(trustGridRegex, section3Str + '\\n        <!-- CTA / Footer -->');

    let newBase64Str = Buffer.from(decodedHtml, 'utf8').toString('base64');
    
    htmlContent = htmlContent.replace(match[0], `home: "${newBase64Str}"`);
    fs.writeFileSync('index.html', htmlContent, 'utf8');
    console.log('Successfully injected 3 premium sections into the Home page payload.');
} else {
    console.error('Failed to find home base64 payload in index.html');
}
