const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 9271;

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
    console.log(`Request: ${req.url}`);
    
    // Default to index.html for root
    let filePath = req.url === '/' ? '/index.html' : req.url;
    
    // Ignore query strings/hashes for file resolution
    filePath = filePath.split('?')[0].split('#')[0];
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    
    fs.readFile(path.join(process.cwd(), filePath), (err, content) => {
        if (err) {
            if(err.code == 'ENOENT'){
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
