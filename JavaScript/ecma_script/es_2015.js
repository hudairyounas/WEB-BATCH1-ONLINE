//* ==================
//? Ecma Script 2015
//* ==================

//* =========================================
//*  Object Properties
//* =========================================
// const name = "Hudair";
// const skill = "JavaScript";

//? traditional/normal way
// const obj1 = { name: name, skill: skill };
// console.log(obj1);

//? Using shorthand notation for object property

// Instead of specifying name: name and skill: skill, you can simply use name and skill directly within the object literal.
//* ==========================================
//?  Destructuring
//* =========================================
//? Destructuring in JavaScript is a way to extract values from arrays or objects and assign them to variables in a concise and readable manner.

//* Destructuring Arrays:
//? Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

//? 1: Extracting specific elements:
// const numbers = [10, 20, 30];
// const [, , third] = numbers;
// console.log(third);