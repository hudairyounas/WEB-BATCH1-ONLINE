// const a = "h";
// const car = ["Tesla", "Model X", 2020, 584545];
// const car2 = ["Tesla", "Model Y", 2025, 988545];
// console.log(car[0])


// const carArr = [
// },{
//     brand: "Tesla",
//     model: "Model Y",
//     year: 2025,
//     price: 988545,
// }
// ];


// const obj1 = {
//   brand: "Tesla",
//   model: "Model X",
//   year: 2020,
//   "price": 584545,
//   start: function () {
//     console.log("Car started");
//   },
//   arr: [1, 2, 3, 4, 5],
// };
// console.log(obj1["price"]);


// obj1.model = "Model S";
// console.log(obj1.model);

// const obj2 = obj1;
// console.log(obj1 == obj2);

// let obj2 = Object.assign({}, obj1);
// console.log(obj1 === obj2)

// const obj2 = {
//   brand: "Tesla",
//   model: "Model X",
//   year: 2020,
//   price: 584545,
//   start: function () {
//     console.log("Car started");
//   },
//   arr: [1, 2, 3, 4, 5],
// }; 


//? scopes in js
//* 1. Global Scope
//* 2. Function Scope // local scope
//* 3. Block Scope

// let a = 10; // global scope

// {
//     let b = 20; // block scope




// }

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let c = 40; // function scope
}

function test() {
  var b = 30;
  return b
}

console.log(test())