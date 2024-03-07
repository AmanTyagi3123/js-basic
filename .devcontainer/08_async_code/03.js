// Creating function for selecting random color -->

const randomColor = function(){
    const str = "0123456789ABCDEF";
    let random = '#';

    for(let i=0; i<6; i++){
        random += str[Math.floor(Math.random() * 16)];
    }
    return random;
}

const body = document.querySelector('body');
let changeIt;
document.querySelector('#start')
.addEventListener('click',function(){
    if(!changeIt){
        changeIt = setInterval(function(){
            body.style.backgroundColor = randomColor()
        },1000);
    }
})

document.querySelector('#stop')
.addEventListener('click',function(){
    clearInterval(changeIt);
    changeIt = null;
})