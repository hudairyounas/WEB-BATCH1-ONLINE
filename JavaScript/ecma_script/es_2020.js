// "use strict"
// a = 10
// console.log(a)

// let user = {
//     name: "ali",
//     num: 0,
// }
// //? 0, 1
// console.log(user.num ?? "No");
// let maxNum = Number.MAX_SAFE_INTEGER
// //? 9007199254740991
// // console.log(maxNum + 12)
// let bigInt = 90071992547409911254545n
// console.log(typeof bigInt)
// console.log(bigInt + 10n);

// let obj = {
//     name: "Hudair",
//     city: "FSD",
//     hello: function () {
//         console.log(this.name)
//     }
// }
// console.log(obj.hello())

// let a = "Muhammad";
// a += " Hudair";
// console.log(a)

// let text = "JS is easy. JS is powerful.";

// console.log(text.replace("JS", "JavaScript"));
// console.log(text);
// let amount = 1_000_000;
// //? 10,000 
// console.log(amount); // 1000000
// const user = { name: "Ali" };

// console.log(Object.hasOwn(user, "name")); // true
// console.log(user.hasOwnProperty("name")); // true

// async function name() {
// }
const nums = [1, 2, 3, 4, 5];

// console.log(nums.findLast(n => n % 2 === 0)); // 4
nums.findLast((val, index, arr) => {
    console.log(val, index, arr)
})
// console.log(nums.findLastIndex(n => n % 2 === 0)); // 3
