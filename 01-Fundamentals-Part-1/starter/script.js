// let
// let variable declerations can be re assigned in the program. Below we mutated the age variable from 30 to 31.
// let is block scoped
let age = 30;
age = 31;
console.log(age); // 31


// const
// const variable declerations are declerations that will stay the same. They cannot be mutated. they are immutable.

const birthYear = 1991;
// birthYear = 1992; // trying to change a const var will return an error
// const job; // this will also throw an error as you need a value. 

// var
// dont use it. 
// it is function scoped. 

