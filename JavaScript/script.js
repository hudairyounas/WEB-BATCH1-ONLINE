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