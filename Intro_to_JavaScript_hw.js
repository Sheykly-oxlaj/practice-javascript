// Ruby Methods 1

// Problem 1
// Research the map method. Then refactor the code below using map.

// Ruby syntax
// numbers = [1, 2, 4, 2]
// p numbers.map { |number| number * 2 }

// const and variable act the same way, I think?
const numbers = [1, 2, 4, 2];
console.log(numbers.map((number) => number * 2));

// Problem 2
// Use the `map` method to convert the array of hashes into an array that only contains the ids.

// Ruby syntax
// p items.map { |item| item[:id] }

var items = [
  { id: 1, body: "foo" },
  { id: 2, body: "bar" },
  { id: 3, body: "foobar" },
];
console.log(items.map((item) => item["id"]));

// 3 Use the `map` method with the `to_h` method to convert the array of hashes into a single hash where the keys are the names and the values are the colors.

// Ruby syntax
// p fruits.map { |fruit| [fruit["name"], fruit["color"]] }.to_h

var fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

// var key_value_pair = new Map(fruits.map(({ name, color }) => [name, color]));
// console.log(key_value_pair);

// or

console.log(new Map(fruits.map(({ name, color }) => [name, color])));

// 4.Write a method called `reverse_a_string` that accepts a string as a parameter and returns the reverse. The one caveat: Don't use the reverse method that already comes with Ruby!

// function reverse_a_string(string) {
//   array = Array.from(string);
//   reverse_string = array.reverse();
//   return reverse_string.join("");
// }
// console.log(reverse_a_string("hello"));

function reverse_a_string(string) {
  return string.split("").reverse().join("");
}
console.log(reverse_a_string("hello"));

// 5 Write a method called `find_longest_word`, which will accept a string as a parameter (usually a sentence), and return another string that will be the longest word in that sentence.

function find_longest_word(sentence) {
  var words = sentence.split(" ");
  var longest_word = words[0];
  for (var index = 0; index < words.length; index++) {
    if (words[index].length > longest_word.length) {
      longest_word = words[index];
    }
  }
  return longest_word;
}
console.log(find_longest_word("I am Sheykly"));

// function find_longest_word(sentence) {
//   words = sentence.split(" ");
//   longest_word = "";

//   words.forEach((word) => {
//     for (let index = 0; index < words.length; index++) if (word[index].length > word[index].length) longest_word = word;
//   });
// }

function find_longest_word(sentence) {
  words = sentence.split(" ");
  longest_word = words[0];
  for (let index = 0; index < words.length; index++) {
    if (words[index].length > longest_word.length) {
      longest_word = words[index];
    }
  }
  return longest_word;
}
console.log(find_longest_word("I am Carolina"));

/////////////////////////////////////////////////////////// Ruby Methods 2

// 1 Read about the Ruby select method. Then refactor the code below using select.
// Ruby solution

// solution:
// numbers = [1, 2, 4, 2]
// even_numbers = number.select { |number| number.even? }

// p even_numbers

// ```

var digits = [1, 2, 4, 2];
console.log(digits.filter((number) => number % 2 == 0));

//2 Use the select method with the following array of hashes to create a new array of hashes that only contain movies with a rating less than 4.0.
var movies = [
  { id: 1, title: "Die Hard", rating: 4.0 },
  { id: 2, title: "Bad Boys", rating: 5.0 },
  { id: 3, title: "The Chamber", rating: 3.0 },
  { id: 4, title: "Fracture", rating: 2.0 },
];
//Ruby syntax
// p movies.select { |movie| movie[rating:] < 4.0}

// Javascript
console.log(movies.filter((movie) => movie["rating"] < 4));

//3Use the select method combined with the map method to convert the array of hashes into an array of hashes that only contain movie ids of the movies with the letter 'b' in the title (case insensitive).
movies = [
  { id: 1, title: "Die Hard", rating: 4.0 },
  { id: 2, title: "Bad Boys", rating: 5.0 },
  { id: 3, title: "The Chamber", rating: 3.0 },
  { id: 4, title: "Fracture", rating: 2.0 },
];

//Ruby syntax
// movies_b = movies.select{ |movie| movie[:title].include?("b")}

//Javascript
console.log(movies.filter((movie) => movie["title"].toLowerCase().includes("b")));

//4 Write a method called palindrome? which should accept a string as a parameter and return a boolean that indicates whether the string is a palindrome. A palindrome is a word that reads the same both forwards and backwards. Examples: eye, madam, racecar

function palindrome(string) {
  var reversString = string.split("").reverse().join("");
  if (string === reversString) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("tacocat"));
console.log(palindrome("wazzzzup"));
console.log(palindrome("car"));

// 5 Write a method called split_array, with two parameters, the first being an array, and the second being an integer. The method will then create an array of other arrays, each one being the size of the indicated by the second parameter.

function split_array(array, integer) {
  var position = 0;
  var new_array = [];
  do {
    new_array.push(integer);
  } while (position < array.length);
  {
    position = position++;
  }
}
console.log(split_array([0, 1, 2, 3, 4, 5], 2));
console.log(split_array([0, 1, 2, 3, 4, 5], 3));
