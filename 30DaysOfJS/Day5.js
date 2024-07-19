// Functions

// Activity 1 : Function Declaration

// Task-1

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`;
    } else {
        return `${num} is Odd`;
    }
}

// Task-2

function Square(num) {
    return num * num;
}

// Activity 2 : Function Expression

// Task-3

let checkMax = function (num1, num2) {
    if (num1 > num2) {
        return `${num1} is maximum`;
    } else {
        return `${num2} is maximum`;
    }
};

// Task-4
let concatStr = function (str1, str2) {
    return `${str1} ${str2}`;
};

// Activity 3: Arrow Function

// Task-5

let sumOfTwoNum = (num1, num2) => {
    let sum = num1 + num2;
    return `${num1} + ${num2} = ${sum}  `;
};

// Task-6

let checkSpecificChar = (str, char) => {
    if (str.includes(char)) {
        return true;
    } else {
        return false;
    }
};

// Activity 4: Function Parameters and Default Values

// Task-7

let productOfNum = (num1, num2 = 7) => {
    let product = num1 * num2;
    return product;
};

// Task-8

let greet = (name, age = 23) => {
    return `Welcome! ${name} , ${age} year old coder.`;
};

// Activity 5: Higher-Order Functions

// Task-9

let myFunc = (func, num) => {
    for (let i = 0; i < num; i++) {
        func();
    }
};

let newFunc = () => {
    console.log("Hello");
};

// Task-10

let higherOrderFunc = (func1, func2, value) => {
    return func2(func1(value));
};

let func1 = (num) => {
    return num * 5;
};

let func2 = (num) => {
    return num * num;
};

// Results

// Task-1

console.log(isEvenOrOdd(6)); // Even

// Task-2

console.log(Square(8)); // 64

// Task-3

console.log(checkMax(34, 65)); // 65 is maximun

// Task-4

console.log(concatStr("Hello", "World")); // Hello World

// Task-5

console.log(sumOfTwoNum(45, 36)); // 81

// Task-6

console.log(checkSpecificChar("FooBar", "Foo")); // true

// Task-7

console.log(productOfNum(8)); // 56, 7 is default

// Task-8

console.log(greet("Divyanshu")); // Welcome! Divyanshu , 23 year old coder

// Task-9

myFunc(newFunc, 5); // print newfunc/ hello 5 times

// Task-10

console.log(higherOrderFunc(func1, func2, 10)); // 2500