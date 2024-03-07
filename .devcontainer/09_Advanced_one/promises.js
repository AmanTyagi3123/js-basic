// Promise is an object.
const promise1 = new Promise(function(resolve,reject){
    // Do an async task.
    // DB calss, cryprography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
});

promise1.then(function(){   // Directly connected to resolve
    console.log("Promise Consumed!");
}); 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved!');
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'Aman', password: '123'})
        }
        else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})


// The below is called chaining in which the returned value is passed as argument in then function used once again.
promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(() => console.log("The promise is either resolved or rejected"));

// In the above chaining catch is used to display the statement when an error is encountered and finally is used to
// tell the end user the final result which ensures that task is over. Also finally surely gets executed.

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'JS', password: '123'})
        }
        else{
            reject('ERROR: JS went wrong');
        }
    },1000)
})

// This is async await. The only problem associated with it is that it does not handle errors efficiently.
// async function connsumePromise5(){
//     const response = await promise5;
//     console.log(response);
// }

// For handling in the above case gracefully use the below syntax -->
async function consumePromise5(){
    try{
        const response = await promise5;
        console.log(promise5);
    } catch(error){
        console.log(error);
    }
}

async function getAllUsers(){
    try{    
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json; // You have to await this process as well because it too requires sometime.
        console.log(data);
    } catch(error){
        console.log("E: ", error);
    }
}

getAllUsers();

/*  
     ***********
    |Interesting|
     ***********
    When you fetch data from a API and you get an error code 404 then the try block is ececuted and not the catch block.
    This is because this error code is generated after getting response only but catch block is executed when there is
    a reject condition taking place.

    fetch iteself is very interesting. It is not just one line which sends request and resolve or reject.
    There are various indepth tasks going on during its execution.
    
    Decoding fetch
    --------------
    When you type fetch basically it goes in two directions. 
    In one direction it creates 3 fields which are all private and are inaccessible by you. These three fields are
    data, onfulfilled[] array and onRejection[] array. These are for later use.
    But lets first move into the other direction. Here, it send request to the particular url using either web browser
    or node. In both the cases it sends a network request and finally this network request is either sent or rejected. 
    If it is sent then the response found is pushed into OnFulfilled array which we already discussed. On the other hand,
    if the network request is rejected then it is pushed into OnRejection[] array. Now, the real hero data is actually
    having a space reserved in the memory and has an empty value. Now both our support actors, i.e., both arrays have
    functions present with them which fulfil the data. Now this data serves as the responsible person to fulfil the response
    which is already accessible to the global memory and finally fetch performs what it does.
    Moreover, as we have discussed earlier when discussing about memory, that there is a priority queue associated with
    fetch which allows tasks performed by fetch to be treated as V.I.P. and hence have more priority then any other task
    pushed already into the task queue using asynchronous behaviour.
*/