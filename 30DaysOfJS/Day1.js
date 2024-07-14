// In Day One We Learn about Variables and Datatypes In Javascript
// Activity 1:
// Task:1 - Declare a variable using var , assign it a number,and log the value to the console.
var var1 = 1;
console.log(var1);

// Task : 2 - Declare a variable using let , assign it a string and log the value to the console.
let let1 = 'Chaiaurcode';
console.log(let1);

// Activity 2:
// Task:3 - Declare a variable using const , assign it a boolean,and log the value to the console
const const1 = true;
console.log(const1);

// Activity 3:
// Task:4 - , Create variables of different data types (numbers,string,boolean,object,array) and log each variable type using the 'typeOf' Operator.
let num1 = 1;
let string1 = 'Chaiaurcode';
let boolean1 = true;
let object1 = { name: 'Chaiaurcode', age: 1 };
let array1 = [1, 2, 3, 4, 5];
console.log(typeof num1);
console.log(typeof string1);
console.log(typeof boolean1);
console.log(typeof object1);
console.log(typeof array1);

// Activity 4 : Reassigning Variables
// Task 5: Declare a variable using let,assign it an initial value,reassign a new value, and log both values to the console.
var variable1 = 1;
variable1 = 2;
console.log(variable1);

// Activity 5 : Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error
const con1 = 1;
con1 = 2;
console.log(con1); // TypeError: Assignment to constant variable.

