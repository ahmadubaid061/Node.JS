//================================================================================map method
//map Transform each element in the array using a condition like multily by some value .......
//stores the resultant in another array doesnot modify the array itself
const marks = [20, 30, 40, 50];
const doubled = marks.map((val) => val * 2); // multiply each value with 2

for (let i = 0; i < marks.length; i++) {
  console.log("marks at index: ", i, " = ", marks[i]);
}

for (let i = 0; i < doubled.length; i++) {
  console.log("doubled at index: ", i, " = ", doubled[i]);
}

//===================================================================================================
// ================================================================================filter method
//returns a new array of elements from the original array that satisfies a condition

const prices = [20, 23, 25, 28, 30, 33, 35, 38, 40, 43, 45, 48];
const multipleOfFive = prices.filter((val) => val % 5 == 0);
for (let i = 0; i < multipleOfFive.length; i++) {
  console.log("multipleOfFive at index: ", i, " = ", multipleOfFive[i]);
}

//====================================================================================================
//===================================================================================Reduce method
//reduce method reduce the whole array to a single value by doing some operations on the values

const fruits = [80, 90, 100, 70, 30];
const totalFruits = fruits.reduce((sum, current) => sum + current, 0);

console.log("total number of fruits are: ", totalFruits);
