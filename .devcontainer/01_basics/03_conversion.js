let score = "33"

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

/*
    1.If we convert a string into a number such that this string can not be converted to number than valueInNumber will
    store NaN, i.e., not a number. Also, if we would have used undefined, same behaviour is observed.
    But if we would have used NULL then 0 will be stored in valueInNumber.

    2. However, the type of this NaN is still a number.
*/