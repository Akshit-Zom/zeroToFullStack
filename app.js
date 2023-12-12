//TODO ****************************************************************************************************/
/* ----------------------------------------------------------------------------------------------------
                                            !  NOTE !
   * * TO USE ANY BLOCK OF CODE JUST SELECT THE CODE ( CTRL (DRAG TO SELECT) + CLICK ) AND PRESS CTRL + / 
   * * USING esbenp.prettier-vscode EXTENSION IS HIGHLY RECOMMNDED FOR EASY AND CLEAN CODING
   * * FOR HIGHLIGHT I'VE USED aaron-bond.better-comments, DO INSTALL IT BEFORE STARTING
                                   ? HAVE WONDERFUL LEARNING ?
--------------------------------------------------------------------------------------------------*/
//TODO ****************************************************************************************************/

/* ----------------------------------------
?     METHODS
---------------------------------------- */

//* Methods are functions that belong to objects, providing functionality or performing actions.

// const person = {]
//   name: "Akshit",
//   age: 24,
//   learningMethodFunc: function () {
//     return `Gaming, Dance, Editing, Coding`;
//   },
// };
// console.log(person);

/* ----------------------------------------
?           CONTROL FLOW
  ---------------------------------------- */

//* Control flow statements, like if-else and switch, determine the order in which statements are executed.

// Example (if-else):
// let password = "aaaaaaaa";
// if (password.length === 8) {
//   console.log("Welcome");
// } else if (password.length < 8) {
//   console.log("Password is too short");
// } else {
//   console.log("Too long password. Password should be 8 characters");
// }

// Example (switch):
// let fruit = "banana";
// switch (fruit) {
//   case "banana":
//     console.log("Banana is good!");
//     break;
//   case "orange":
//     console.log("case orange");
//     break;
//   default:
//     console.log("asdadsasdadasda");
// }

/* ----------------------------------------
?      ARRAYS
  ---------------------------------------- */

//* Arrays are ordered lists that can store multiple values, accessed by an index.

// const favSingers = ["dababy", "adele", "juice wrld"];
// console.log(favSingers[0]);

/* ----------------------------------------
?      OBJECTS
  ---------------------------------------- */

//* Objects are collections of key-value pairs and can represent entities with properties and methods.

// const car = {
//   type: "bigCar",
//   model: "Gwagon",
//   color: "White",
// };
// console.log(typeof car);
// car.type = "toyota";
// console.log(car);

/* ----------------------------------------
 ?     FUNCTIONS
  ---------------------------------------- */

//* Functions are blocks of reusable code.

// Function declaration:
// function myFunction(x, y) {
//   return x * y;
// }
// console.log(myFunction(2, 2));

// Function expression:
// const expressionFunc = function (x, y) {
//   return x * y;
// };
// console.log(expressionFunc(2, 2));

/* ----------------------------------------
?      CALLBACK FUNCTION
  ---------------------------------------- */

//* Callback functions are functions passed as arguments to another function.

// function mainFunc(name, callBackFunction) {
//   console.log(`My name is ${name}`);
//   callBackFunction();
// }
// function callBackFunction() {
//   console.log(`and I'm learning callback functions`);
// }
// mainFunc("Akshit", callBackFunction);

/* ----------------------------------------
?    SCOPES
---------------------------------------- */

//* Scopes determine the visibility and accessibility of variables.

// Global scope:
// let globalVariable = "I'm global";

// Local scope:
// function localScopeFunction() {
//   let localVariable = "I'm local";
//   console.log(globalVariable); // Accessible
//   console.log(localVariable); // Accessible
// }
// localScopeFunction();
// console.log(localVariable);  // Not accessible

/* ----------------------------------------
?    METHOD
---------------------------------------- */

//* Methods are functions that are part of an object, providing functionality or actions.

// const person = {
//   name: "Akshit",
//   Age: 24,
//   learningMethodFunc: function () {
//     return `Gaming, Dance, Editing, Coding`;
//   },
// };

// console.log(person);

/* ----------------------------------------
?   JSON (JavaScript Object Notation)
---------------------------------------- */

//* JSON is a lightweight data-interchange format.

