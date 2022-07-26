// Thursday July 21st
// setTimeout(function () {
//   console.log("First task done!");
// }, 2000);

// console.log("Second task done!");

// setTimeout(function () {
//   console.log("First task done!");
// }, 2000);

// setTimeout(function () {
//   console.log("Second task done!");
// }, 4000);

// setTimeout(function () {
//   console.log("Third task done!");
// }, 6000);

// Lines 8-18, they are all starting at the same time, they are not waiting on each other....

setTimeout(function () {
  console.log("First task done!");
  setTimeout(function () {
    console.log("Second task done!");
    setTimeout(function () {
      console.log("Third task done!");
    }, 2000);
  }, 2000);
}, 2000);
