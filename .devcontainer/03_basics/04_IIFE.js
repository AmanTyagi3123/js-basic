// Immediately Invoked Function Expressions (IIFE)
(function connect(){ // Named IIFE
    console.log('DB CONNECTED');
})(); // Semicolon is to help IIFE know when to stop.
// Removing Pollution due to global variable is made possible by IIFE. The first parenthesis is for function declaration 
// and second parenthesis is for immediate execution.

( (name) => { // Unnamed IIFE
    console.log(`DB CONNECTED ${name}`);
})("Aman");