//Celsius to Fahrenheit function

function toFahrenheit(){
    let temperature = Number(prompt("Please enter a temperature in Celsius"));
    let fahrenheit = (temperature * (9/5)) + 32

    document.getElementById("list").innerHTML+=`<p>${temperature} degrees Celsius converts to ${fahrenheit} degrees Fahrenheit.</p>`;

}

//console.log(toFahrenheit(Number(prompt("Please enter a temperature in Celsius"))));

//console.log(toFahrenheit(30));


//console.log(toFahrenheit(temperature));

//Writing it into html
//document.write("<p>" + toFahrenheit(30) + "<p>");
//document.write("<p>" + toFahrenheit(Number(prompt("Please enter a temperature in Celsius"))) + "<p>");
//document.write("<p>" + toFahrenheit(temperature) + "</p>");