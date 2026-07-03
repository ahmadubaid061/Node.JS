const mymodule = require("./module");
const data = require("./data");

const findAge = mymodule.findAge;
console.log(`Age of ${data[0].name} is : ${findAge(data[0].year_of_birth)}`);
console.log(`Age of ${data[1].name} is : ${findAge(data[1].year_of_birth)}`);

//output
// Age of Ubaid is : 24
// Age of Ahmad is : 22


//==================================Explaination=============================
//in this directory we have 3 files 
//1- data.js contains data of two objects(persons)
//2- module.js contains a module(object) which contians further data such as properties and methods
// in the module.js there is a method findAge we want to use that to find age of the persons from data.js file
//3- so we  imported data of those persons and also the method in the main.js file 
// and that is how we import using require() in common js enviremnet

//======================importing in ES6 ===============
//in es6 we imports modules just like python 
//syntax => import {mymodule} from "./module.js";