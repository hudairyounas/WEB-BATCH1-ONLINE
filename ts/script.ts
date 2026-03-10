//? tsc --init => 1
// function add(a:number, b:number):string {
//     return a + b;
// }

// console.log(add(12, 2));

// for (let i:number = 0; i < 10; i++) {
//     console.log(i)
// }

//? html, css, js



type User = {
    name: string,
    age: number,
}

type User2 = {
    city: string
}

let obj:User & User2  = {
    name:"ali",
    age: 10,
    city: "asjhdajhs"
}

console.log(obj)


let a:number = 10;
console.log(a)