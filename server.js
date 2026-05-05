const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (error, data) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error loading page");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});