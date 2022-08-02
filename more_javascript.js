// 1
//Write a function that takes in an array and returns a new array with each number tripled. For example, given [3, 1, 5, 10], the function should return [9, 3, 15, 30].

/*
var array = [3, 1, 5, 10];
function tripleNumber(array) {
  array.forEach((number) => {
    console.log(number * 3);
  });
}
console.log(tripleNumber([3, 1, 5, 10]));
//returns 9, 3, 15, 30, undefined. 
*/

//solution:
function tripleArray(array) {
  newArr = [];
  array.forEach(function (purple_hippo) {
    newArr.push(purple_hippo * 3);
  });
  return newArr;
}
console.log(tripleArray([3, 1, 5, 10]));

// 2
// Write a function that takes in an array of numbers and returns a new array of numbers less than 5. For example, given [4, 10, 8, 3], the function should return [4, 3].

//solution
const array = [4, 10, 8, 3];
const under5 = array.filter(lessThan5);

function lessThan5(value) {
  return value < 5;
}
console.log(under5);

// 3
// Write a function that takes an array of numbers and returns the sum of all the numbers. For example, given [3, 9, 1], the function should return 13.

//solution:
const numbers = [3, 9, 1];
let sum = numbers.reduce(sumAllNumbers);

function sumAllNumbers(total, value) {
  return total + value;
}
console.log(sum);

// 4
// Write a function that takes in an array of strings and returns all the strings combined into a single string. For example, given ["a", "b", "c"], the function should return "abc".
//solution:
const strings = ["a", "b", "c"];
let singleString = strings.join("");
console.log(singleString);
//returns abc

//5
// Write a function to solve FizzBuzz (print out the numbers 1 through 100, except multiples of 3 print "Fizz", multiples of 5 print "Buzz", and multiples of 15 print "FizzBuzz").
//solution:
function fizzBuzz() {
  for (var number = 1; number <= 100; number++) {
    var message = number;
    if (number % 15 === 0) {
      message = "Fizzbuzz";
    } else if (number % 5 === 0) {
      message = "Buzz";
    } else if (number % 3 === 0) {
      message = "Fizz";
    }
    console.log(message);
  }
}

fizzBuzz();

//6
// Write a function that prints the lyrics to 99 Bottles of Beer.
//solution:
function bottlesOfBeer() {
  for (var number = 99; number >= 0; number--) {
    var message = "";
    if (number >= 2) {
      message = `${number} bottles of beer on the wall, ${number} bottles of beer. 
      Take one down and pass it around, ${number - 1} bottles of beer on the wall.`;
      console.log(message);
    } else if (number === 1) {
      message = `${number} bottle of beer on the wall, ${number} bottle of beer.
      Take one down and pass it around, no more bottles of beer on the wall.`;
      console.log(message);
    } else if (number === 0) {
      message = `No more bottles of beer on the wall, no more bottles of beer.
      Go to the store and buy some more, 99 bottles of beer on the wall.`;
      console.log(message);
    }
  }
}

bottlesOfBeer();
