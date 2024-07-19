// Activity 1 : For Loop

// Task-1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task-2

for (let i = 1; i <= 10; i++) {
    const table5 = 5 * i;
    console.log(`5 * ${i} = ${table5}`);
}

// Activity 2 : While Loop

// Task-3

let i = 1;
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
}
console.log(`Sum of Numbers = ${sum}`);

// Task-4

let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}

// Activity 3: Do... While Loop

// Task-5

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Task-6

let l = 5;
let factorialNum = 1;
do {
    factorialNum = factorialNum * l;
    l--;
} while (l >= 1);

console.log(factorialNum);
// Activity 4: Nested Loop

// Task-7

const rows = 5;
for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Activity 5: Loop control statement

// Task-8

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Task-9

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}