const http = require("http"); //imports modules
const fs = require("fs"); // for reading the html file

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    const data = fs.readFileSync("./index.html", "utf8"); // utf8 converts html file to string
    // res.end(data.toString()); //already a string so
    res.end(data);
  } else if (req.url === "/about") {
    res.end("Hello, this is about page");
  }
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
