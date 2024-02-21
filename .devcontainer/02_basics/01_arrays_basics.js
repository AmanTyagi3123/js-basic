const myArr = [0, 1, 2, 3, 4, 5, true, "Aman"]
// Arrays can be of mixed data types in JS. Moreover, the arrays in JS are resizable.

console.log(myArr[0]); // Accesses element using indexing.

// Arrays whenever copied are shallow copied.{Changes made do change in original array.}

// Another way of declaring an array :- 
const arr2 = new Array(1, 2, 3, 4)
console.log(arr2[0]);

// Array methods

myArr.push(6)   // Inserts an element.
console.log(myArr)

// If we use unshift method then we insert the element in the beginning. It is however, not an optimized way.
// Similarly shift method is used to remove first element of the array.

console.log(myArr.includes(8)); // Since, 8 is not present therefore false is returned.
console.log(myArr.indexOf("Aman")) // Returns index of the present element or if element not present -1 returned.

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr); // newArr is of string data type.

// slice is used to return section of an array.

// Splice is going to manipulate the actual array and now we are going to have the array as not having the elements
// which are taken as subpart. Also, the last range is also included.