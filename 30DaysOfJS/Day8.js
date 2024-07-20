/** const and let,
 * Arrow function,
 * Template literal ,
 * enhance object literal,
 *  Object and Array Destructuring
 * Default Parameter
 * Classes
 * Rest parameter
 * spread parameter
 * for/of Loop
 * Javascript Maps and Sets
 * Promises
 * Symbol
 * String Methods(startsWith(),endsWith(),includes())
 * Array Methods(Array.Form(),Array.keys(),Array.find(),Array.findIndex())
 * Object Entries(Object.Entries() method is used to convert a single valued array into an array object with a key-value pair as array items.)  */

// Activity 1: Template literal
// Task 1: template literals - create string includes person's name and age.
const personName = 'person_Name';
const personAge = 25;
console.log(`The person name is ${personName} and age is ${personAge}`);

// Task 2: multi-line string using template literals
const multilineString = `I'm
software enginare.`;
console.log(multilineString);

// Activity 2: Destructuring
// Task 3: Array Destructuring - Extract first and second elements from array
const arr = [1, 2, 3];
const [first, second, third] = arr;
console.log(first)
console.log(second)
console.log(third)

// Task 4: Object Destructuring - Extract title and author 
const book = {
    title: 'Book1',
    author: 'John Smith'
}
const { title, author } = book;
console.log(title);
console.log(author);

// Activity 3: Spread and Rest Operators
// Task 5: spread Operator - all elements of Array plus additional elements 
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

// Task 6: rest Operators - accept an arbitrary number of arguments, sum them and console.
const arr3 = [1, 2, 3];
const sum = (...arr3) => {
    // let sum1 = 0;
    let sum1 = arr3.reduce((acc, val) => acc + val);
    return sum1;
}

console.log(sum(arr3));

// Activity 4: Default Parameters
// Task 7: make function
const product = (product1, product2 = 1) => {
    return product1 * product2;
}

console.log(product(1, 2));
console.log(product(1));

// Activity 5: Enhanced Object literal
// Task 8: enhance object literal

// variable declaration 
var name1 = "Tike";
var color1 = "Black";
var age1 = 7;

// function declaration 
var bark = function () {
    console.log("Woof Woof!!");
}

var anotherDog = { name1, color1, age1, bark };
anotherDog.bark();
console.log(anotherDog);

// Task 9: create object with computed property names based on variable and log  the object
const name = 'waseem';
const color = 'Black';
const age = 7;
const key = { name, color, age };
console.log(key);
