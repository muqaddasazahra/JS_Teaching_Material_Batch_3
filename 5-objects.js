// -------------------------Objects in JavaScript-------------------------
// - Objects are collections of key-value pairs.
// - Keys are also called properties, and values can be of any data type (string, number, array, function, etc.).
// - Objects can also contain methods (functions defined as properties).

// -------------------------Example: Student Objects-------------------------

// Student 1: Object representing a student with properties and a method
// - Properties: name, age, batch, courses (array), isEnrolled (boolean)
// - Method: badge (returns a message about the student being a Class Representative)
let student1 = {
  name: "Maham Fatime",
  age: 22,
  batch: "2022-26",
  courses: ["JavaScript", "Python", "OOP", "DSA"],
  isEnrolled: true,
  badge: function () {
    return `${this.name} is the Class Representative (CR).`;
  },
};
// Accessing properties of the student object
console.log(student1.name); // Outputs: Maham Fatime (string property)
console.log(student1.age); // Outputs: 22 (number property)
console.log(student1.batch); // Outputs: 2022-26 (string property)

// Accessing method of the student object
console.log(student1.badge()); // Outputs: Maham Fatime is the Class Representative (CR).
