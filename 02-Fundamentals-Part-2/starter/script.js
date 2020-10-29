// Activate Strict mode
'use strict';

// functions
function logger(){
    console.log('My name is Matt');
}
// invoke / call / run the function
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// capture or save the value returned, then log it to the console.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Simply log the value to the console. 
console.log(fruitProcessor(2, 8));

const appleOrangeJuice = fruitProcessor(5, 4);
console.log(appleOrangeJuice);