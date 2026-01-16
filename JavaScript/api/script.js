// function function2() {
//     console.log("Function 2");
// }

// function function1() {
//     console.log("Function 1");
//     function2();
//     console.log("Func1 ends");
// }

// function1();




// function function2() {
//     setTimeout(() => {
//         console.log("Function 2");
//     }, 1500);
// }

// function function1() {
//     console.log("Function 1");
//     function2();
//     console.log("Func1 ends");
// }

// function1();

//? promise in js

// const pro = new Promise((resolve, reject) => {
//   let result = false;
//   if (result) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// pro
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });


// function orderFood() {
//   return new Promise((resolve, reject) => {
//     let foodReady = false;

//     setTimeout(() => {
//       if (foodReady) {
//         resolve("🍕 Food is ready");
//       } else {
//         reject("❌ Order canceled");
//       }
//     }, 2000);
//   });
// }

// orderFood()
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));
