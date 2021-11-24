//Read number1, operator and number1 from HTML page
function getValuesFromCaculator(){
    let number1 = document.getElementById("number1").innerText;
    let number2 = document.getElementById("number2").innerText;
    let operator =document.getElementById("operator").innerText;
    alert("Read value: " + number1  + operator + number2);
}