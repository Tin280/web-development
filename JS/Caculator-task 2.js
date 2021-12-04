//Read number1, operator and number1 from HTML page
function getValuesFromCaculator2(){
    let number1 = parseInt (document.getElementById("number1").value);
    let number2 = parseInt (document.getElementById("number2").value);
    let operator_2 =  document.getElementsByName("operator-2")[0].value;

    alert("Read value: " + number1  + operator_2 + number2);
    //write result to HTML page
    let returnvalue =caculator(number1,operator_2,number2);
    document.getElementById("result").innerHTML =returnvalue;
}
// This function make caculation
function caculator(numberx,operator_2,numbery){
    let returnvalue = 0 ;
    switch (operator_2){
        case "+" :
            returnvalue =  numberx +numbery;
            break;
        case "-" :
            returnvalue = numberx -numbery;
            break;
        case "*" :
            returnvalue = numberx *numbery;
            break;
        case "/" :
            returnvalue =numberx / numbery;
            break;
    }
    return returnvalue;
}