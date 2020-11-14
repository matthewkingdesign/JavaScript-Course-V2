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
// We have two parameters named birthYear. They do not interfere with one another. 
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// };
// const yearsUntilRetiremet = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retiremet = 65 - age;
//     if(retiremet > 0){
//         console.log(`${firstName} retires in ${retiremet} years`);
//         return retiremet;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// };
// console.log(yearsUntilRetiremet(1991, 'Matthew'));
// console.log(yearsUntilRetiremet(1950, 'Matthew'));


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// Simple arrow function syntax. 
// average gets automatically returned.
const calcAverage = (a, b, c ) => (a + b + c) / 3;

const scoreDolhins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`The Dolphins won with a score of ${avgDolphins} over ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`The Koalas won with a score of ${avgKoalas} over ${avgDolphins}`);
    } else {
        console.log(`no team one by enough`);
    }
};

checkWinner(scoreDolhins,scoreKoalas);