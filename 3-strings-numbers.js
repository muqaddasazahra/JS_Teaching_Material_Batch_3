const score = 50;
console.log(score);
console.log(typeof score);


// ----------------------Strings-----------------------------------

// string--->combination of characters
//can be written with both single and double quotes
let firstName = "John";
let password = "john@12345";
console.log(firstName);

//format string -> combination of characters and numbers in double quotes
console.log("First Name =", firstName);
console.log("Password =", password);
console.log(typeof password);

//variables dont have types in JS, values have types
// JS is a dynamically typed language, meaning variables can hold values of any type and can change types during execution.
//example-? passwrod is a string, but we can change it to a number
password = 50000;``
console.log(password);
console.log(typeof password);


//Escape characters
// - Used to represent special characters in strings.
// \n - New line (alternatively, you can use template literlas for multiline strings)
let multilineDescription = "Code: Axb1234 \n Material: Cotton \n Colors: Red, Blue, Green \n Size: S, M, L, XL";
console.log(multilineDescription);

//--------------------------Template strings (Template literals)---------------------------

// - Enclosed in backticks (``) instead of single or double quotes.
// - Allow for multi-line strings and string interpolation (inserting variables or expressions into strings).

//Multiline String
let description = `Code: Axb1234
Material: Cotton 
Colors: Red, Blue, Green
Size: S, M, L, XL`;
console.log(description); 

//String Interpolation

let student_name="Maham Fatima"
let batch=3
let course_name= "JS"

//without string interpolation
console.log('student name is ',student_name,'\n batch is',batch,'\n course name is ',course_name)

//with string interpolation
console.log(`Student Name is ${student_name}
Batch is ${batch}
course name is ${course_name}`)



 
