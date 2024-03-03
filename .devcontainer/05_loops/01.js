// For loop -->

for(let i = 0; i <= 10; i++){
    const element = i;
    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);
}

// while and do while loop -->

let i = 0;
while(i<=10){
    console.log(`Value of index is ${i}`);
    i += 2;
}

let j = 10;
do{
    console.log(j);
    j++;
}while(j<10);
// The above statement will still be executed once.