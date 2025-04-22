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