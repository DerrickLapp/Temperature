
function convertTemperatureRange(){
    document.getElementById("weather").innerHTML="";
    document.getElementById("weather").classList.remove("cold", "nice", "hot");
    let startValue = Number(prompt("Please enter a starting Temperature."));
    let endValue = Number(prompt("Please enter an ending Temperature."));
    let scale = prompt("Please enter 'C' for Celsius or 'F' for Fahrenheit.");
    let i;

    for(i=startValue;i<=endValue;i++){
        let celsius;
        let fahrenheit;

        if(scale == "C"){
            fahrenheit = ((i * (9/5))+32).toFixed(2); 
            
            if (fahrenheit<=32){
                document.getElementById("weather").classList.add("cold");
            }else if(fahrenheit<=75){
                document.getElementById("weather").classList.add("nice");
            }else{
                document.getElementById("weather").classList.add("hot");
            }
    
            document.getElementById("weather").innerHTML+=`<tr>
            <td> ${i} degrees Celsius converts to ${fahrenheit} degrees Fahrenheit.</td>
            </tr>`;
            
        }else if(scale == "F"){
            celsius = ((i-32) * (5/9)).toFixed(2);
    
            if(celsius<=0){
                document.getElementById("weather").classList.add("cold");
            }else if(celsius<=25){
                document.getElementById("weather").classList.add("nice");
            }else{
                document.getElementById("weather").classList.add("hot");
            }
    
            document.getElementById("weather").innerHTML+=`<tr> 
            <td>${i} degrees Fahrenheit converts to ${celsius} degrees Celsius.</td>
            </tr>`;
            
        }else {
            document.getElementById("weather").innerHTML="Please click the button again, and enter a proper scale and temperature.";
        }

    }
}
