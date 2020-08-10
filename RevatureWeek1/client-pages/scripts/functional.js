'use strict';

document.getElementById('functional').onclick = () => {
    console.log('Hello from functional.js');
}

let factorial = (n) => {
    if(n < 0){
        throw new Error(`factorial is not defined for ${n}`);
    }
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(6));