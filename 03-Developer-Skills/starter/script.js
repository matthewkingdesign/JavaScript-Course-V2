// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/******************************** 
Setting up Prettier and VS Code

What did we do?
Prettier is an opionatted code 'formatter' it makes sure our code is correct

We enabled prettier as our 'default code formatter' in settings and enabled format on save.

we created a .prettierrc file in the local working folder - can i move this out of this folder? YES I CAN AND IT STILL WORKS

In the prettierrc file we changed:
- Double quotes to single quotes
- 

*/

const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(x);

console.log(calcAge(1970));
console.log(calcAge(1950));
// CODE WARS
function multiply(a, b) {
  return a * b;
}
console.log(multiply(12, 2));

//IMPORTANT 4 STEP PROCESS TO SOLVING PROBLEMS
// 1. Make sure you understand the problem 100%. Ask the right questions to get a clear picture of the problem

//2. Divide and conquer: Break up a big problem into smaller sub problems. BREAK IT DOWN

//3. Don't be afraid of research.

//4. For bigger problems, write pseudo-code before writing the actual code.

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1. Understanding the problem
// what is the temperature amplitude?
// - It is the difference between the highest and lowest temp

// Whats a sensor error? And what do we do?

// How do we compute the max and min temps?

//2. Sub problems
// Ignore sensor errors, How do we do this?
// Find max value in temp array
// Find min value in temp array
// Subtract min from max and return it - amplitutde.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 8, 12]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1. Understand the problem
// With 2 arrays, should we implement functionality?
// No Just merge the arrays

//2. sub problems
// How do we merge the arrays?
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
