//promises tells us that whether our async code executed properly or not
//in simple words it returns a response to an async code in the form reject or resolve
//if resolved it returns a result message
//else if rejected it throws an error
//const numbers = [12, 45, 23, 50, 37];
const numbers = [12, 45, 23, 51, 37]; //max is not divisible by 5

function getMaxDivisibleByFive(arr) {
  return new Promise((resolve, reject) => {
    console.log("promice is pending!");
    setTimeout(() => {
      if (arr.length === 0) {
        reject("Array is empty!");
      } else {
        const max = Math.max(...arr); // get maximum value
        if (max % 5 === 0) {
          resolve(`Maximum value ${max} is divisible by 5`);
        } else {
          reject(`Maximum value ${max} is NOT divisible by 5`);
        }
      }
    }, 2000);
  });
}

// Using .then() and .catch()
getMaxDivisibleByFive(numbers)
  .then((result) => console.log("Success:", result))
  .catch((error) => console.log("Error:", error));
