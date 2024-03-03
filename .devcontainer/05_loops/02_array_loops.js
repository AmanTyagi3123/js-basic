// for of

const arr = [1,2,3,4,5]

for (const num of arr){ // num is the iterator
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings){ // Here, greet is iterator for string.
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

for (const [key, value] of map){
    console.log(key, ':-', value);
}

const myobj = {
    'game1': "NFS",
    'game2': "GOW"
};

// for (const [key,value] of myobj){
//     console.log(key, ':-', value);  // Objects are not iteratable this way.
// }