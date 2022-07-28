//1
var numbers = [1, 2, 3, 4];
console.log(numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0));

//2

function scrabble_score(string) {
  var points = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };
  letters = string.split("");
  values = letters.map((letter) => points[letter]);
  console.log(values.reduce((previousValue, currentValue) => previousValue + currentValue, 0));
}
scrabble_score("scholar");
scrabble_score("scholar");

//3
var items = [
  { title: "NoDBA", words: 561, tags: ["nosql", "people", "orm"], type: "book" },
  { title: "Infodeck", words: 1145, tags: ["nosql", "writing"], type: "book" },
  { title: "OrmHate", words: 1718, tags: ["nosql", "orm"], type: "book" },
  { title: "ruby", words: 1313, tags: ["ruby"], type: "article" },
  { title: "DDD_Aggregate", words: 482, tags: ["nosql", "ddd"], type: "book" },
];
books = items.filter((item) => item["type"] === "book");
words = books.map((book) => book["words"]);

console.log(words.reduce((previousValue, currentValue) => previousValue + currentValue, 0));

//4
// function mutation(string_1, string_2) {
//   string_1 = string_1.split("");
//   string_2 = string_2.split("");

//   string_1.forEach((letter) => {
//     if (letter.includes({
//       string_2.forEach((letter_2) => {
//         letter_2
//       }
//     )
//   }));
// })
// };

//tried this one, I havent figured it out, I will come back to it.


//5
// Ruby methods 4
// # 1
var people = [
  { name: "Saron", age: 34 },
  { name: "Majora", age: 28 },
  { name: "Danilo", age: 45 },
];

//objs.sort((a,b) => a.last_nom - b.last_nom); // b - a for reverse sort
people.sort((person_1, person_2) => person_1.age - person_2.age);
console.log(people);

// # 2
var people = [
  { name: "bob", age: 15, gender: "male" },
  { name: "alice", age: 25, gender: "female" },
  { name: "bob", age: 56, gender: "male" },
  { name: "dave", age: 45, gender: "male" },
  { name: "alice", age: 56, gender: "female" },
  { name: "adam", age: 15, gender: "male" },
];

people.sort((person_1, person_2) => person_1.age - person_2.age);
people.sort((person_1, person_2) => person_1.name.localeCompare(person_2.name));

// # 3
var movies = [
  { id: 1, title: "Die Hard", rating: 4.0 },
  { id: 2, title: "Bad Boys", rating: 5.0 },
  { id: 3, title: "The Chamber", rating: 3.0 },
  { id: 4, title: "Fracture", rating: 2.0 },
];
movies.sort((movie_1, movie_2) => movie_2.rating - movie_1.rating);
console.log(movies.map((movie) => movie.title));

// # 4
var haystack = {
  hay: [
    "hay",
    "hay",
    "hay",
    { hay: { hay: ["hay", { hay: ["hay", "hay", "needle"] }, "hay", "hay", "hay"] } },
    "hay",
    "hay",
  ],
};
console.log(haystack.hay[3].hay.hay[1].hay[2]);

// # 5
function findMissingLetter(string) {
  var abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
//   alphabet = abc.join;
//   if (abc.join.includes(string)) {
//     return nil;
//   }
//   if (abc.join.includes(string) === false) {
//     return "hello";
//   }
// }

// console.log(findMissingLetter("abc"));

//Coulnd't get this one working :(
