//Conditional Weather Temp Converter



function convertTemperature(){

    let scale = prompt("For Celsius to Fahrenheit, please enter C. For Fahrenheit to Celsius, please enter F.");
    let temp = prompt("Please enter the temperature.")
    let celsius;
    let fahrenheit;
    document.getElementById("weather").classList.remove("cold", "nice", "hot");


    if(scale == "C"){
        fahrenheit = ((temp * (9/5))+32).toFixed(2); 
        
        if (fahrenheit<=32){
            document.getElementById("weather").classList.add("cold");
        }else if(fahrenheit<=75){
            document.getElementById("weather").classList.add("nice");
        }else{
            document.getElementById("weather").classList.add("hot");
        }

        document.getElementById("weather").innerHTML= temp + " degrees Celsius converts to " +  fahrenheit + " degrees Fahrenheit.";
        
    }else if(scale == "F"){
        celsius = ((temp-32) * (5/9)).toFixed(2);

        if(celsius<=0){
            document.getElementById("weather").classList.add("cold");
        }else if(fahrenheit<=25){
            document.getElementById("weather").classList.add("nice");
        }else{
            document.getElementById("weather").classList.add("hot");
        }

        document.getElementById("weather").innerHTML= temp + " degrees Fahrenheit converts to " +  celsius + " degrees Celsius.";
        
    }else {
        document.getElementById("weather").innerHTML="Please click the button again, and enter a proper scale and temperature.";
    }
}





//function toFahrenheit(){
//    let temperature = Number(prompt("Please enter a temperature in Celsius"));
//    let fahrenheit = (temperature * (9/5)) + 32

//    document.getElementById("list").innerHTML+=`<p>${temperature} degrees Celsius converts to ${fahrenheit} degrees Fahrenheit.</p>`;

//}


//function weatherOutfit(){
//    let temp = prompt("Please enter the temperature in Celsius:");
//    let outfit;
//    document.getElementById("weather").classList.remove("cold","hot");

//    if(temp<15){
//        outfit = "jacket.";
//        document.getElementById("weather").classList.add("cold");
//    }else if(temp<25){
//        outfit = "sweater.";
//    }else{
//        outfit = "t-shirt.";
//        document.getElementById("weather").classList.add("hot");

//    }
//        document.getElementById("weather").innerHTML="Because it is " + temp + " degrees Celsius, I suggest wearing a " + outfit;
//}
























// Extra Challenge for final report
//thermometer filled out according to temps and change color
//can use divs to section off parts of thermometer and use those for colors
//can use images, and background images