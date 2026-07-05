const http = require("http"); //imports modules

// function reqListner(req, res) {
//   console.log(req);
// }
// const server = http.createServer(reqListner);

//createServer is a method which returns a server with alot of properties and methods
const server = http.createServer((req, res) => {
  console.log(req.method, req.url); // log specific fields, not the whole object
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.end("Hello,this is home page!");
  } else if (req.url === "/about") {
    res.end("Hello, this is about page"); //we can also  import html file here
  }
});

//server.listen tells server to listen to requests and it runs infinitly
server.listen(3000, () => {
  console.log("server running on port 3001");
});
