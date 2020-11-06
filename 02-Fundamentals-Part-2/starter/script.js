// Activate Strict mode
'use strict';
/******************************** 
Lecture 33. Functions 
*/
// // functions
// function logger(){
//     console.log('My name is Matt');
// }
// // invoke / call / run the function
// logger();

// function fruitProcessor(apples, oranges){
//     // Create a const variable that stores a string with our pinput values in it. 
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     // return this const.
//     return juice;
// }

// // capture or save the value returned, then log it to the console.
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // Simply log the value to the console. 
// console.log(fruitProcessor(2, 8));

// const appleOrangeJuice = fruitProcessor(5, 4);
// console.log(appleOrangeJuice);

/******************************** 
Lecture 34. Functions Declerations vs Expressions
Functions are values so we can store them in variables
*/

// function decleration
// returning a value allows us access to it outside of the function. 

// we can call a function declerations before declering it. We cannot do this with function expressions. 


// function calcAge1(birthYear){
//     // const age = 2037 - birthYear;
//     // return age;
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function Expression 
// // function stored in a const
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1992);

// console.log(age1, age2);

/******************************** 
Lecture 35. Arrow Functions
Arrow functions are a special form of function expression
*/

// Arrow function
// arrow functions do not get this keywords. 
// this will return without writing the return keyword. this only works with one liner functions.
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// // so here we need to use the return word to access the retirement variable. 
// const yearsUntilRetiremet = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retiremet = 65 - age;
//     // return retiremet;
//     return `${firstName} retires in ${retiremet} years`
// }

// console.log(yearsUntilRetiremet(1991, 'Matt'));
// console.log(yearsUntilRetiremet(1980, 'Bob'));

/******************************** 
Lecture 36. Functions calling other functions

*/

// function cutFruitPieces(fruit){
//     return fruit * 4;
// };
// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces orange.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3));

/******************************** 
Lecture 37. Function review

*/

