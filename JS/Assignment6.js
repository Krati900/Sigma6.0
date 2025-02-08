// 1. Write a JS program to delete all the occurrences of element 'num' in a given array.
// Example: if arr = [1, 2, 3, 4, 5, 6, 2,3] & num = 2
// Result will be arr = [1, 3, 4, 5, 6, 3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(i=0; i<arr.length; i++) {
//   if(arr[i] == 2) {
//     continue;
//   }
//   console.log(arr[i]);
// }

// 2. Write a JS program to find the no of digits in a number. 
// Example: if number = 287152, count = 6

// let n = 287150;
// // number = number.length;
// // // console.log(typeof number); 
// let count = 0 ;
// while(n>0) {
//   n = parseInt(n / 10);
//   count++; 
// }
// console.log(count); 


// 3. Write a JS program to find the sum of digit in a number.
// Example: if number = 287152, sum = 25

// let number = 287152;
// let sum = 0; 
// let digit;
// while (number > 0){
//   digit = number % 10;
//   sum = sum + digit; 
//   number = parseInt(number / 10);
// }
// console.log(sum);


// 4. Print the factorial of a number n. 
// Example: 7! , 5! etc;

// let n = 5;
// let mul = 1;
// for(let i=n; i>0; i--) {
//   mul = i * mul; 
// }
// console.log(`Factorial of a given number ${n} is ${mul}`);

// 5. Find the largest number in an array with only positive number.

// let arr = [56, 78, 43, 233,1];
// let max = 0;
// for (let i=0; i<arr.length; i++) {
//   if(max < arr[i]) {
//     max = arr[i]; 
//   } 
// }
// console.log(max);

