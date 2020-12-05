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
// IMPORTANT
console.log(calcAge(1991));
console.log(calcAge(1970));
