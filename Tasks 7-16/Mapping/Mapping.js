// Task 1

// let a = [2,4,6,10];
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

let a = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
    ]

    let b = a.map(e => ageCheck(e));

    function ageCheck() {
        if (e.age <= 18){
            `${e.name} is under age!!`;
        }
        else {
            `${e.name} can go to the matrix`;
          }
        
    }
    console.log(b);