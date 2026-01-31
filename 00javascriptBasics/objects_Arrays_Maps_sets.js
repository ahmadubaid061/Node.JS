//objects are defined by {} and has two type of entries keys and corresponding values for each key
//array is defined by [] and donot have keys just values
//set is a special array which is defined by {} and does not contians duplicate values
//Map is a special object each key + vlaue pair is represented inside  [ ] but difference is that in objects the keys must be string only but in Maps keys can be of any data type
//=============================================================================================================
//=======================================================Objects
const person = {
  name: "Ubaid",
  rollNo: 11,
  gpa: 3.5,
  grade() {
    //cannot use arrow function inside object
    return this.gpa > 3 ? "A" : "B";
  }, //turnary operator used for if else
};

console.log(person);
console.log(person.grade());

//==========================================================Maps
const student = new Map([
  ["name", "Ahmad"],
  [1, 23], //1 is key and 23 is value both int
  [0.5, 100], // 0.5 is key which is float
]);

console.log(student.get("name"));
console.log(student.get(1));

//=========================================================Arrays
const marks = [23, 24, 25, 25];

console.log(marks);
console.log(marks[0]);
//or
for (let i = 0; i < marks.length; i++) {
  console.log("at index", i, "marks = ", marks[i]);
}

//=========================================================Set

const prices = new Set([20, 23, 24, 25, 26, 20, 23]);
//sets ignores the duplicates
console.log(prices);
for (const i of prices) {
  //for of loop
  console.log("at index", i, "prices = ", i);
}
