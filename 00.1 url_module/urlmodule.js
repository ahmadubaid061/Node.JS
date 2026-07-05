import url from "url";

// Parsing the URL string using the WHATWG API:
// const myURL = new URL(
//   "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash",
// );

//   Parsing the URL string using the legacy API:

// const url = require('node:url');
// const myURL =
//   url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

// Constructing a URL from component parts and getting the constructed string
const myURL = new URL("https://myapp.com:3000");
myURL.pathname = "/a/b/c";
myURL.search = "somefile";
myURL.hash = "#home";


// To get the constructed URL string, use the href property accessor:
console.log(myURL.href);

// we can also see the whole url object 
console.log(myURL)