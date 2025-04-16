// -------------------Memory Creation Phase-------------------
// - During this phase, the JavaScript engine scans the code and allocates memory for variables and functions.
// - Memeory is created for Variables declared with `var` and initialized with `undefined`.
// - Memory is also created with Variables declared with `let` and `const`, but in seperate space "script" . They are not initialized (Temporal Dead Zone).
// - Function declarations are hoisted with their full definition.
// - No code is executed during this phase; only memory is allocated.

// -------------------Execution Phase-------------------
// - During this phase, the JavaScript engine executes the code line by line.
// - Variables are assigned their actual values.
// - Functions are executed when called.
// - Errors occur if variables in the Temporal Dead Zone (declared with let & const) are accessed before initialization.
// - Variables declared with var show undefined if accessed before initialization.
// - Functions can be called before their declaration due to hoisting.

console.log("----------------------------   var & hoisting  ------------------");

console.log(firstName); // undefined (due to hoisting of 'var'- memory created with undefined before execution phase)
greet(); // Function hoisting works, so this will execute successfully

var firstName = "John"; // Variable declaration and initialization
function greet() {
  console.log("I am John"); // Function declaration
}

greet(); // Function call
console.log(firstName); // Outputs: John

var lastName = "Doe";
function greetLastName() {
  console.log("I am " + lastName); // Function declaration
}

console.log(
  "----------------------let keyword & hoisting---------------------------------------------"
);

// ----------------------let keyword & hoisting----------------------
// - Variables declared with `let` are hoisted but not initialized (Temporal Dead Zone).
//-variables declared with `let` are assigned a separate memory space in the script, and they are not initialized until the execution phase.
// - Accessing `let` variables before initialization throws an error.
// - `let` variables can be reassigned after initialization.

let instructor = "Muqaddas Zahra";
console.log(instructor); // Outputs: Muqaddas Zahra
instructor = "Maham Fatime"; // Reassigning the value of instructor
console.log(instructor); // Outputs: Maham Fatime

console.log(
  "-------------------------const keyword-----------------------------------"
);

// -------------------------const keyword-------------------------
// - Variables declared with `const` are hoisted but not initialized (Temporal Dead Zone).
// - `const` variables must be initialized at the time of declaration.
// - `const` variables cannot be reassigned after initialization.

const INSTRUCTOR = "Muqaddas Zahra";
console.log(INSTRUCTOR); // Outputs: Muqaddas Zahra
// INSTRUCTOR = "Maham Fatime"; // Throws error: Assignment to constant variable
console.log(INSTRUCTOR); // Outputs: Muqaddas Zahra

console.log(
  "------------------------redeclaration of variables & scope------------------"
);

// ------------------------Redeclaration of Variables & Scope------------------------
// - `var` allows redeclaration of variables in the same scope.
// - `let` and `const` do not allow redeclaration in the same scope.
// - Demonstrates the difference in redeclaration behavior.

var familyName = "Ali";
var familyName = "Khan"; // Redeclaring the variable familyName with var
console.log(familyName); // Outputs: Khan

let familyName1 = "Ali";
// let familyName1 = "Khan"; // Throws error: Identifier 'familyName1' has already been declared
console.log(familyName1);

console.log(
  "-----------------------------Scope of variables----------------------------------"
);

// -----------------------------Scope of Variables-----------------------------
// - Variables declared with `let` and `const` have block scope
// - Variables declared with `var` have function or global scope.
// -variables declared with `var` can be redeclared in the same scope, while `let` and `const` cannot.
//- variables declared with `let and const can be redeclared in different scopes because their memory is created separately.
// - Demonstrates how variables can have different values in different scopes.

let familyName2 = "Ali";

function showFamilyName() {
  // Variables with let can be redeclared in a different scope because their memory is created separately.
  let familyName2 = "Khan"; // This familyName2 is scoped to the function showFamilyName
  console.log("function scope", familyName2); // Outputs: Khan (local scope)
}

showFamilyName(); // Call the function to see the output
console.log("Global scope", familyName2); // Outputs: Ali (global scope)
