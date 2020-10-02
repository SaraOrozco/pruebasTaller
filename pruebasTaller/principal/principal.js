exports.calculadora = function (num1, num2, operacion) {
    if(operacion == '+'){
        return num1+num2;
    }

    else if(operacion == '-'){
        return num1-num2;
    }

    else if(operacion == '*'){
        return num1*num2;
    }

    else if(operacion == '/' && num2 != 0){
        return num1/num2;
    }
    else
        return 'Error';
    
}
