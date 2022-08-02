//Highest number
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

//lowest number
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

//sorting strings, the compare function is a little more complex
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

displayCars();

function myFunction() {
  cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  displayCars();
}

// for each loop; The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

//array filter()
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//reduce () method works from left to right, but there is also reduceRight()
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

//reduce () method can also accept an initial value

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100); //initial value is 100

function myFunction(total, value) {
  return total + value;
}

//every(); The every() method check if all array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//returns true or false

//The find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//The Array.keys() method returns an Array Iterator object with the keys of an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}

// let and const declared variables have block scope; they cannot be accessed outside the block (curly brackets)

// only var declared variables DO NOT have block scope; can be and are accessed outside the block...

/*
 Local scope apply to variables declared inside a function. these variables become local variables
Local variables have Function Scope:

They can only be accessed from within the function. 
*/
