/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Task 1: Debugging
let result = "5" - 2;
console.log("The result is: " + result); // no need to fix, implicit coversion works here.


let isValid = Boolean("false"); 
if (isValid) {
    console.log("This is valid!"); // This is correct. "False" is not an empty string. So it's considered truthy.
}

let age = "25";
let ageNum = Number(age)
let totalAge = ageNum + 5;
console.log("Total Age: " + totalAge); //This one, I turned string "age" into a number in order that the concatenation with + operator is valid 



//Task 2: Own examples
  

let blueLemon = Boolean(undefined);
if (blueLemon) {
  console.log("Lemons are blue!");
} else {
  console.log("Lemons aren't blue!"); // Example of explicit conversion, converting 'undefined' to false.
}


let purchaseAmount = "5";
let totalPrice = purchaseAmount*20;
console.log("The total price is" + "$" + totalPrice); 
// Example of implicit conversion, converting a string to a number during multification.
