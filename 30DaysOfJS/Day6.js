// Arrays
// Activities / Tasks
// Activity 1: Array creation and Access
// Task 1 : create an array of numbers from 1 to 5 and log the array to the console.
const arr1 = [1, 2, 3, 4, 5];
// Task 2 : Access the first and last elements of arrays and log the array to console.
console.log(arr1.at(0));
console.log(arr1.at(arr1.length - 1));
// Activity 2: Array Methods (Basic)
// Task 3 : by push method to add new number to the end of the array and log the updated array.
arr1.push(6);
console.log(arr1);
// Task 4 : by push method to remove the last element from the array and log the updated array.
arr1.pop();
console.log(arr1);
// Task 5 : by shift method to remove the first element from the array and log the updated array.
arr1.shift();
console.log(arr1);
// Task 6 : by unshift method to add new number to the beginning of the array and log the updated array.
arr1.unshift(0);
console.log(arr1);
// Activity 3: Array Methods (Intermediate)
// Task 7 : by map method to create a new array where each number is doubled and log the updated array.
const arr2 = arr1.map((num) => num * 2);
console.log(arr2);
// Task 8 : by filter method to create a new array with only even numbers and log the updated array.
const arr3 = arr1.filter((num) => num % 2 === 0);
console.log(arr3);
// Task 9 : by reduce method to calculate sum of all numbers in the array and log the updated array.
const sum = arr1.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Activity 4 : Array Iteration
// Task 10 : by for Loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1.at(i));
}
// Task 11 : by foreach method to iterate over the array and log each element to the console.
arr1.forEach((num) => console.log(num));
// Activity 5: Multi-dimensional Arrays
// Task 12 : create a new multi-dimensional array and log the array to the console.
const multiDimArr = [[1, 2], [3, 4], [5, 6]];
console.log(multiDimArr);
// Task 13 : Access and log the specific element from the two-dimensional array.
console.log(multiDimArr.at(1).at(0));