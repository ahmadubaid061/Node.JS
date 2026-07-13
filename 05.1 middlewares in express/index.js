const express = require("express");
const app = express();
const port = 3000;

//===================================defining middleware
app.use((req, res, next) => {
  console.log("in middle ware :1");
  next(); //this (next) function calls the next middle ware in line after the first one
});

app.use((req, res, next) => {
  console.log("in middle ware :2");
  next();
});

//the app will keep on switching middle ware 1 AND 2 unless another middle ware comes like below
app.get("/about", (req, res) => {
  res.send("hello this is about page!");
  console.log("about page is listening!");
});

//==============================================
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
