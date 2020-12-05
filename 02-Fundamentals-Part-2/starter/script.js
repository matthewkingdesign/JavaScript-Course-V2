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
// const calcAverage = (a, b, c ) => (a + b + c) / 3;

// const scoreDolhins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas){
//         console.log(`The Dolphins won with a score of ${avgDolphins} over ${avgKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`The Koalas won with a score of ${avgKoalas} over ${avgDolphins}`);
//     } else {
//         console.log(`no team one by enough`);
//     }
// };

// checkWinner(scoreDolhins,scoreKoalas);

/******************************** 
Lecture 39. Introduction to Arrays

*/
// Arrays are a data structure. 

// const friends = ['Michael', 'Steven', 'Peter'];

// // Alternative array syntax
// const y = new Array(1991, 1960, 1999);
// console.log(y);
// console.log(y.length);

// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// //expression within the [] computes a number and gives us [2] in this case.
// console.log(friends[friends.length - 1]);
// // The friends array was declard using const but only primitive values are immutable 
// // An array is not a primitive value
// friends[2] = 'Jay';
// console.log(friends);
// // this line is illegal! totally changing the array is not allowed when assigned with const
// // friends = ['Bob', 'Dave'];
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);


// // Exercise
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// Random Array code i wrote
// friends.push('Bob');
// console.log(friends);


/******************************** 
Lecture 40. Basic Array Operations (Methods)

*/

// const friends = ['Michael', 'Steven', 'Peter'];
// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// // this will return 4 as the function.push returns the new length of the array
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// // Pop returns the removed element
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven')); // 1
// console.log(friends.indexOf('Bob')); // -1

// // includes function checks with stricts equality so it does not do type coercion
// friends.push(23);
// console.log(friends.includes('Steven')); // true
// console.log(friends.includes('Bob')); // false
// console.log(friends.includes('23')); // false
// console.log(friends.includes(23)); // true

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// };

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// function expression
// ? then do this
// : otherwise do this
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
//   // Arrow function
//   // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   console.log(tips);
//   const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
//   console.log(totals);


/******************************** 
Lecture 42. Introduction to Objects

*/

// Object literal 
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

/******************************** 
Lecture 43. Dot vs. Bracket Notation

*/
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);
// // Dot notation
// console.log(jonas.lastName);
// // Bracket notation
// // Here we can write an expression
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // when we need to compute the value we need bracket notation. Otherwise use the dot notation.

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.');

// console.log(interestedIn);

// console.log(jonas[interestedIn]);

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends.')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman'

// //Challenge
// //"Jonas has 3 friends and his best friend is called Micheal"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends  and his best friend is called ${jonas.friends[0]}`);

/******************************** 
Lecture 44. Object Mothods

*/
// funtions are just another type of value.
// Adding a function to an object.

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         this.summary = `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's license`;
//         console.log(this.summary);
//         return this.summary;
//     }

// };
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // console.log(jonas['calcAge'](1991));

// jonas.getSummary();

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     height: 1.69,

//     // Below is my function that worked, Jonas did his slightly differently
//     // calcBmi: function(weight, height){
//     //     this.BMI = weight / (height * height);
//     //     console.log(this.BMI);
//     //     return this.BMI;
        
//     // }
//     calcBMI: function(){
//         this.BMI = this.weight / this.height ** 2
//         return this.BMI;
//     }
// };
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     height: 1.95,

//     // calcBmi: function(weight, height){
//     //     this.BMI = weight / (height * height);
//     //     console.log(this.BMI);
//     //     return this.BMI;
        
//     // }
//     calcBMI: function(){
//         this.BMI = this.weight / this.height ** 2
//         return this.BMI;
//     }
// };
// mark.calcBMI(mark.weight, mark.height);
// john.calcBMI(john.weight, john.height);

// if(mark.BMI > john.BMI){
//     console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI})`);
// } else {
//     console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is lower than ${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI})`);
// };

/******************************** 
Lecture 46. Iteration: The for Loop

*/
// for loop will keep running while condtion is TRUE

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

/******************************** 
Lecture 47. Looping Arrays, Breaking and Continuing

*/
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];
// // empty array we fill in the for loop
// const types = [];

// // for loop going through the jonas array
// for (let i = 0; i < jonas.length ; i++){
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling types array
//     // types[i] = typeof jonas[i];
//     // push to the array
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// // continue leaves the current iteration of the loop when the condition is met.
// // here we say of the type of data is NOT a string continue, so skip it. 
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length ; i++){
//     if(typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }
// // break terminates the current loop. 
// // So stop when we find a number 
// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length ; i++){
//     if(typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }

/******************************** 
Lecture 48. Looping Backwards and Loops in Loops

*/
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// // running backwards
// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(i,jonas[i]);
// }
// // This loop runs first, will run once then the second will run  5 times as it needs to finish before the first loop is finished. Once the second loop is complete the first loop completes its iteration and starts again untils it's condtion is false.
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`---------- Starting excercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Excercise ${exercise} Lifting weights repetition ${rep}`);
//     }
// }
/******************************** 
Lecture 48. The While loop

*/

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10){
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`); 
//     rep ++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end...')
// }

/******************************** 
Coding Challenge 4

*/
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);

  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    // console.log(sum)
    return sum / arr.length;
  }
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));