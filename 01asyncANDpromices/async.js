//asynchronous javascript code means portion of our code that doesnot executes immediatly but waits for some event like time or something
//such as settimeout funcitons

const printhello = function () {
  console.log("Hello the timers is Done!");
};
setTimeout(printhello, 2);
//the funciton printhello is called after 2 milliseconds of the code execution starts
console.log("hi execution has started!"); //this line executes before the printhello func

//node the setTimeout takes two arguments a funciton and a time value in milliseconds
//i can also write the above code as
// setTimeout(()=>{
//     console.log("Hello the timers is Done!");
// },2);
//the funciton is written inside the settimeout function
