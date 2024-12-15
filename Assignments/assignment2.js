// Declare and initialize your age
const myAge = 19;

// Declare and calculate the early years of a dog's life
let earlyYears = 2;
earlyYears *= 10.5;

// Calculate the remaining years after the first two
let laterYears = myAge - 2;

// Convert the remaining years into dog years
laterYears *= 4;

console.log(earlyYears); // Log the early years in dog years
console.log(laterYears); // Log the later years in dog years
console.log(myAge); // Log your current age

// Calculate total age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Convert the name to lowercase
let myName = 'Elyse'.toLowerCase();

// Log the final output with the calculated age in dog years
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
