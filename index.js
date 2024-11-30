// 1.create mathematical operation using let, var and const methods using javascript and print the values in console accordingly.

// Declare constants
const num1 = 10;
const num2 = 5;

console.log("Value of num1:", num1);
console.log("Value of num2:", num2);

// Perform operations using let
let addition = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// Print results using let

console.log("additin:", addition);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Using var
var modulus = num1 % num2;
console.log("\nUsing var:");
console.log("Modulus:", modulus);

// 2.write a function to implement map, reduce, filter, and flatmap using javascript.
// Answer

// Custom implementation of map
function customMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// Custom implementation of reduce
function customReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

// Custom implementation of filter
function customFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// Custom implementation of flatMap
function customFlatMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let mappedValue = callback(array[i], i, array);
    if (Array.isArray(mappedValue)) {
      result = result.concat(mappedValue);
    } else {
      result.push(mappedValue);
    }
  }
  return result;
}

// Example
const numbers = [1, 2, 3, 4, 5];

// Using customMap
const squares = customMap(numbers, (num) => num * num);
console.log("Custom Map - Squares:", squares); // [1, 4, 9, 16, 25]

// Using customReduce
const sum = customReduce(numbers, (acc, num) => acc + num, 0);
console.log("Custom Reduce - Sum:", sum); // 15

// Using customFilter
const evens = customFilter(numbers, (num) => num % 2 === 0);
console.log("Custom Filter - Evens:", evens); // [2, 4]

// Using customFlatMap
const nestedResult = customFlatMap(numbers, (num) => [num, num * 2]);
console.log("Custom FlatMap:", nestedResult); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// A function that accepts a callback
function processArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// 3.Give an example of creating a callback function in javascript.
//Answer 3 :

// A callback function to double each element
function doubleValue(value) {
  return value * 2;
}

// A callback function to square each element
function squareValue(value) {
  return value * value;
}

// Using the callback functions
// const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = processArray(numbers, doubleValue);
console.log("Doubled Numbers:", doubledNumbers);

const squaredNumbers = processArray(numbers, squareValue);
console.log("Squared Numbers:", squaredNumbers);

// 4.write a program to reverse a string using arrays in javascript.
//Answer 4
function reverseString(str) {
  const charArray = str.split("");

  const reversedArray = charArray.reverse();

  const reversedString = reversedArray.join("");

  return reversedString;
}

// Example
const inputString = "Hello, World!";
const result = reverseString(inputString);
console.log("Original String:", inputString);
console.log("Reversed String:", result);
