// forEach loop doesn't return anything.

// If we want the values to be returned we will use filter.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums);

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* 
Using map for returning values.
const b = a.map( (num) => num+10 )

console.log(b);
*/

/*

Chaining -->
const newNums = mynumbers
                .map( (num) => num * 10 ) --> Here, we are multiplying initial values of array by 10.
                .map( (num) => num + 1 ) --> Now, we are incrementing already multiplied values by 1.
                .filter( (num) => num >= 40 ) --> Here, we are using those incremented values.

*/

/*

Using Array.reduce() is just like using concept of prefix sum ->
const array1 = [1,2,3,4];

const initValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentval) => accumulator + currentval, initValue
    --> Here, initially accumulator acquires the value of initValue then it takes its previous value.
);

*/