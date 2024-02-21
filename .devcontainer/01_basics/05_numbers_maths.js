// The most used function in maths is random

console.log(Math.random())  // Generates random number between 0 and 1.
console.log((Math.random()*10) + 1);    // Generates a random number b/w 1 and 11.
console.log(Math.floor(Math.random()*10) + 1);  // This is to generate a random integer b/w 1 and 10(both inclusive).

const mn = 10
const mx = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))