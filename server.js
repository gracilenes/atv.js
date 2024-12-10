const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)) => {
    const filePath = path.join(__dirname, 'public' , req.url === '/' ? 'index.html: req.url');
    let extname = path.extname(filePath);

    let contentType = "text/html";
    switch(extname){
        case '.css':
            contentType "text/html";
            break;
        case '.js':
            contentType "application/javascript";
            break;
    }
}