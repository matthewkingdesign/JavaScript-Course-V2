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
