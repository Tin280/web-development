//Read number1, operator and number1 from HTML page
function getValuesFromCaculator1(){
    let number1 = parseInt (document.getElementById("number1").value);
    let number2 = parseInt (document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;


    //alert("Read value: " + number1  + operator + number2);
    //write result to HTML page
    let returnvalue =caculator(number1,operator,number2);
    document.getElementById("result").innerHTML =returnvalue;
}


// This function make caculation
function caculator(numberx,operator,numbery){
    let returnvalue =0;
    switch (operator){
        case "+" :
            returnvalue =  numberx +numbery;
            break;
        case "-" :
            returnvalue = numberx -numbery;
            break;
        case "*" :
            returnvalue =numberx *numbery;
            break;
        case "/" :
            returnvalue =numberx / numbery;
            break;
    }
    return returnvalue;

}