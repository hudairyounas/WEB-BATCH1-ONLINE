//? var
//? let
//? const

// let a = 20;
// let a = 30;
// console.log(a);

// var students = 1000;
// var students = 6000;

// const b = 20;
// const b = 40;
// console.log(b);

// let studentsName = undefined;
// console.log(typeof studentsName)

// console.log("1" - 5);
// console.log(typeof 78128272718782372376253652635653623n);

// let a = "1297987";
// console.log(parseInt(a));
// let a = 10;
// if (a > 40) {
//     console.log("hello");
// } else if (a < 30)  {
//     console.log("hello 2");
// }else if (a < 30)  {
//     console.log("hello 2");
// }else if (a < 30)  {
//     console.log("hello 2");
// }else if (a < 30)  {
//     console.log("hello 2");
// } else {

// }

// let num = 30;
// if (num % 2 == 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }

// console.log("12" === 12);
//? 15
//? -4

// let day = "Tuesday"
// switch (day) {
//     case "Monday":
//         console.log("today is Monday")
//     case "Tuesday":
//         console.log("today is Tuesday")
//     case "Wednesday":
//         console.log("today is Wednesday")

//     default:
//         console.log("no condition is match")
//         break;
// }

//? for loop
//? while loop
//? do while loop

// for (let a = 13; a > 10; a++) {
//     console.log(a, "Hello")
// }

// let w = 0;
// while (w < 10) {
//     console.log(w, "hello");
//     console.log(w, "hello");
//     console.log(w, "hello");
//     console.log(w, "hello");
//     console.log(w, "hello");
//     console.log(w, "hello");
//     console.log(w, "hello");
//     console.log(w, "hello");
//     w++;
// }

// let a = 10;
// while (a < 4) {
//     console.log("hello");
//     a++;
// }

// let n = 7;
// do {
//     console.log(n, "hello");
//     n++
// } while (n < 3);
// i = 1
// j <= 1

// for (let i = 2; i<= 5; i++) {
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//         result += "*";
//     }
//     console.log(result);
// }

//? a = 0 a++
//? a = a + 1

//? for in
//? for of

// add(1, 3)

// function add(a, b) {
//    return a + b;
// }

// console.log(add(1, 3));

// (function (a, b) {
//     console.log("a + b = ", a + b);
// })(1, 2);

// (function add() {

// })()

// console.log(add(5, 7));
// console.log(add(43, 8));

// let str = "hello";

// console.log(str.length)

// function reverseStr(str) {
//     let reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i]
//     }

//     return reverse
// }

// console.log(reverseStr(str));

// function calculate(operator, val1, val2) {
//   if (operator === "+") {
//     return val1 + val2;
//   } else if (operator === "-") {
//     return val1 - val2;
//   } else if (operator === "*") {
//     return val1 * val2;
//   } else if (operator === "/") {
//     return val1 / val2;
//   }
// }

// let b = 10;
// let a =  `hajshahja ${b}`;

// console.log(calculate("-", 1,4))

// function add(a = 12, b= 34) {
//     return a + b;
// }

// console.log(add());

// for (let i = 20; i > 10; i++) {
//   console.log(i);
// }

// function add(a, b) {
//     return a + b;
// }

// const add = () => {
//   console.log("hello");
// }

// add();

// let arr = [1, 2, 3, "hello"];
// console.log(arr[4]);

// let arr = "hello".split("").reverse().join("");
// console.log(arr);

// console.log(arr[0]);

// let arr2 = new Array("apple", "orange");
// let arr2 = ["hudair", "a", "ali"];

// function arrPrint(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// arrPrint(arr2)
// let arr2 = ["hudair", "a", "ali"];
// arr2.forEach((val, index,arr) => {
//     console.log(arr)
// })

// for (const element of object) {

// }
// for (let item in arr) {
//   console.log(item);
// }

// let arr = ["apple", "orange", "banana", "grapes"];
// let arr2 = [1, 32, 43, 65, 78, 13];

// let a = arr2.forEach((val) => {
//     return val
// });

// console.log(a);

