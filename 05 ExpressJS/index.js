const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get("/about", (req, res) => {
  //   res.send("this is about page");
  res.json({ name: "Ubaid", "roll NO": 11, age: 24, gpa: 3.55 });
});
app.get("/portfolio", (req, res) => {
  res.send("this is my portfolio page.");
});


//the app.listen funciton creates an http server and then listen it on the given port
app.listen(port, () => {
  console.log(`App is listening on port : ${port}`);
});
