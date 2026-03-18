const fs = require('fs');

const homeHTML = fs.readFileSync('home_source.html', 'utf8');
const marketsHTML = fs.readFileSync('markets_source.html', 'utf8');

// Extract Live Terminal from home
const termStart = homeHTML.indexOf('<section id="terminal"');
let termEnd = homeHTML.indexOf('</section>', termStart) + '</section>'.length;
const terminalHTML = homeHTML.substring(termStart, termEnd);

// Extract Analytics and Wallet views from markets
const analyticsStart = marketsHTML.indexOf('<div id="view-analytics"');
let analyticsEnd = marketsHTML.indexOf('<!-- VIEW 4: WALLET -->', analyticsStart);
// Remove the 'hidden-section' class
let analyticsHTML = marketsHTML.substring(analyticsStart, analyticsEnd).replace('hidden-section ', '');

const walletStart = marketsHTML.indexOf('<div id="view-wallet"');
let walletEnd = marketsHTML.indexOf('<!-- VIEW 5: CALENDAR -->', walletStart);
let walletHTML = marketsHTML.substring(walletStart, walletEnd).replace('hidden-section ', '');

// Create the dashboard wrapper
const dashboardWrapper = `
<!-- VIEW: DASHBOARD (Default) -->
<div id="view-dashboard" class="view-section space-y-8 animate-in fade-in duration-500">
    <!-- Wallet Section -->
    ${walletHTML}
    
    <!-- Analytics Section -->
    ${analyticsHTML}

    <!-- Live Terminal Section -->
    ${terminalHTML}
</div>
`;

// Extract markets base structure (head, sidebar, header, scripts)
const marketBodyStart = marketsHTML.indexOf('<div class="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 relative">') + '<div class="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 relative">'.length;
const marketBodyEnd = marketsHTML.indexOf('<!-- Footer / Security Insights (Fixed at bottom of content area) -->');

let baseHTML = marketsHTML.substring(0, marketBodyStart) + '\n' + dashboardWrapper + '\n' + marketsHTML.substring(marketBodyEnd);

// Make the Dashboard icon active in the sidebar, and others inactive
baseHTML = baseHTML.replace('class="w-full flex justify-center py-3 text-white sidebar-icon-active relative transition-all duration-200" title="Marketplace"', 'class="w-full flex justify-center py-3 text-neutral-500 hover:text-white transition-colors relative group" title="Marketplace"');

// We need an active icon for the dashboard, let's inject it into the nav or replace the 'analytics' icon active state
baseHTML = baseHTML.replace('class="w-full flex justify-center py-3 text-neutral-500 hover:text-white transition-colors relative group" title="Analytics"', 'class="w-full flex justify-center py-3 text-white sidebar-icon-active relative transition-all duration-200" title="Dashboard"');
// Change the icon from bar-chart-2 to layout-dashboard
baseHTML = baseHTML.replace('data-icon="lucide:bar-chart-2"', 'data-icon="lucide:layout-dashboard"');
// Remove the title="Dashboard" from the replaced html and add it cleanly
// Actually let's just use string replace carefully.

// Update the title
baseHTML = baseHTML.replace('<title>Nexora | Live Marketplace</title>', '<title>Nexora | Dashboard</title>');

fs.writeFileSync('dashboard.html', baseHTML);
console.log('Successfully created dashboard.html');

