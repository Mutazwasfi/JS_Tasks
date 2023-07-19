'use strict'
// task number 3
let Foods = ['Pizza', 'Burgers', 'Pancakes', 'Pasta', 'Fried Chicken']
let Sports = ['Football', 'Basketball', 'Swimming', 'Tennis']
let Movies = ['The Godfather', 'Inception', 'Fight Club', 'The Matrix']
// console.log('Foods:',Foods)
// console.log('Sports:',Sports)
// console.log('Movies:',Movies)

//task number 4
function firstOfArray(ar) {
  return ar[0]
}

//task number 5
function lastOfArray(ar) {
  return ar[-1]
}

//task number 6
let ar = [0, 5, 7, 9]
ar.shift()
ar.shift()
ar.shift()
ar.push(10)
ar.unshift(8)
ar.unshift(6)
ar.unshift(4)
ar.unshift(3)
ar.unshift(1)
// console.log(ar)

//task number 7
let arr = [5, 9, -7, 3.5]
// console.log(arr.unshift())
// console.log(arr.shift())
// console.log(arr.pop())
// console.log(arr.push())

//task number 8
function middleOfArray(arr) {
  let mid = arr.length / 2
}

//task number 9 
let animals = []
animals[0] = 'cat';
animals[1] = 'ele';
animals[2] = 'bird';
// console.log('first array',animals);
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.splice(2, 1)
// console.log('second array',animals);
let nums = []
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 8
nums[4] = 9
// console.log('first array nums' , nums)
nums[0] = 5
nums[1] = -22
nums[2] = 3.5
nums[3] = 44
nums[4] = 98
nums[5] = 44
// console.log('second array nums' , nums)

//task numbre 10
function indexOfArray(ar, n) {
  return ar[n];
}

//task number 11
function arrayExceptLast(ar) {
  ar.splice(-1, 1)
  return ar
}

//task number 12
function addToEnd(ar, newNum) {
  ar.push(newNum)
  return ar
}

//task number 13
function sumArrayForLoop(ar) {
  let sum = 0
  for (let i in ar)
    sum += ar[i]
  return sum
}
function sumArrayWhileLoop(ar) {
  let sum = 0, index = -1;
  while (++index < ar.length - 1) {
    sum += ar[index]
  }
  return sum
}
function sumArrayFunction(ar) {
  return ar.reduce((a, b) => a + b)
}

//task number 14
function minInArrayFunction(ar) {
  return Math.min(...ar)
}
function minInArrayForLoop(ar) {
  let min = ar[0]
  for (let i in ar)
    if (ar[i] < min)
      min = ar[i]
  return min
}
function minInArrayWhileLoop(ar) {
  let min = ar[0], index = -1
  while (++index < ar.length)
    if (ar[index] < min)
      min = ar[index]
  return min
}

//task number 15
function removeFromArrayForLoop(ar, n) {
  for (let i in ar)
    if (ar[i] === n)
      ar.splice(i, 1)
  return ar
}
function removeFromArrayWhileLoop(ar, n) {
  let index = -1
  while (++index < ar.length)
    if (ar[index] === n)
      ar.splice(index, 1)
  return ar
}
function removeFromArrayFunction(ar, n) {
  ar = ar.filter(e => e != n)
  return ar
}

//task numebr 16
function oddArrayFunction(ar) {
  ar = ar.filter(e => e % 2 != 0)
  return ar
}
function oddArrayForLoop(ar) {
  let odds = []
  for (let i in ar)
    if (ar[i] % 2 !== 0)
      odds.push(ar[i])
  return odds
}
function oddArrayWhileLoop(ar) {
  let i = -1
  let odds = []
  while (++i < ar.length)
    if (ar[i] % 2 !== 0)
      odds.push(ar[i])
  return odds
}

//task number 17
function aveArrayFunction(ar) {
  return ar.reduce((a, b) => a + b) / ar.length
}
function aveArrayForLoop(ar) {
  let sum = 0;
  for (let i in ar)
    sum += ar[i]
  //or 
  sum = sumArrayFunction(ar)
  return sum / ar.length
}
function aveArrayWhileLoop(ar) {
  let sum = 0;
  let i = -1
  while (++i < ar.length)
    sum += ar[i]
  //or 
  sum = sumArrayFunction(ar)
  return sum / ar.length
}

//task number 18
function shorterInArrayFunction(str) {
  return str[str.map(e => e.length).indexOf(Math.min(...(str.map(e => e.length))))]
}
function shorterInArrayFunction2(str) {
  return str.reduce((a, b) => a.length < b.length ? a : b, str[0])
}
function shorterInArrayForLoop(str) {
  let shortest = str[0];
  for (let i in str)
    if (str[i].length < shortest.length)
      shortest = str[i]
  return shortest
}
function shorterInArrayWhileLoop(str) {
  let shortest = str[0];
  let i = -1
  while (++i < str.length)
    if (str[i].length < shortest.length)
      shortest = str[i]
  return shortest
}

//task number 19
function repeatCharFunction(str, char) {
  return str.split('').filter(e => e == char).length
}
function repeatCharForLoop(str, char) {
  let count = 0;
  for (let i in str)
    if (str[i] === char)
      count++;
  return count;
}
function repeatCharWhileLoop(str, char) {
  let count = 0;
  let i = -1
  while (++i < str.length)
    if (str[i] === char)
      count++;
  return count;
}

//task number 20
function evenIndexOddLengthForLoop(ar) {
  let newAr = []
  for (i in ar)
    if (ar[i].length % 2 != 0 && i % 2 == 0)
      newAr.push(str[i])
  return newAr
}
function evenIndexOddLengthWhileLoop(ar) {
  let newAr = []
  let i = -1
  while (++i < ar.length)
    if (ar[i].length % 2 != 0 && i % 2 == 0)
      newAr.push(str[i])
  return newAr
}
function evenIndexOddLengthFunction(ar) {
  return arr.filter((str, i) => str.length % 2 != 0 && i % 2 == 0 && i != 0)
}

//task number 21
function powerElementIndexFunction(ar) {
  return ar.map((e, i) => e ** i)
}
function powerElementIndexForLoop(ar) {
  for (let i in ar)
    ar[i] = ar[i] ** i
  return ar
}
function powerElementIndexWhileLoop(ar) {
  let i = -1
  while (++i < ar.length)
    ar[i] = ar[i] ** i
  return ar
}

//task number 22
function evenNumberEvenIndexFunction(ar) {
  return ar.filter((e, i) => e % 2 == 0 && i % 2 == 0 && i != 0)
}
function evenNumberEvenIndexForLoop(ar) {
  let newAr = []
  for (let i in ar)
    if (ar[i] % 2 == 0 && i % 2 == 0 && i != 0)
      newAr.push(ar[i])
  return newAr
}
function evenNumberEvenIndexWhileLoop(ar) {
  let newAr = []
  let i = -1
  while (++i < ar.length)
    if (ar[i] % 2 == 0 && i % 2 == 0 && i != 0)
      newAr.push(ar[i])
  return newAr
}
