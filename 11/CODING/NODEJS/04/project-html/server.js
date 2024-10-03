import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function renderTemplate(templatePath, data, callback) {
    fs.readFile(templatePath, 'utf-8', (err, source) => {
        if (err) {
            return callback(err);
        }
        const template = handlebars.compile(source);
        const result = template(data);
        callback(null, result);
    });
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        const templatePath = path.join(__dirname, 'templates', 'home.html');
        const data = {
            title: 'Simple HTTP Handlebars Example',
            welcomeMessage: 'Welcome to our simple server!',
        };

        renderTemplate(templatePath, data, (err, html) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.statusCode = 200;
                res.end(html);
            }
        });
    } else if (req.url === '/anas'){
        res.statusCode = 200;
        res.end('<h1>Hello, Anas</h1>');
    } else if (req.url === '/about'){

        const templatePath = path.join(__dirname, 'templates', 'about.html');
        const data = {
            title: 'Simple HTTP Handlebars Example',
            welcomeMessage: 'Welcome to our simple server!',
        };

        renderTemplate(templatePath, data, (err, html) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.statusCode = 200;
                res.end(html);
            }
        });
        
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found!');
    }

});

// Start the server
const port = 3000;
const host = '127.0.0.1'; //0.0.0.0
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});