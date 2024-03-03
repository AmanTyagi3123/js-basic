const myobj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Till now we have seen that for of loop cannot be used to iterate through object.

for (const key in myobj){
    //console.log(key); // Used to access the keys of myobj.
    //console.log(myobj[key]); // Used to access the values of myobj.

    console.log(`${key} shortcut for ${myobj[key]}`);
}

// Maps are not iteratable and hence we cannot use for in loop.