//Basics of functions are same as they are used in any other language -->

// Function with nothing being returned -->
function greet(){
    console.log("Hello! Today we are learning functions in JS") // This function is of void return data type. 
}

// Function with something being returned plus having certain parameters.
function add(a,b){
    return a+b;
}

// Now, in real life applications, there might be some case when the number of inputs by user is not specified.

// For eg :- If user is shopping and is creating a shopping cart then we don't know how many products will he pick.

// In this case, we'll use REST operator which is having same syntax as we used in SPREAD operator
//                         ----                                                    ------

// The only difference lies in the fact that both of them are used for different purposes.

// Creating a function which sums up all the prices of the goods selected by the consumer.

function calculateCartPrice(...args){
    return args
}

// How to use object as a parameter in the function.

const user = {
    username : "Aman",
    age : 20
}

function handleObj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.age}`)
}

handleObj(user)

// Passing arrays -->

const myarr = [200, 400, 100, 600]

function return2ndvalue(getarray){
    return getarray[1];
}

console.log(return2ndvalue(myarr))