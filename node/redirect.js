const http = require("http");
const fs = require("fs");
const port = 3000;

const configs = JSON.parse(fs.readFileSync("configs.json"));

const server = http.createServer((req, res) => {
  res.writeHead(302, { location: "https://www." + configs.redirect });
  res.end();
});

server.listen(port, (error) => {
  if (error) {
    console.log("Something went wrong");
  } else {
    console.log("Server is listening on port" + port);
  }
});
