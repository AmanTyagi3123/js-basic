// Singleton -> Whenever you create using constructor singleton is obtained. If literal is used to declare object then no 
// singleton formed.


const mysym = Symbol("key1")

// Object literals

const JSuser = {
    name : "Aman",
    "full name" : "Aman Tyagi",
    [mysym] : "mykey1", // Important :- Way of including symbol in an object.
    age : 20,
    location : "Noida",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"] 
}

console.log(JSuser.email)
console.log(JSuser["email"]) // These are the two ways of accessing any data member of an object. Prefer second.
console.log(JSuser["full name"])
console.log(JSuser[mysym])

// Changing any value of an object ->
JSuser.email = "bcd@gmail.com"
// Object.freeze(JSuser) -> After this you cannot overwrite the value of JSuser object.
JSuser.email = "abc@gmail.com"


// Defining function in JS
JSuser.greeting = function(){
    console.log("Hello JS user")
}

JSuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greeting())
console.log(JSuser.greeting2())