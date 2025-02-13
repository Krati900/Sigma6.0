// 1. Create a function that prints a poem. 

// function poem() {
//   console.log("Jhony Jhony yes papa ,");
//   console.log("Eating sugar no papa !");
//   console.log("Telling lies ,");
//   console.log("No papa !");
//   console.log("Open your mouth hahahahahahahahhaha.");
// }

// poem();

// 2. Create a function to roll a dice & always display the value of the dice(1 to 6).

// let randomNo = Math.floor(Math.random() * 6) + 1;
// let dice = function() {
//   console.log(randomNo);
// }
// dice();

// 3. Create a function that gives us the average of 3 numbers.
// function avgThreeNo(a, b, c) {
//   let avg = parseInt((a+b+c)/3);
//   console.log(`Average of three no is: ${avg}`);
// }
// avgThreeNo(3, 5, 2);

// 4. Create a function that print the multiplication table of a number. 

// function mulTable(n) {
//   for(let i=1; i<=10; i++) {
//     console.log(n*i);
//   }
// }
// mulTable(9);

// 5. Create a function that returns the sum of numbers from 1 to n 
// let sumFunction = function(n) {
//   var sum = 0;
//   for(let i=1; i<=n; i++) {
//     sum = sum + i;
//   }
//   return sum; 
// }
// console.log(sumFunction(3));

// 6. Create a function that returns the concatenation of all strings in an array.
// function concatString(str) {
//   let arr = "";
//   for(let i=0; i<str.length; i++) {
//     arr+= str[i] += " ";
//   }
//   return arr;
// }
// console.log(concatString(["hello", "baby", "how", "are", "you", "!"]));

// 7. Write a JS function that returns array elements larger than a number. 

// function returnLargeArray(n) {
//   let arr = [5, 8, 6, 7, 9, 1, 0, 2, 7, 10, 30];
//   let newArr = [];
//   for(let i=0; i<arr.length; i++) {
//     if(arr[i] <= n ) {
//       continue;
//     }
//     else {
//       newArr.push(arr[i]);
//     }   
//   }
//   return newArr;
// }
// console.log(returnLargeArray(7));

// 8. Write a js program to extract unique characters from a string. 
// Example: str = "abcdabcdefggghijkaabb"
// ans: "abcdefghijk"

// function extractUniqueChar(str) {
//   let ext = "";
//   for(let i=0; i<str.length; i++) {
//     let currChar = str[i];
//     if(ext.indexOf(currChar) == -1) {
//       ext += currChar;
//     }
//   }
//   return ext;
// }
// console.log(extractUniqueChar("abcdabcdefggghijkaabb"));

// 9. Write a javaScript function that accepts a list of country names as input and returns the longest country name as output. 
// Example: country = ["Australia", "Germany", "United States of America"]
// Output: "United States of america"

// function longestCountryName(country) {
//   longCountry = "";
//   for(let i=0; i<country.length; i++) {
//     if(longCountry.length < country[i].length) {
//       longCountry = country[i];
//     }
//   }
//   return longCountry;
// }
// console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

// 10. Write a js program to count the numbers of vowels in a string argument.

// let str = "Hello krati, How are you, are you ohk...!";
// let count = 0;
// for(let i=0; i<str.length; i++) {
//   if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//     count ++;
//   }
// }
// console.log(`Total vowels in this string ${str} is ${count}`);

// 11. Write a js function to generate a random number within a range(start, end).
// function genRandomNo(start, end) {
//   let randomNo = Math.floor(Math.random() * (end - start)) + start;
//   return randomNo
// }
// console.log(genRandomNo(10, 20));
