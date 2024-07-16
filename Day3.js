// https://www.geeksforgeeks.org/how-to-take-input-in-javascript-in-vs-code-terminal/#using-processstdin
// DAY 3 : Control statement
// Activity 1: If-Else statement

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Task 1: Check if a number is positive or negative and zero  and log the result console.
rl.question('Enter Any Number: ', (input) => {
    if (input > 0) {
        console.log("The number is positive");
    } else if (input < 0) {
        console.log("The number is negative");
    } else {
        console.log("The number is zero");
    }

    // Task 2 : check if a person is eligible to vote and log the result console.
    rl.question('Enter Your Age: ', (age) => {
        if (age >= 18) {
            console.log("You are eligible to vote");
        } else {
            console.log("You are not eligible to vote");
        }

        rl.close();
    });

});

// Activity 2: Nested If_Else Statement
// Task 3: check largest number from any three numbers
rl.question('Enter 1st number :', (input1) => {
    rl.question('Enter 2nd number :', (input2) => {
        rl.question('Enter 3rd number :', (input3) => {
            if (input1 > input2) {
                if (input1 > input3) {
                    console.log(`${input1} is the largest number`);
                } else {
                    console.log(`${input3} is the largest number`);
                }
            } else {
                if (input2 > input3) {
                    console.log(`${input2} is the largest number`);
                } else {
                    console.log(`${input3} is the largest number`);
                }
            }
            rl.close();
        });
    });
})

// Switch case
// Task 4: Check the day of the week and log the result console.
rl.question('Enter the day number :', (day) => {
    switch (day) {
        case '1':
            console.log("Sunday");
            break;
        case '2':
            console.log("Monday");
            break;
        case '3':
            console.log("Tuesday");
            break;
        case '4':
            console.log("Wednesday");
            break;
        case '5':
            console.log("Thursday");
            break;
        case '6':
            console.log("Friday");
            break;
        case '7':
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Input");
    }
    rl.close();
});

// Take 5 : uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'E', 'F') to a student based on their marks.
rl.question('Enter the marks :', (marks) => {
    switch (true) {
        case (marks >= 90):
            console.log("Grade A");
            break;
        case (marks >= 80):
            console.log("Grade B");
            break;
        case (marks >= 70):
            console.log("Grade C");
            break;
        case (marks >= 60):
            console.log("Grade D");
            break;
        case (marks >= 50):
            console.log("Grade E");
            break;
        default:
            console.log("Grade F");
    }
    rl.close();
});

// Activity 4 : conditional (Ternary) Operator
// Task 6 : check input number is even or odd , log the result in console
rl.question('Enter number :', (number) => {
    number % 2 === 0 ? console.log("Even") : console.log("Odd number");
    rl.close();
})

// Activit 7 : Combining conditions
// Task 7 : check year is leap year , log the result in console
rl.question("Enter Year: ", (input) => {
    const year = parseInt(input, 10);
    if (isNaN(year)) {
        console.log('Please enter a valid number.');
    } else {
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        console.log(`This ${year} is ${isLeap ? '' : 'not '}a leap year.`);
    }
    rl.close();
});