console.log("Script test");

//string "" is a text
let firstName = "Derrick";
let lastName = "Lapp";

//numbers
let myAge = 31;
let myShoeSize = 10.5;

//boolean values (true or false)
let isStudent = true; 

//display
console.log(firstName);
console.log(myAge);

//concatenation
console.log("My full name is " + firstName + " " + lastName + ", my shoe size is " + myShoeSize + ", and I am " + myAge + " years old.")

//Maths

let num1 = 5;
let num2 = 12;

let addition = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;

console.log("Addition is: " + addition);
console.log("Subtraction is: " + subtract);
console.log("Multiplication is: " + multiply);
console.log("Division is: " + divide);

//area of a circle Math.PI is Pi, ** x is used to give numbers exponents equal to x

let radius = prompt("Please enter the size of the radius for the circle.")
let area = (radius ** 2) * Math.PI

console.log("The area of a circle with a radius of " + radius + "cm is: " + area + " centimeters squared.");
console.log("The radius squared is: " + radius **2)
console.log("The radius squared times Pi is: " + radius **2 * Math.PI)