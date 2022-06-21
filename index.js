var input = prompt("what operation do you want to perform? pick any +, -, *, /")
var Num1 = prompt("Enter first Number")
var Num2 = prompt("Enter second Number")

if (input == "+"){
    var result = Number(Num1) + Number(Num2);
    alert("result is "+result)
}else{
    if (input == "-"){
        var result = Number(Num1) - Number(Num2);
        alert("result is "+result)
    }
    if (input == "*"){
        var result = Number(Num1) - Number(Num2);
        alert("result is "+result)
    }
    if (input == "/"){
        var result = Number(Num1) - Number(Num2);
        alert("result is "+result)
    }
}