// Example JSON string:
// {
//     "name": "Alice",
//     "age": 25,
//     "isStudent": true,
//     "courses": ["Math", "English"],
//     "address": {
//       "street": "123 Main St",
//       "city": "Anytown"
//     }
// }

/* ----------------------------------------
    DATE AND TIME
---------------------------------------- */

//* Date and Time objects in JavaScript.

// const date = new Date();
// const todayDaye = date.getDate();
// console.log(`Today's Date is : ${todayDaye}`);

/* ----------------------------------------
?    SET INTERVAL AND SET TIMEOUT
---------------------------------------- */

//* Functions for executing code at specified intervals.

// setInterval(() => {
//   console.log("Repeated code every 1000 milliseconds");
// }, 1000);

// setTimeout(() => {
//   console.log("Code executed after 2000 milliseconds");
// }, 2000);

/* ----------------------------------------
?    TEMPLATE LITERAL
---------------------------------------- */

//* Template literals are string literals allowing embedded expressions.

// let firstName = "Akshit";
// let lastName = "Negi";
// console.log(`The quick
// brown fox
// jumps over
// the lazy dog. ${firstName} ${lastName}`);

/* ----------------------------------------
?    ARROW FUNCTION
---------------------------------------- */

//* Arrow functions provide a concise syntax for writing function expressions.

// greet = (user) => {
//   return `Hello ${user}`;
// };
// console.log("Aksht");

// setTimeout(() => {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("Hey");
//     setTimeout(() => {
//       console.log("Namaste");
//       setTimeout(() => {
//         console.log("Hi");
//         setTimeout(() => {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

/* ----------------------------------------
?    ES6 ENHANCED OBJECT LITERALS
---------------------------------------- */

//* Enhanced object literals provide shorthand syntax for object creation.

// const createShape = (type, width, height) => {
//   return {
//     type,
//     calculateArea: () => {
//       if (type === "circle") {
//         const area = Math.PI * width * width;
//         return `The area of the ${type} is approximately ${area.toFixed(2)}`;
//       } else if (type === "rectangle") {
//         const area = width * height;
//         return `The area of the ${type} is ${area}`;
//       } else {
//         return `Unsupported shape type: ${type}`;
//       }
//     },
//   };
// };

//* Example usage:
// const rectangle = createShape("rectangle", 5, 10);
// console.log(rectangle.calculateArea()); // Output: The area of the rectangle is 50

// const circle = createShape("circle", 7);
// console.log(circle.calculateArea()); // Output: The area of the circle is approximately 153.94

/* ----------------------------------------
?    DEFAULT FUNCTION PARAMETERS
---------------------------------------- */

//* Default function parameters allow specifying default values for parameters.

// multiply = (a, b = 1) => {
//   return a * b;
// };
// console.log(multiply(4));

/* ----------------------------------------
?    SPREAD OPERATOR
---------------------------------------- */

//* The spread operator (...) in JavaScript is a versatile syntax for expanding iterable elements.

// Arrays:
// const arrayOne = [1, 2, 3];
// const arrayTwo = [4, 5, 6];
// const combineArray = [...arrayOne, ...arrayTwo];
// console.log(combineArray);

// Objects:
// const obj1 = { x: 1, y: 2, z: 3 };
// const obj2 = { f: 4, s: 5 };
// const combineObj = { ...obj1, ...obj2, n: 10, g: 12 };
// console.log(combineObj);

/* ----------------------------------------
?    REST OPERATOR
---------------------------------------- */

//* The rest operator (...) in JavaScript is used in function parameters or array destructuring.
// It allows representing an indefinite number of arguments or elements as an array.

// unlimited = (...para) => {
//   return console.log(para);
// };
// unlimited("hello", "world", "how's", "it", "going");

/* ----------------------------------------
?    DESTRUCTURING
---------------------------------------- */

//* Destructuring simplifies extracting values from arrays or properties from objects.

//** Array Destructuring:
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(a, b, c);

//** Object Destructuring:
// const person = { name: "Akshit", lastname: "Negi", work: "Student" };
// const { name, work } = person;
// console.log(name, work);

//** Function Parameter Destructuring:
// destFunction = ({ name, age, country }) => {
//   console.log(`Name: ${name}, age:${age}, country:${country}`);
// };
// let options = { name: "Akshit", age: 24, country: "India" };
// destFunction(options);

