let a = 300

if(true){ // Curly braces defines a particular scope.
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) --> It will print 300 because its scope is already over which is a good thing.
// console.log(b) --> Same as above.
// console.log(c) --> It will print the answer as 30 because var declares a global variable even after being declared in scope.

function one(){
    const username = "Aman"

    function two(){
        const website = "Github"
        console.log(username)
    }
    // console.log(website) --> This line will give us an error because of the scope of website.
    two();
}

one()

// Closure is something where child accesses parent variables but this is not the complete concept. Covered later.


// Here declaring function in one way -->
console.log(addone(5)) // Here, we can access the value like this.
function addone(num){
    return num + 1;
}

// But in the below line we can't access the value before we declare the function -->
const addtwo = function(num){
    return num + 2;
}