// In Day 2 , we learn about  Operations and its types
// 1. Arithmetic Operations
// Task 1: Add two numbers and log the result
const num1 = 1;
const num2 = 2;
const result1 = num1 + num2;
console.log(result1);
// Task 2: Subtract two numbers and log the result
const num3 = 3;
const num4 = 4;
const result2 = num3 - num4;
console.log(result2);
// Task 3: Multiply two numbers and log the result
const num5 = 5;
const num6 = 6;
const result3 = num5 - num6;
console.log(result3);
// Task 4: Divide two numbers and log the result
const num7 = 1;
const num8 = 2;
const result4 = num1 / num2;
console.log(result4);
// Task 5: Find the remainder when one number is divided by another and log the result console
const num9 = 1;
const num10 = 2;
const result5 = num9 % num10;
console.log(result5);

// Activity 2: Assigment Operators
// Task 6
let sum = 1;
sum += 10;
console.log("Sum : " + sum);
// Task 7:
sum -= 10;
console.log("Sub: " + sum);


console.log("---------Task 03: Comparison Logical Operators Script---------");
const mountEverest = 29032; // Mount Everest height in feet
const k2 = 28251; // K2 height in feet

if (mountEverest > k2) {
    console.log(`Mount Everest's height is more than K2`);
} else if (mountEverest < k2) {
    console.log(`Mount Everest's height is less than K2`);
}

const objOne = { country: "Pakistan", language: "Urdu" };
const objTwo = { country: "Pakistan", language: "Urdu" };

if (objOne == objTwo) {
    console.log(`objOne & objTwo are equal`);
} else {
    console.log(`objects can not be same even if they have same values`);
}

const weekDays = 7;
const daysInWeek = "7";

if (weekDays == daysInWeek) {
    console.log(
        `== operator does loose checking and can not detect if the type is different`
    );
} else {
    console.log(`weekDays and daysInWeek are two different variables`);
}

if (weekDays === daysInWeek) {
    console.log(`weekDays & daysInWeek are equal in value and type`);
} else {
    console.log(`weekDays & daysInWeek are different in value and type`);
}

if (weekDays && daysInWeek === 7) {
    console.log(`both variable have same type`);
} else {
    console.log(`both variables are different`);
}

const aceCard = 1;
const heartCard = "King";

if (aceCard === 1 || heartCard === 1) {
    console.log(`aceCard or heartCard is = 1`);
} else {
    console.log(`Both have different value`);
}

if (aceCard !== heartCard) {
    console.log(`aceCard is a number card`);
} else {
    console.log(`aceCard is a faceCard`);
}

console.log("---------Task 04: Ternary Operator Script---------");

const age = 45;

const licence =
    age > 0 && age < 18
        ? `Not eligible for driving`
        : age >= 18 && age <= 45
            ? `eligible for driving`
            : age > 45 && age <= 70
                ? `You can not driver alone`
                : `ineligible age entered`;

console.log(licence);