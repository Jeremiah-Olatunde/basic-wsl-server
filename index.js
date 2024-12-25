const http = require("node:http");

const server = http.createServer((request, response) => {
	console.log("request recieved");
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.end("hello from the wsl ubuntu");
});

console.log("starting server");
server.listen(8080);
console.log("listening on port 8080");
