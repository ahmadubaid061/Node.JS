const fs = require("fs");
const data = require("./data");
const mymodule = require("./module");
const findAge = mymodule.findAge;

//== writing files funciton needss three arguments
//1- file name
//2- file data string format
//3- callback funciton which runs once writing is complete

//----------------
// preparing data for the file
const ages = [];
ages[0] = findAge(data[0].year_of_birth);
ages[1] = findAge(data[1].year_of_birth);

// writing the file using writeFile()
try {
  fs.writeFile("writtenFile.js", JSON.stringify(ages), (err) => {
    if (err) {
      console.log("Something went wrong", err);
    } else {
      console.log("Data is written Successfully!");
    }
  });
} catch (error) {
  console.log("Something went wrong...", error);
}

//incase of writeFileSync() only two aruments are needed
//1- file name
//2- file data in string form
