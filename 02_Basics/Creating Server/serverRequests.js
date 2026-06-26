const http = require("http"); //imports modules

// here we will focus on requests only
const server = http.createServer((req, res) => {
  console.log(req.method, req.url); // log specific fields, not the whole object

  res.setHeader("Content-Type", "text/html");

  // requesting routes
  const url = req.url;
  if (url === "/") {
    res.write("<html> <h2> route request worked </h2> </html>");
  }
});

server.listen(3000, () => {
  console.log("server running on port 3001");
});
