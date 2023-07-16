// Task 1 & 7

// let a = [2,-4,6,10];
// let b = a.map(ele => ele * 2)
// console.log(b);

// Task 2

// let a = [2,4,6];
// let b = a.map(String);
// console.log(b);

// Task 3

// let a = ["john", "JACOB", "jinGleHeimer", "schmidt"];
// let b = a.map(e => `${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`);
// console.log(b);

// Task 4

// let a = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
//     ]

//     let b = a.map(e => e.name);
//     console.log(b);

// Task 5

// let a = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
//     ]

//     let b = a.map(e => ageCheck(e));

//     function ageCheck(e) {
//         if (e.age <= 18){
//             result = `${e.name} is under age!!`;
//         }
//         else {
//             result =`${e.name} can go to the matrix`;
//           }
//         return result;
//     }
//     console.log(b);

// Task 6

//     let a = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
//   ]

// let b = a.map(e => `<h1>${e.name}</h1><h2>${e.age}</h2>`);
// console.log(b);

// Task 8

// let a = [2,-4,6,10];
// let b = a.map(e => e * a.indexOf(e))
// console.log(b);

// Task 9

// let a = [{fname: 'Elie'}, {fname: 'Tim'}, {fname: 'Matt'}, {fname: 'Colt'}];
// let b = a.map(e => e.fname)
// console.log(b);

// Task 10

// let a = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"},
//          {first: 'Colt', last:"Steele"}];
// let b = a.map(e => `${e.first} ${e.last}`);
// console.log(b);

