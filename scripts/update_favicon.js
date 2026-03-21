const fs = require('fs');

try {
    let htmlContent = fs.readFileSync('index.html', 'utf8');

    // Remove old favicon links
    htmlContent = htmlContent.replace(/<link rel="icon"[^>]*>\r?\n?/g, '');
    htmlContent = htmlContent.replace(/<link rel="apple-touch-icon"[^>]*>\r?\n?/g, '');

    // Insert the new favicon pointing to the newly generated logo asset
    htmlContent = htmlContent.replace(/<\/title>/, '<\/title>\n  <link rel="icon" type="image/jpeg" href="assets/nexora-logo.jpg" />');

    fs.writeFileSync('index.html', htmlContent, 'utf8');
    console.log('Successfully updated the favicon to use the new official logo!');

} catch(e) {
    console.error("Error updating favicon:", e);
}