// let result = arr.map((item,index, arr) => {
//     return item
// })
// console.log(result)

// let arr = [1, 2, 4][0,6];
// console.log(arr)

// let arr2 = [1, [3, 54]];
// console.log(arr2[1[0]])

// const product = [
//   { name: "RAM", price: 300 },
//   { name: "Hard Disk", price: 1200 },
//   { name: "Graphic Card", price: 4000 },
//   { name: "Mother Board", price: 3000 },
// ];
//? array.splice(startIndex, deleteCount, item1, item2, ...);

// const arr = ["Rolls-Royce", "Tesla", "BMW", "Porsche"];

// console.log("return value = ", arr.splice(2,1))

// console.log("splice arr = ", arr);

// const arr = [1, 2, 3, 4, 5];

// let newArr = arr.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(newArr)
// console.log(arr)

// const products = [
//   { name: "RAM", price: 300 },
//   { name: "Hard Disk", price: 1200 },
//   { name: "Graphic Card", price: 4000 },
//   { name: "Mother Board", price: 3000 },
// ];

// let newProducts = products.filter((val) => {
//   if (val.price >= 500) {
//     return val
//   }
// })

// console.log(newProducts);
// console.log(products)

// let arr = [1, 2, 4][0,3,8,0];
// console.log(arr)

//* Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

//? map: Used when you want to create a new array based on the transformation of each element in the original array.

//* lastIndexOf Method
//? lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 6, 8, 9];
// // console.log("indexOf", numbers.indexOf(6));
// console.log("lastIndexOf", numbers.lastIndexOf(3));

