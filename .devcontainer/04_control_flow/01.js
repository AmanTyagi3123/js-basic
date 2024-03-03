// const isLoggedIn = true

// if(isLoggedIn){
//      console.log("Logged in!")
// }

// Below statement is called implicit if statement. This executes only for one liner statement.
// if(balance > 500) console.log("Greater than 500!");

// Switch case -->
// const month = 3

// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Febuary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Default");
// }

/*
    Falsy values
    ************
    false, 0, -0, BigInt (0n), "", null, undefined NaN 

    All other values are called truthy values.

    Truthy Values
    *************
    "0", "false", " ", [], {}, function(){}

    Checking whether object is empty or not -->
    if(Object.keys(emptyObj).length === 0){
        console.log("Object is empty!");
    }

*/

/*

                Nullish Coalescing operator (??): null, undefined
                *************************************************

let val1;
val1 = 5 ?? 10 --> Always first value is assigned in this case.
val1 = null ?? 10 --> If any value is assigned then take it else use NULL.

*/

/*

Ternary operator

condition ? True : False

const IceTeaPrice = 100
IceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less Than 80").

*/