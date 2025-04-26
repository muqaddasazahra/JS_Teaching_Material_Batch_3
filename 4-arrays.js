let courses = ['JavaScript', 'Python', 'OOP', 'DSA'];
console.log(courses); // Outputs: ['JavaScript', 'Python', 'OOP', 'DSA']
console.log(typeof courses); // Outputs: object (arrays are objects in JavaScript)
console.log(Array.isArray(courses)); // Outputs: true (checks if courses is an array)


// Size of the array
console.log(courses.length); // Outputs: 4 (length of the array)


//indexes of the array
console.log(courses[0]); // Outputs: JavaScript (first element)
console.log(courses[2]); // Outputs: OOP (third element)
console.log(courses[courses.length - 1]); // Outputs: DSA (last element)
console.log(courses[courses.length - 2]); // Outputs: OOP (second last element)


//ForEach--->used to iterate over the elements of an array
courses.forEach((course, index) => {
  console.log(`Course ${index + 1} : ${course}`);
});



//----------------Example: Array containing values of different data types----------------

let array= [
  "Ali",
  5,
  true,
  { name: "Ali", age: 25 },
  [1, 2, 3]];
  
  //Loop through the array and print the type of each element
  // - Use the forEach method to iterate over the array elements.
  array.forEach((element, index) => {
    console.log(`Value ${index+1} has type ${typeof element}`);
  });

  //accessing the property of an object inside the array
  console.log(array[3].age);

  //accessing element of an array inside the array
  console.log(array[4][1]); // Outputs: 2 (second element of the inner array)
 