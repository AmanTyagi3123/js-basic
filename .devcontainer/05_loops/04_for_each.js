const coding = ["JS", "Ruby", "CPP", "Java"];

// foreach is a higher order function and used like this -->
coding.forEach( function (item) { // This is called callback function and hence no name required.
    console.log(item);
} )

// Using arrow function
coding.forEach( (val) => {
    console.log(val);
} )

// Another way -->
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

// Below code is used to access different data members of object stored in an array.
mycoding.forEach( (item) => {
    console.log(item.languageFileName);
} )