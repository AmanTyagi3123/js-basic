const name = "Aman-Tyagi";
const repocount = 2;

// console.log(name + repocount + " Value");

// The above method is not preferred to be used.

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // Called string interpolation.

const gameName = new String('God of War')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newstr = gameName.substring(0,4); // End index is exclusive.
console.log(newstr);

const anotherstr = gameName.slice(-8,4); // In slice you can give negative values but not in substring
// Although, if we pass a negative value to slice function, we recieve the substring starting from 0th index.

// Here, if we use trim then extra white spaces from left and right get removed.

// Similarly includes is used to find whether a keyword is present in the string or not.

// To seperate a string using certain seperator split is used.