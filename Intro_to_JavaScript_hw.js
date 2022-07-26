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
// Read about the Ruby select method. Then refactor the code below using select.
// Ruby solution

// solution:
// numbers = [1, 2, 4, 2]
// even_numbers = number.select { |number| number.even? }

// p even_numbers
