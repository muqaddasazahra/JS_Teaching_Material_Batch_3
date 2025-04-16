// ------------------Accessing variables before declaration------------------
// This section demonstrates the behavior of variables when accessed before declaration.
// without keyword ---> ReferenceError: not defined
// var --------------> undefined (hoisted but uninitialized)
// let --------------> Cannot access before initialization (Temporal Dead Zone)
// const ------------> Cannot access before initialization (Temporal Dead Zone)
// ------------------------------------------------------------------------------

console.log(firstName); // undefined (due to hoisting of 'var')
greet(); // Function hoisting works, so this will execute successfully

var firstName = "John"; // Variable declaration and initialization
function greet() {
  console.log("I am John"); // Function declaration
}

greet(); // Function call
console.log(firstName); // Outputs: John

// ----------------------------------Functions------------------------------------------------
// This section demonstrates the use of functions in JavaScript.
// Functions are reusable blocks of code that can perform specific tasks.

// Example 1: Function to simulate making tea
function makeTea() {
  console.log("Take sugar"); // Take sugar
  console.log("Take tea leaves"); // Take tea leaves
  console.log("Take milk"); // Take milk
  console.log("Take water"); // Take water
  console.log("Boil for 5 minutes"); // Boil for 5 minutes

  return "Tea is ready"; // Return the result
}

// Example 2: Function to simulate a learning process
function learning() {
  console.log("Turn on the laptop"); // Step 1
  console.log("Pick all the notebooks"); // Step 2
  console.log("Get all the pens"); // Step 3

  return "Learning is fun"; // Return the result
}

// Example 3: Function to perform basic arithmetic operations
// This function takes a symbol and two numbers as input and performs the corresponding operation.
function calculation(symbol, num1, num2) {
  if (symbol === "+") return num1 + num2; // Addition
  else if (symbol === "-") return num1 - num2; // Subtraction
  else if (symbol === "*") return num1 * num2; // Multiplication
  else if (symbol === "/") return num1 / num2; // Division
  else return "Invalid operation"; // Invalid symbol
}

// Example 4: Function to perform all basic arithmetic operations
// This function demonstrates addition, subtraction, multiplication, and division.
function operations(num1, num2) {
  // Uncomment the following lines to use the `calculation` function for operations:
  // console.log(calculation("+", num1, num2));
  // console.log(calculation("-", num1, num2));
  // console.log(calculation("*", num1, num2));
  // console.log(calculation("/", num1, num2));
  // console.log(calculation("#", num1, num2)); // Invalid operation example

  // Directly performing operations and logging the results
  console.log(num1 + num2); // Addition
  console.log(num1 - num2); // Subtraction
  console.log(num1 * num2); // Multiplication
  console.log(num1 / num2); // Division

  return "All operations done"; // Return the result
}

// Uncomment the following lines to test the `calculation` function:
// console.log(calculation("/", 20, 5)); // Division
// console.log(calculation("*", 20, 5)); // Multiplication
// console.log(calculation("+", 20, 5)); // Addition

// Testing the `operations` function
console.log(operations(10, 5)); // Outputs results of all operations
