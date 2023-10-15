function convert() {
    let Celsius = document.getElementById('Celsius').value;
    let Fahrenheit=(9*Celsius/5)+32;
    document.getElementById('result').innerHTML="result:" +  Fahrenheit;
}