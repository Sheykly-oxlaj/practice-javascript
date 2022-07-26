////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 1:
// // Write a method that prints out every number from 1 to 100.

// for (let number = 1; number < 101; number++) {
//   console.log(number);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Problem 2:
// // Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function everyOtherNumber() {
  var number = 0;
  while (number < 100) {
    if (number % 2 !== 0) {
      console.log(number);
    }
    number += 1;
  }
}
everyOtherNumber();

// for (let number = 1; number < 101; number += 2) {
//   console.log(number);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 3

// var array = [10, 15, 20, 25, 30, 55, 67, 55, 90];
// var filtered = array.filter(check55);

// function check55(number) {
//   return number === 55;
// }
// console.log(filtered.log);

// var array = [10, 15, 20, 25, 30, 55, 67, 55, 90];
// var filtered = array.filter(function (x) {
//   return x === 55;
// });
// console.log(filtered.log);

// Amanda's
function numberOf55(numbers) {
  var count = 0;
  numbers.forEach(function (numbers) {});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// problem 4
var array = ["a", "b", "c", "d", "e"];
var index = 0;
var awesome = array.flatMap((x) => [x, "awesomesauce"]);
awesome.pop();
console.log(awesome);

// problem 5
