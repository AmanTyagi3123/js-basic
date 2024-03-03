const user = {
    username: "Aman",
    price: "999",
    
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`); // This refers to current context. 
        console.log(this)  
    }
}

//user.welcomeMessage()
//user.username = "Sam"
//user.welcomeMessage() // Now we will get a welcome msg using sam as the user. This is because this allows func to work 
                      // according to context.

console.log(this) // In node, i.e, environment of codespace we will get empty as an answer.
// If we woulld have been in the browser it would have printed windows.
// Inside browser, global object is window.

// Also we can use this to access data members in objects but in functions this access is not possible.
// Here, we are going to use arrow function and we are going to observe that here this will return empty parenthesis.
// While in actual function we are going to observe that this returns a lot of global values and stuffs.

// Defining an arrow function -->
const takeName = () => {
    let username = "Aman"
    console.log(this.username)
    console.log(this)
}

// Declaring implicit arrow function -->
const add2 = (num1,num2) => num1 + num2 // Here function itself returns the addition of two numbers.
const add3 = (num1,num2,num3) => ( num1 + num2 + num3 ) // Here also the same task is being performed.