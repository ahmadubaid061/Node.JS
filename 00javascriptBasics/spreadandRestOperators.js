//spread and rest operators both presented by  "..."
//spread expands an array and takes all the elements
//rest gathers all the elements of array ,used for passwing to funcitons as
//arguments most of the times
//==============================================================================================================
//=============================================================Spread Operator
const array = ["ubaid", "ahamd", "ali", "GUll"];
//suppose i want to add new arguments like two or 3
//by using push mehtod it would take atleast 2 or 3 steps to add those
//to the array
//instead i will create another array with those elements and the original array using spread operator

const newArray = ["Muhammad", "Didar", ...array]; //the ... copies all the elements from arry and store them here

for (const i of newArray) {
  console.log(i);
}
//also we can do as
const arrayCopy = [...array];

//==============================================================================================================
//=============================================================Rest Operator

const printNames = (n1, n2, n3, n4, n5,n6) => console.log(n1, n2, n3, n4, n5,n6);

//for calling that i need to pass 6 names 
//but i can simply padd an array using rest operator 
console.log("All the names are!");
printNames(...newArray);