// const data = require("./data"); //i am tryin to read data using fs.readFileSync()
//for reading and writing
const fs = require("fs");

try {
  //    fs.readFile('data.js','utf8')
  console.log("reading Data......");
  const theData = fs.readFileSync("./data.js", "utf8");
  console.log(theData);

  //,,,,,
} catch (error) {
  console.log("something went wrong......", error);
}

//=================the fs modules enables us to read data from any other file (txt,js,py,,,,)
//====fs.readFile() will not wait for the the module to read the complete reading and exsecutes other portion
//====fs.readFileSync() will wait untill readin is completed
