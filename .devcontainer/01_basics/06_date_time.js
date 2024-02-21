let myDate = new Date()

// Exploring different methods of date object.
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

// Data type of date is object.


// Declaring date using object.
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let newdate = new Date("2023-01-14");

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime()); // Used to find the ms of the date.
console.log(Math.floor(Date.now()/1000)); // Convert time into seconds.

newdate.toLocaleString('default',{
    weekday: "long"
}) // Used to modify the way of storing date and time.