console.log("if-statements");


//  ---if-statements---
// if(condition){
//     code to be executed if the condition is true
// }

if(3<=4){
    console.log("I am inside the if statement");
}

let student1=45;
let student2=45;

if(student1==student2){
    console.log("Both are the same age.");
}

//---if-else statement ---
// if(condition){
//       code to be executed if the condition is true
// }else{
//       code to be executed if the condition is false
// }

let isTrue = true;
if(isTrue){
    console.log("Yes");
}else{
    console.log("No");
}

//challenges
// check if age is >21
// T: display "you're an adult"
// F: display "you're underaged"

let age = 50;

if(age>=21){
    console.log("You are an adult.");
}else{
    console.log("You are underaged.");
}

// --- if-else if-else statements ---
// if(condition){
//  code to be executed if true
// }else if(condition2){
//  code to be executed if condition2 is true
// }else{
//  code to be executed if conditions are false
// }

age = 65;

if(age<13){
    console.log("Child");
}else if(age<21){
    console.log("Teenager");
}else if(age<64){
    console.log("Adult");
}else{
    console.log("Senior");
}

//if-else if-else challenges

//age = prompt("Please enter your age:");

//if(age<12){
//    console.log("The ticket price is: $5");
//}else if(age<18){
//   console.log("The ticket price is: $8");
//}else{
//    console.log("The ticket price is: $10");
//}

//weather outfit suggestion
function weatherOutfit(){
    let temp = prompt("Please enter the temperature in Celsius:");
    let outfit;
    document.getElementById("weather").classList.remove("cold","hot");

    if(temp<15){
        outfit = "jacket.";
        document.getElementById("weather").classList.add("cold");
    }else if(temp<25){
        outfit = "sweater.";
    }else{
        outfit = "t-shirt.";
        document.getElementById("weather").classList.add("hot");

    }
        document.getElementById("weather").innerHTML="Because it is " + temp + " degrees Celsius, I suggest wearing a " + outfit;
}