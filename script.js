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
//Checks what character code a character has based on the UTF-16 character set

let char = string[6];
console.log(char);
//Can be very unpredctable, because it will sometimes log a string as an array, and
//sometimes as a character. It is not recommended to use this method. If a there is no
// character at the specified index, it will return undefined.

const upperCase = document.getElementById("uppercase");
const lowerCase = document.querySelector("#lowercase");
// two different ways to select an element from the HTML document, or DOM

upperCase.innerText = "hello there".toUpperCase(); // Changes the text to uppercase
lowerCase.innerText = "HELLO THERE".toLowerCase(); // Changes the text to lowercase

let text1 = "Slå";
let text2 = "sammen";
let text3 = "strings";

let text4 = text1.concat(" ", text2, " ", text3);
//If there is no space at the end of the strings you can always add the space manually.
//  This method concatenates the strings together (joins them)
console.log(text4);

const concat = document.getElementById("concat");

concat.innerText = text4;

let trimming = "                   Fjern mellomrommene              ";
let trimmed = trimming.trim();
// removes the spaces before and after the strings
console.log(trimmed);

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

if (carBrands.length >= 11) {
  console.log(carBrands[4]);
  // console logs the 5th element in the array (remember, index always starts
  // at 0 unless otherwise specified)
} else {
  console.log("Litt for mange biler der, gitt");
}
//Counts the carBrands array and logs to the console based on how many cars it contains

let poppedCar = carBrands.pop();
// removes the last element in the array and returns it
console.log(poppedCar);
console.log(carBrands);

carBrands.push("Volkswagen");
// adds a new element to the end of the array
console.log(carBrands);