/* ----------------------------------------
?     Ternary Operator
---------------------------------------- */
//*Only operator in js that take three operand
// condition ? exprIfTrue : expreIfFlase
// Shorter way to write if and else

// const person = true;
// const ternanryOperator =
//   person === true ? "Buy Product" : "Please start working";
// console.log(ternanryOperator);

/* ----------------------------------------
?    For...in loop
---------------------------------------- */
//* itetrate through all the properties/index/etc in obj/arrays/etc
//*SYNTAX: for (let "varibaleName" in "object"){};

// const object = { a: 1, b: 2, c: 3 };
// for (let keys in object) {
// keys will store and objects
//   console.log(`${keys}: ${object[keys]}`); //passing objects one by one
// }

/* ----------------------------------------
?    For...of loop
---------------------------------------- */
//* easy way to loop over elements directly over the values of the elements, rather
//* than dealing with their indices or keys

// const array1 = ["a", "b", "c"];

// for (let index of array1) {
//   console.log(index);
// }
//---------------------------------------------------------------------------------------------
// TODO                             ARRAY FUNCTIONS
//---------------------------------------------------------------------------------------------
//! NOTE: REVISE CALL BACK FUNCTION AND ARROW FUNCTION FOR THIS PART
/* ----------------------------------------
?    forEach function 
---------------------------------------- */
//* advance array method to itterate through each element in an array
//* functions will run through for each element
//* modifies the original array

// const number = [1, 2, 3, 4, 5];
// let sum = 0;
// number.forEach(
//   (adder = (number) => {
//     sum = sum + number;
//     return sum;
//   })
// );
// console.log(sum);

/* ----------------------------------------
?    map() 
---------------------------------------- */
//* Iterate through each element in an array
//* works exactly like forEach() but it does not modify the original array instead
//* will create an new array

// let originalArray = [1, 2, 3, 4, 5];
// let moifiedArray = originalArray.map((index) => index * 2);
// console.log(
//   `This is original Array: ${originalArray}, This is modified array: ${moifiedArray}`
// );

// const randomArray = [2, 4, 1, 2, 45, 2];
// const muilitplication = randomArray.map((index) => index * 10);
// console.log(muilitplication);

/* ----------------------------------------
?    filter()
---------------------------------------- */
//* built in array method which allow us to create a new array containing elements that
//* passes a certain condition
//* It provides a clean and concise way to filter out elements

// const ages = [32, 33, 16, 40];
// const adults = ages.filter((age) => age > 18);
// console.log(adults);

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// console.log(words.filter((index) => index.length > 6));

/* ----------------------------------------
?    find()
---------------------------------------- */
//* array method that returns the first element
//* in the array that satisfies the provided testing function,
//* or undefined if no element is found
//* NOTE: Will only work once as soon as condition === true it will exit the function

// const ages = [3, 10, 18, 20, 25];
// console.log(ages.find((index) => index > 18));
//and return the true value

// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];

// const catergoryBooks = products.find((index) => index.category === "Books");
// console.log(catergoryBooks);

//--------------------------------END OF ARRAY FUNCTIONS-------------------------------------------------------------

/*---------------------------------------------------------------------------------------------
//TODO                                    ARRAY METHOD
---------------------------------------------------------------------------------------------*/
/* ----------------------------------------
?    every()
---------------------------------------- */
//Run condition for every element in an array and check the condition for every iteration
//all the elements should match the condition for function to be true (Boolean)

/* ----------------------------------------
?    some()
---------------------------------------- */
//* Run condition for every element in an array and check the condition for every iteration
//* One of item can be true for the function to return true (Boolean)

//* every() and some() code

// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];

// const everyMethod = products.every((index) => index.category === "Books");
// const someMethod = products.some((index) => index.category === "Books");

// console.log(
//   `every() Method o/p: ${everyMethod}\nsome() methods o/p: ${someMethod}`
// );

/* ----------------------------------------
?    reduce()
---------------------------------------- */
//* It takes all the array element and combine into one array
//* [p + c] p: previous value, c: current value

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((p, c) => {
  console.log(`Previous: ${p}`); //previous value 0
  console.log(`Current: ${c}`); //current value 1
  return p + c;
}, 0);
console.log(sum);
