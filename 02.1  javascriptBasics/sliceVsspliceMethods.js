//slice() just takes some elements and store them in a new array and doesnot modify the original array
//while splice instead modifies the original array by removing the range of elements specified in arguments

const marks = [10, 20, 30, 40, 50];
const slice = marks.slice(1, 3); //starts from 1 nad stops before 3
//means value from index 1 and 2 are copied and stored in the new arrray named slice
// so slice contains only elements 20 and 30
for (const i of slice) {
  console.log(i);
}

//now splice doesnot store that is a new array but modifies the original arrray by removing those elements

marks.splice(1, 3); //indeces 1,2,3 are removed from the array
console.log(...marks);
