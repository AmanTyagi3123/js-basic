const marvel_heros = ["Thor","IronMan","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros) Using this particular statement we actually inserted the whole array as one object in other

// Now actully how to merge two arrays.
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

// Another way to merge ->
const all_new_heros = [...marvel_heros,...dc_heros] // This is the spread operator.
console.log(all_new_heros)

const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const another_arr = arr1.flat(Infinity) // You could have given 2 as well.

// When you scrape data from website, it can come in any form then converting it to array ->

console.log(Array.isArray("Aman")) // Checking whether the given object is an array or not
console.log(Array.from("Aman")) // Converts the whole string into an array
console.log(Array.from({name: "Aman"})) // Interesting for interview.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))