function checkPersonID(){
    let userInput = document.getElementById("personId").value;
    let arruserInput = splitData(userInput);
    let sex = getSex(arruserInput[4]);
    alert("Person Id" + userInput + "\nis:" + isPersonId(arruserInput)+"\nSex is:" +sex );

}
function splitData(data){
    let dd = String(data).substring(0,2);
    let mm = String(data).substring(2,4);
    let yy = String(data).substring(4,6);
    let centery = String(data).substring(6,7);
    let orderNumber = String(data).substring(7,10);
    let checkMark = String(data).substring(10,11);

    let arrData = [dd,mm,yy,centery,orderNumber,checkMark];
    return arrData;
}
function isPersonId(arrData){
    let checkMark = "0123456789ABCDEFHJKLMNPRSTUVWXY";
    let tmpN = arrData[0] + arrData[1] + arrData[2] + arrData[4];
    let calcResult = Number(tmpN) % 31;
    if(arrData[5]==checkMark.charAt(calcResult))
        return true;
    else
        return false;
}
function getSex(numberData){
    let sex = "Male";
    if(Number(numberData) % 2 ==0)
        sex = "Female";
    return sex;
}
