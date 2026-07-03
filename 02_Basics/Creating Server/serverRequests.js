const http = require("http"); //imports modules

// here we will focus on requests only
const server = http.createServer((req, res) => {
  console.log(req.method, req.url); // log specific fields, not the whole object

  res.setHeader("Content-Type", "text/html");

  // requesting routes
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html> <h2> route request worked </h2> </html>");
  }
  if (url === "/message" && method === "POST") {
    res.write("<html> <h2> Hello this is the message page </h2> </html>");
  }
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