//* find Method
//? find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.
//* syntax
// ? array.find(() => {})
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = numbers.find((val, index, arr) => {
//   return val > 4;
// });
// console.log(result);
// console.log(numbers)

//* findIndex Method
//? findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.findIndex((elem) => {
//   return elem > 3
// })
// console.log(result);
// console.log(numbers)
//* filter method
//! Ex. le'ts say user wants to delete value 6.
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let value = 6;

// let result = numbers.filter((elem, index)=> {
//   return elem !== value;
// })
// // console.log(first)

// console.log(result)
//* How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.
// let strArr = ["a", "a", "hudair", "ali"];
// console.log(strArr.sort());

// let numbers = [1, 4, 6, 7, 3, 8];
// let result = numbers.sort((a, b) => b - a);
// console.log(result)
//? compare callback function
// syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
//? if(a > b) return 1  => switch the order
//? if(b > a) return -1  => keep the order

//* Reduce method
//?  The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// const productPrice = [100, 200, 300, 400, 5005];

// let result =productPrice.reduce((accum, curElem, index, arr) => {
//   return accum + curElem
// }, 0)

// //? 0 + 100
// //? 100 + 200
// //
// console.log(result)

// let arr = ["apple", "orange", "grapes"];
// let result = arr.map((elem) => {
//   return elem.toUpperCase()
// })

// console.log(result)

// let numbers = [23, 47, 68, 34];

// let result = numbers.map((elem) => {
//   if (elem % 2 === 0) {
//     return elem * elem;
//   }
// }).filter((elem) => {
//   return elem !== undefined;
// })
// console.log(result);

// const strArr = ["ahmad", "hudair", "ali"];

// const result = strArr.map((elem) => {
//   return "Mr. " + elem
// })
// console.log(result);

// let str = "apple";
// let result = str.slice(2, 4);
// console.log(result)
// let arr = str.split("").reverse().join("");
// console.log(arr)

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

//* Code	   Result	    Description
//* \'	    '	        Single quote
//* \"	    "	        Double quote
//* \\	    \	        Backslash
// let str = "pakistan\thello"
// console.log(str)

//? 1: String Search Methods
//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// syntax
// indexOf(searchString)
// indexOf(searchString, position)
// let str1 = "I am "
// console.log(str1.includes(/I/));
// let result = str.split("").map((elem, index)=>{
//   return `${elem} - ${index}`
// });
// console.log(result)


//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)
// let str = "pakistanp"
// console.log(str.indexOf("p"))

//? c: includes(): Returns true if the string contains the specified value, and false otherwise.
// let str = "I am learning JavaScript JavaScript";
// console.log(str.includes("i"))

//? d:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.
// let str = "I am I learning JavaScript JavaScript";
// console.log(str.search(/I/g))

//? e: match() : Returns an array of the matched values or null if no match is found.
// let str = "I am learning JavaScript JavaScript";
// console.log(str.match(/JavaScript/g))
// console.log(str.match(/I/))


//todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag

//? f: matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "I am learning JavaScript JavaScript";
// let matchResult = text.matchAll("JavaScript");
// // console.log(...matchResult)
// for (const item of matchResult) {
//   console.log(item.input)
// }

//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end

//? g: startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let str = "I am learning JavaScript JavaScript";
// console.log(str.startsWith("am"));

//? h: endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
// let str = "I am learning JavaScript JavaScript";
// console.log(str.endsWith("javaScript"))

//? 2: Extracting String Parts
//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end);
// let str = "I am learning JavaScript JavaScript";
// console.log(str.slice(-2));


//? a: substring: Extracts a portion of the string based on starting and ending indices.
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)
// let str = "I am learning JavaScript JavaScript";
// console.log(str.substring(-6))

//? charAT() : The charAt() method returns the character at a specified index (position) in a string
// let str = "I am learning JavaScript JavaScript";
// console.log(str.charAt(1));

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let str = "z";
// console.log(str.charCodeAt(0));

//* A-Z => 65, 90
//* a-z => 97, 122

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// console.log(str.at(0));
// let str = "I am learning JavaScript JavaScript";

//? 3: Replacing String Content
//? replace() : The replace method is used to replace a specified value with another value.
// let str = "I am learning JavaScript JavaScript";
// console.log(str.replace(/i/i, "A"))


//* Other Useful Methods:
//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase())
// const str = "JAVASCRIPT";
// console.log(str.toLowerCase())
//? trim: Removes whitespace from both ends of the string.
// const str = "    a    ";
// let result = str.trim();
// console.log(result.length)
// console.log(str.length);
// console.log(str.trim());
// console.log(str)


//? split: Splits the string into an array of substrings based on a specified delimiter.


//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions.
//* Math works with the Number type. It doesn't work with BigInt.

//? 1: Constants:
//* - Math.PI: Represents the mathematical constant Pi (π).
// const piValue = Math.PI;
// console.log(piValue);



//? 2. Basic Operations:

//? Math.abs(): The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0. It will be always positive

// console.log(Math.abs(-21212));

//? Math.round(x): Rounds a number to the nearest integer.
// const roundedValue = Math.round(3.7);
// console.log(roundedValue)



//? Math.ceil(x): Returns the value of x rounded up to its nearest integer:
// const ceilValue = Math.ceil(3.7);
// console.log(ceilValue)

//? Math.floor(x): Returns the value of x rounded down to its nearest integer.
// const floorValue = Math.floor(3.7);
// console.log(floorValue)

//? Math.trunc(x): Returns the integer part of x:
// const floorValue = Math.floor(-3.7);
// const truncValue = Math.trunc(-3.7);
// console.log(truncValue);
// console.log(floorValue);

//todo Math.trunc() were added to JavaScript 2015 - ES6.
// const truncValue = Math.trunc(-3.7);
// const floorValue = Math.floor(-3.1);

//* 3. Exponential and Logarithmic Functions:

//? Math.pow(x, y): Returns the value of x to the power of y.
// console.log(Math.pow(2, 3));

//? Math.sqrt(): Math.sqrt(x) returns the square root of x:
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot)

//? Math.log(x) returns the natural logarithm of x.
// let logResult = Math.log(1);
// console.log(logResult);
// let logResult = Math.log(2);

//? Math.log2(x) returns the base 2 logarithm of x.
// let logResult = Math.log2(8);
// console.log(logResult)

//! Interview Question
//* Generate Random number
// let rand = parseInt(Math.random() * 50);
// console.log(rand);


