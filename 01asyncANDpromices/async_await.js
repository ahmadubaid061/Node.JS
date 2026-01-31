const numbers = [12, 45, 23, 51, 37];
function checkMaxDivisibleByFive(arr) {
  return new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
      if (arr.length === 0) reject("Array is empty!");
      const max = Math.max(...arr);
      if (max % 5 === 0) resolve(max);
      else reject(max);
    }, 2000);
  });
}

async function runCheck() {
  try {
    const max = await checkMaxDivisibleByFive([12, 45, 23, 50, 37]);
    console.log("Max divisible by 5:", max);
  } catch (error) {
    console.log("Error:", error, "is NOT divisible by 5");
  }
}

runCheck();
