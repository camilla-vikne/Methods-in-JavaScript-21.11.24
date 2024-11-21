// STRING METHODS
// read more: https://www.w3schools.com/js/js_string_methods.asp

let string = "Dette er en string med ca 33 tegn";
let length = string.length;

console.log(length); // Logs how many characters the string consists of. Is not a method,
//but a property.

let charAt = string.charAt(27);
console.log(charAt); // Lets you find a character at a specified location
//charAt is a function

let at = string.at(-6);
console.log(at); // at lets you find a character at the
//specified location, but negative indexes can also be used

let charCode = string.charCodeAt(27);
console.log(charCode);
// checks what character code a character has based on the UTF-16 character set

let char = string[6];
console.log(char);
// can be very unpredctable, because it will sometimes log a string as an array, and
//sometimes as a character. It is not recommended to use this method. If a there is no
// character at the specified index, it will return undefined.

const upperCase = document.getElementById("uppercase");
const lowerCase = document.querySelector("#lowercase");
// two different ways to select an element from the HTML document, or DOM

upperCase.innerText = "hello there".toUpperCase(); // changes the text to uppercase
lowerCase.innerText = "HELLO THERE".toLowerCase(); // changes the text to lowercase

let text1 = "Slå";
let text2 = "sammen";
let text3 = "strings";

let text4 = text1.concat(" ", text2, " ", text3);
// if there is no space at the end of the strings you can always add the space manually.
//  This method concatenates the strings together (joins them)
console.log(text4);

const concat = document.getElementById("concat");

concat.innerText = text4;

let trimming = "                   Fjern mellomrommene              ";
let trimmed = trimming.trim();
// removes the spaces (whitespace) from both ends of the string
console.log(trimmed);

// ARRAY METHODS
// read more: https://www.w3schools.com/js/js_array_methods.asp
const hobbies = [
  "Coding",
  "Fisking",
  "DnD",
  "Gaming",
  "Lesing",
  "Pokémonkort",
  "Sykling",
];

let hobbiesLength = hobbies.length;
console.log(hobbiesLength);
// returns the number of elements in the array. Can be very useful
// when working on larger arrays
console.log(hobbies);

let hobbyString = hobbies.toString();
// returns a string of all the elements in the array
console.log(hobbyString);

let joinedHobbies = hobbies.join(", ");
// lets you join the elements in the array with a string
console.log(joinedHobbies);

const carBrands = [
  "BMW",
  "Mazda",
  "Nissan",
  "Ford",
  "Mitsubishi",
  "Saab",
  "Opel",
  "Porsche",
  "McLaren",
  "Ferrari",
];
// < less than , > greater than, <= less than or equal to, >= greater than or equal to
// == equal to, != not equal to, === identical to, !== not identical to
if (carBrands.length >= 11) {
  console.log(carBrands[4]);
  // console logs the 5th element in the array (remember, index always starts
  // at 0 unless otherwise specified)
} else {
  console.log("Litt for mange biler der, gitt");
}
// counts the carBrands array and logs to the console based on how many cars it contains

let poppedCar = carBrands.pop();
// removes the *last* element in the array and returns it
console.log(poppedCar);
console.log(carBrands);

carBrands.push("Volkswagen");
// adds a new element to the *end* of the array
console.log(carBrands);

let shiftedCar = carBrands.shift();
// removes the *first* element in the array
console.log(shiftedCar);
console.log(carBrands);

carBrands.unshift("Tesla");
// adds a new element to the *beginning* of the array
console.log(carBrands);

console.log(carBrands[1]);

let names = ["Emil", "Camilla", "Thoralf", "Torgeir", "Jens"];
let moreNames = ["Monica", "Mats", "Christiano Ronaldo"];
names[names.length] = "Kåre Jonny";
// adds a new element to the end of the array
names[3] = "Lene";
// changes the value of the 4th element in the array

console.log(names);

// DO NOT DO
// delete names[0];
// deletes the first element of the array, but returns an empty slot
// instead of shifting the rest of the elements up to fill the gap
// console.log(names);

const concatNames = names.concat(moreNames);
// creates a new array that is the combination of the two arrays
// does not modify the original arrays
console.log(concatNames);

concatNames.splice(3, 5);
// the first parameter defines the position where new elements should be added
// the second parameter defines how many elements should be removed
// if nothing is added after the second parameter, it will just remove 5
// elements from the array, starting at index 2
console.log(concatNames);

concatNames.splice(3, 0, "Messi", "Rashford");
// adds elements at index 3, but doesn't remove any elements. Also inserts new elements
console.log(concatNames);

let cities = ["Bergen", "Tulsa", "Haugesund", "Oslo", "San Diego"];
let newCities = cities.slice(1);
// creates a new array that is a copy of the original array, starting at index 1
// you can also write cities.slice(1, 3) to get a copy of the array from index 1 to 3
// this method is a copy, so it doesn't modify the original array
console.log(newCities);
console.log(cities);

// NUMBER METHODS
// read more: https://www.w3schools.com/js/js_number_methods.asp

let number = 52;
console.log(number);
console.log(number.toString());
// converts the number to a string

let x = 47.4568344;
console.log(x.toExponential(2));
// converts the number to a string in exponential notation
// very rarely used

console.log(x.toFixed(2));
// converts the number to a string with a specified number of decimal places

console.log(x.toPrecision(5));
// converts the number to a string with a specified number of significant digits
