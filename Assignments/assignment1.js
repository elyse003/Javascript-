// Declare and initialize the Kelvin temperature
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius = kelvin - 273;

// Calculate Fahrenheit from Celsius
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature to the nearest integer
fahrenheit = Math.floor(fahrenheit);

// Log the Fahrenheit temperature to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
