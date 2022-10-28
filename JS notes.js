//1. variables and concatenation 
let favoriteColor = "pink"; 
console.log("My favorite color:" + favoriteColor); 



//2. String interpolation 
let myName = 'Natalia';
let myCity = 'Mexico City';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
//output: My name is Natalia. My favorite city is Mexico City. 



//3. If/else statements 
let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}
//output: Time to wait for a sale. 



//4. Comparsion Operators with if statements 
let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
};
//Output: We can eat later! 


//5. If else logical operators..... || means or &&, means and
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}
//Output: not bed time yet 

