console.log("function.js")

//creating the function

//Function example

function greet(name){
    return "Hello World from a function! And hello " + name;
}

console.log(greet("Derrick"));


//Anonymous Functions

let meet = function(name){
    return "Hello, World and " + name + " from an anonymous function!";
}

console.log(meet("Derrick"));


//Function to double numbers
function doubleNumber(num1){
    return 2 * num1;
}

console.log(doubleNumber(6));

//Creating a function with multiple parameters

function meetgreet(name, place){
    return "Hello " + name + " from " + place + "!";
}
console.log(meetgreet("Derrick", "inside the house"));

//Making assignment 1 with functions

//let character = "Joy";
//let action = "brought";
//let object = "deck of cards";
//let place = "the local card store";
//let time = "Friday night"


function story1(character, action, object, place, time){
    
    const occasion = "the weekly tourney";
    
    console.log(character + " went to " + place + " one " + time + ". However, " + character + " accidentally " + action + " the wrong " + object + ". Sadly, " + character + " could no longer participate in " + occasion + " this week.");

}

//Story 1
//console.log("--- Happens to the Best of Us ---")
//console.log(character + " went to " + place + " one " + time + ".");
//console.log("However, " + character + " accidentally " + action + " the wrong " + object + ".");
//console.log("Sadly, " + character + " could not participate in " + occasion + " this week.");

story1("Bobby","brought","deck of cards","local card shop","Friday night");

story1("Candace","threw","bowling ball","the Bowling Alley","Saturday");

story1("Jorge","flung", "dart","the dive bar","Wednesday night");


//challenge
function combineNames(firstName, secondName){
    console.log(firstName, secondName);
    console.log(firstName + " " + secondName);
}

combineNames("Derrick","Lapp");


//sum

function sum(sum1, sum2){
    return sum1 + sum2;
}

//let result = sum(6,7);
//console.log("The result of the sum is: " + result);

//Number(prompt("#")) <--ensures the prompt is saved as a number

//Subtraction funtion
//function sub(firstNumber, secondNumber){
//    return firstNumber - secondNumber;
//}

//let sub1 = Number(prompt("Please enter your first number"));
//let sub2 = Number(prompt("Please enter your second number"));
//let result = sub(sub1, sub2)

//console.log("The result of subtraction of the first number and the second number is: " + result);
//document.write("<p>" + "The result of subtraction of the first number and the second number is: " + result + "<p>");

//Alternate way
//let subsub1 = Number(prompt("Please enter your first number"));
//let subsub2 = Number(prompt("Please enter your second number"));
//let total = 0;

//function subsub(){
//    total = subsub1 - subsub2;
//    console.log("The result of subtraction of the first number and the second number is: " + total);
//document.write("<p>" + "The result of subtraction of the first number and the second number is: " + total + "<p>");
//}
//subsub();

//Linking a function to a button
function addProduct(){
    let prodName = prompt("Please enter the product name: "); //Milk
    document.getElementById("list").innerHTML+=`<p>${prodName}</p>`;
}
