// 1. Check if all number in an array are multiple of 10 or not. 

// let arr = [30, 50, 70, 10, 230];
// let tenMultiples = arr.every((el) => el%10==0);
// console.log(tenMultiples);

// 2. Create a function to find out the minimum number in an array.
// let arr = [300,49807,8467, 90,657866];
// let minValue = arr.reduce((min, el) => {
//   if(min<el) {
//     return min;
//   }
//   else {
//     return el;
//   }
// });
// console.log(minValue);

// 3. Square and sum of the array elements using the arrow function and then find the average of the array.

// let arr = [2, 3, 4, 1, 5];
// let square = arr.map((el) => el * el) ;
// console.log(square);

// let sum = arr.reduce((a, b)=> a +b);
// console.log(`Sum of the array element is: ${sum}`);

// let avg = sum / arr.length;
// console.log(avg);

// 4. Create a new array using the map function whose each element is equal to the original element plus 5.

// let arr = [5, 8, 9, 2, 6, 0];
// let newArr = arr.map((el)=> el + 5);
// console.log(newArr);

// 5. Create a new array whose elements are in uppercase of words present in the original array.
// let arr = ["krati", "karishma", "bholu", "mohi", "cuty"];
// let newArr = arr.map((el) => el.toUpperCase());
// console.log(newArr);

// 6. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

// function doubleAndReturnArgs(arr, ...args) {
//   let doubledArgs = args.map(el => el * 2);

//   return [...arr, ...doubledArgs];
// }
// let result = doubleAndReturnArgs([1, 2, 3, 5, 7, 2, 1], 4, 5, 0, 13, 3);
// console.log(result); 

// 7. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// function mergeObjects(obj1, obj2) {
//   return school = {
//     schoolName: "DAVV",
//     state: "Madhya Pradesh",
//     city: "Indore",
//     ...obj1, 
//     ...obj2  
//   };
// }

// const student = {
//   stuName: "Krati",
//   stuAge: 26,
//   stuMarks: 83
// };

// const teacher = {
//   name: "Tanishk",
//   age: 32,
//   department: "IT" 
// };

// const mergedInfo = mergeObjects(student, teacher);

// console.log(mergedInfo);


