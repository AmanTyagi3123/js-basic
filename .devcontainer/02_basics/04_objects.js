// Both of the below syntaxes will generate an empty object.
const fbUser = new Object() // Here, singleton is formed.
const ytUser = {}   // Here, no singleton is formed.

// Both of the below lines will generate same output -->
console.log(fbUser); 
console.log(ytUser);

// Creating different data members -->
fbUser.id = 223
fbUser.name = "Harsh"
fbUser.isLoggedIn = false

// console.log(fbUser)

const regularUser = {
    email : "hrs@gmail.com",
    fullName : {
        userfullname : { 
            firstName : "Aman",
            lastName : "Tyagi"
        }
    }
}

// console.log(regularUser.fullName);

const obj1 = {
    1 : 'a', 
    2 : 'b'
}

const obj2 = {
    3 : 'a',
    4 : 'b'
}

// For concatenating two objects you can use the same procedure as an array.

const obj3 = Object.assign({}, obj1, obj2) // The parenthesis is basically the target else if you don't give it then target is obj1.
console.log(obj3)

// Using spread -->
const obj4 = {...obj1, ...obj2}

// Using fbUser again to find out the keys method of Object

console.log(Object.keys(fbUser)) // Interesting part is that the answer is returned in the form of an array.
console.log(Object.values(fbUser))
console.log(Object.entries(fbUser)) // Here array of key value pairs is generated.

console.log(fbUser.hasOwnProperty('isLoggedIn')); // Returns whether a property is present inside an object.