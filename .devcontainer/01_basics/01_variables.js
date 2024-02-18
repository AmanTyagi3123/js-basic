const account_Id = 144553
let account_Email = "abc@gmail.com"
var acc_pass = "12345"
account_city = "Jaipur"
let account_State; // Here, when we will print the account_state value then undefined will be stored in the variable.

// account_Id = 2 -> Not allowed.
// For assigning a value that you want to ensure that nobody else can change in the near future const is used.

/*
    Never ever use var because of the reason -->
    Issue in block and functional scope.
    
    Also avoid declaring a variable without using let or const as it is not a good practice. 
*/ 

account_Email = "ac@gmail.com"
acc_pass = "212221122"
account_city = "Bengaluru"

console.log(account_Id)

console.table([account_Id, account_Email, acc_pass, account_city,account_State])