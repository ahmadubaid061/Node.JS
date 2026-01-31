//=======================simple Funciton

function add(a, b) {
  return a + b;
}

console.log("sum from normal funciton", add(3, 4));

//=======================Funciton Expression
//in this a funciton is assigned to a variable

const add2 = function (a, b) {
  return a + b;
};
console.log("sum from Expression funciton", add2(5, 4));

//========================Arrow funciton
//dont need the funciton keywords and the {} blocks
//also need to write return it does it automatically

const add3 = (a, b) => a + b;

console.log("sum from arrow funciton", add3(6, 7));
