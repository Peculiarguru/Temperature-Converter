let display = document.getElementById("converterInput");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let getResult = document.getElementById("result");



function toCelsius(){
    let celsiusValue = (display.value * 1.8)+ 32;
    celsiusValue = Math.round(celsiusValue)
    getResult.innerHTML =`The result from Celsius to Fahrenheit is ${celsiusValue}°F`  
}

celsius.onclick= toCelsius;

function toFahrenheit(){
    let fahrenheitValue = (display.value - 32)* 5/9;  
    fahrenheitValue = Math.round(fahrenheitValue) 
    getResult.innerHTML =  `The result from Fahrenheit to Celsius is ${fahrenheitValue}°C`
}

fahrenheit.onclick = toFahrenheit

