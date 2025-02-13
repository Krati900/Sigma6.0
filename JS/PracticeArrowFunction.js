// 1. Write an arrow function that returns the square of a number 'n'.

// Method-01
// let square = n => {
//   return n*n;
// }

// Method-02
// let square = n => n * n;
// console.log(square(12));

// 2. Write a function that prints "Hello World" 5 times at intervals of 2s each.

// let id = setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("Clear Interval Ran");
// }, 10000);

// 3. Write an arrow function names arrayAverage that accepts an array of numbers and returns the average of those numbers. 

// const arrayAverage = (numbers) => {
//   arrAvg = 0;
//   for(let i=0; i<numbers.length; i++) {
//     arrAvg+=numbers[i];
//   }
//   arrAvg = Math.floor(arrAvg/numbers.length);
//   return arrAvg;
// }
// console.log(`Average of array numbers: ${arrayAverage([3, 4, 6, 7])}`);

// 4. Write an arrow function named isEven() that takes a single numbers as argument and returns if it is even or not. 

// let isEven = n => {
//   if(n % 2 == 0) {
//     console.log("Is even number.");
//   }
//   else {
//     console.log("Not an even number");
//   } 
// }
// isEven(99);

// 5. What is the output of this code .
// const object = {
//   message: "Hello World",
//   logMessage() {
//     console.log(this.message);
//   }
// };
// setTimeout(object.logMessage, 1000);

