const visor = document.getElementById("visor");
const operationVisor = document.getElementById("operationVisor");
let result = 0;
let operations = "";
let operationWasLast = true;
let equalsWasLast = false;
let lastOp = "";
let memory = 0;
let openParenthesis = false;
//change to primary functions
function normalScreen() {
    window.location.href = "Ipad.html";
}
//change to secondary functions
function secScreen() {
    window.location.href = "IpadSecond.html";
}
//scientific notation
function EE() {
    let aux;
    let aux1;
    let aux2;
    if (equalsWasLast) {
        if (whereDot(operations) == -1) {
            aux2=Number(operations);
            aux=aux2/(10**(operations.length-1));
            aux1=String(aux)+"×"+"10"+"^"+String(operations.length-1);
            visor.value=aux1;
            equalsWasLast = false;
        } else {
            aux2=Number(operations);
            let aux3=ondeTemP(operations);
            aux=aux2/(10**(aux3-1));
            aux1=String(aux)+"×"+"10"+"^"+String(aux3-1);
            visor.value=aux1;
            equalsWasLast = false;
        }
    }
}
//verify if the number is decimal for the EE() and dot() functions
function whereDot(number) {
    let dot = -1;
    for (let index = 0; index < number.length; index++) {
        if (number.charAt(index) == ".") {
            dot = index;
        }
    }
    return dot;
}
//reset memory
function mc() {
    memory = 0;
}
//add number to memory
function memoryAdd() {
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            memory += Number(array[array.length - 1]);
        }
    } else {
        memory += Number(operations);
    }
}
//subtract number from memory
function memorySub() {
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            memory -= array[array.length - 1];
        }
    } else {
        memory -= operations;
    }
}
//make log functions on screen
function log(i) {
    let result = "";
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            array[array.length - 1] = Math.log(array[array.length - 1]) / Math.log(i);
            for (i = 0; i < array.length; i++) {
                result += array[i];
            }
            operations = result;
            visor.value = array[array.length - 1];
        }
    } else {
        operations = Math.log(operations) / Math.log(i);
        visor.value = operations;
    }
}
//return some function
function someFunctions(a, b) {
    switch (b) {
        case -1:
            return Math.asin(a);
        case -2:
            return Math.acos(a);
        case -3:
            return Math.atan(a);
        case -4:
            return Math.asinh(a);
        case -5:
            return Math.acosh(a);
        case -6:
            return Math.atanh(a);
        case 1:
            return Math.sin(a);
        case 2:
            return Math.cos(a);
        case 3:
            return Math.tan(a);
        case 4:
            return Math.sinh(a);
        case 5:
            return Math.cosh(a);
        case 6:
            return Math.tanh(a);
        case 7:
            return a * (Math.PI / 180);
        case 8:
            return Math.random();
        case 9:
            return memory;
    }
}
//show the result of someFunctions()
function someFunctionsScreen(i) {
    operationWasLast = false;
    let result = "";
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            array[array.length - 1] = someFunctions(array[array.length - 1], i);
            for (i = 0; i < array.length; i++) {
                result += array[i];
            }
            operations = result;
            visor.value = array[array.length - 1];
        }
    } else {
        operations = someFunctions(operations, i);
        visor.value = operations;
    }
}
//recursion for factorial function
function recursiveFactorial(x) {
    if (x < 0) { return "Erro"; }
    if (x == 0 || x == 1) { return 1; }
    return x * recursiveFactorial(x - 1);
}
//show the result of recursiveFactorial()
function factorial() {
    let result = "";
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            array[array.length - 1] = recursiveFactorial(array[array.length - 1]);
            for (i = 0; i < array.length; i++) {
                result += array[i];
            }
            operations = result;
            visor.value = array[array.length - 1];
        }
    } else {
        operations = recursiveFactorial(operations);
        visor.value = operations;
    }
}
//show constant numbers PI and Euler
function constants(l) {
    operationWasLast = false;
    let result = "";
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            array[array.length - 1] = l;
            for (i = 0; i < array.length; i++) {
                result += array[i];
            }
            operations = result;
            visor.value = array[array.length - 1];
        }
        else {
            array[array.length] = l;
            for (i = 0; i < array.length; i++) {
                result += array[i];
            }
            operations = result;
            visor.value = array[array.length - 1];
        }
    } else {
        operations = l;
        visor.value = operations;
    }
}
//solve y^x
function xRaisedTo(y) {
    let result = "";
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            array[array.length - 1] = y ** array[array.length - 1];
            for (i = 0; i < array.length; i++) {
                result += array[i];
            }
            operations = result;
            visor.value = array[array.length - 1];
        }
    } else {
        operations = y ** operations;
        visor.value = operations;
    }
}
//solve x^y
function raisedTo(y) {
    let result = "";
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            array[array.length - 1] = array[array.length - 1] ** y;
            for (i = 0; i < array.length; i++) {
                result += array[i];
            }
            operations = result;
            visor.value = array[array.length - 1];
        }
    } else {
        operations = operations ** y;
        visor.value = operations;
    }
}
//solve moreOrLess() e percent() functions
function multiplyValue(l) {
    let result = "";
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1])) {
            array[array.length - 1] *= l;
            for (i = 0; i < array.length; i++) {
                result += array[i];
            }
            operations = result;
            visor.value = array[array.length - 1];
        }
    } else {
        operations *= l;
        visor.value = operations;
    }
}
//aply number function to the calculator
function num(i) {
    if (!operationWasLast) {
        operations += i;
        visor.value += i;
    }
    else if (!equalsWasLast) {
        operations += i;
        visor.value = i;
        operationWasLast = false;
    }
    else {
        operationVisor.value = "";
        equalsWasLast = false;
        operationWasLast = false;
        operations = i;
        visor.value = i;
    }

}
//aply dot function to the calculator
function dot() {
    if (isNaN(operations)) {
        let array = [...operations];
        array = negativeNumbers(uniteNum(array));
        if (!isNaN(array[array.length - 1]) && whereDot(array[array.length - 1]) == -1) {
            operations += ".";
            visor.value += ".";
        }
    } else {
        if (operations != "" && whereDot(operations) == -1) {
            operations += ".";
            visor.value += ".";
        }
    }
}
//multiply screen number by -1
function moreOrLess() {
    multiplyValue(-1);
}
//multiply screen number by 0.01
function percent() {
    multiplyValue(0.01);
}
//reset all info from the code
function AC() {
    visor.value = "";
    operationVisor.value = "";
    result = 0;
    operations = "";
    operationWasLast = true;
    equalsWasLast = false;
    lastOp = "";
    openParenthesis = false;
}
//unite positive numbers with minus signal
function negativeNumbers(array) {
    let finalArray;
    if (array[0] == '-') {
        array[0] = array[0] + array[1];
        arrayLeft = array.slice(0, 1);
        arrayRight = array.slice(2);
        array = arrayAntes.concat(arrayDepois);
    }
    for (i = 1; i < array.length; i++) {
        if (array[i] == '-' && isNaN(array[i - 1])) {
            array[i] += array[i + 1];
            arrayLeft = array.slice(0, i + 1);
            arrayRight = array.slice(i + 2);
            finalArray = arrayLeft.concat(arrayRight);
            return negativeNumbers(finalArray);
        }
    }
    return array;
}
//return result of operations
function showResult() {
    if (isNaN(operations)) {
        let array = [...operations];
        array = uniteNum(array);
        array = negativeNumbers(array);
        array = solveParenthesis(array);
        return array[0];
    }
    else { return operations; }
}
//checks if a parenthesis has started
function verifyParenthesis(array) {
    let bol = false;
    for (i = 0; i < array.length; i++) {
        if (array[i] == "(") {
            bol = true;
        }
    }
    return bol;
}
//solve functions inside parenthesis
function solveParenthesis(array) {
    if (verifyParenthesis(array)) {
        let vetdeFim = new Array();
        let y = 0;
        let j;
        let arrayPar = new Array();
        for (j = 0; j < array.length; j++) {
            if (array[j] == ")") {
                vetdeFim[y] = j;
                y++;
            }
        }
        let aux;
        let i = vetdeFim[0];
        while (array[i] != "(") {
            i--;
            aux = i;
        }
        arrayPar = array.slice(aux + 1, vetdeFim[0]);
        arrayPar = recursionOp(arrayPar);
        array = [...array.slice(0, aux), ...arrayPar, ...array.slice(vetdeFim[0] + 1, array.length)];

        return solveParenthesis(array);
    } else { return recursionOp(array); }
}
//solve all operations in order of priority
function recursionOp(array) {
    let arrayFinal;
    for (i = 1; i < array.length; i++) {
        if (array[i] == "^") {
            array[i - 1] = solveOp(array[i - 1], array[i + 1], array[i]);
            arrayAntes = array.slice(0, i);
            arrayDepois = array.slice(i + 2);
            arrayFinal = arrayAntes.concat(arrayDepois);
            return recursionOp(arrayFinal);
        }
    }
    for (i = 1; i < array.length; i++) {
        if (array[i] == "×" || array[i] == "÷") {
            array[i - 1] = solveOp(array[i - 1], array[i + 1], array[i]);
            arrayAntes = array.slice(0, i);
            arrayDepois = array.slice(i + 2);
            arrayFinal = arrayAntes.concat(arrayDepois);
            return recursionOp(arrayFinal);
        }
    }
    for (i = 1; i < array.length; i++) {
        if (array[i] == "+" || array[i] == "-") {
            array[i - 1] = solveOp(array[i - 1], array[i + 1], array[i]);
            arrayAntes = array.slice(0, i);
            arrayDepois = array.slice(i + 2);
            arrayFinal = arrayAntes.concat(arrayDepois);
            return recursionOp(arrayFinal);
        }
    }
    return array;
}
//return the resolution for each operation
function solveOp(pre, suc, op) {
    let num = 0;
    pre = Number(pre);
    suc = Number(suc);
    switch (op) {
        case "+":
            num = pre + suc;
            break;
        case "-":
            num = pre - suc;
            break;
        case "×":
            num = pre * suc;
            break;
        case "÷":
            if (suc == 0) { num = "Erro"; }
            else { num = pre / suc; }
            break;
        case "^":
            num = pre ** suc;
    }
    return num;
}
//unite numbers after iterating the String operations
function uniteNum(array) {
    let arrayFinal;
    for (i = 1; i < array.length; i++) {
        if (!isNaN(array[i - 1]) && !isNaN(array[i])) {
            array[i - 1] = array[i - 1] + "" + array[i];
            arrayAntes = array.slice(0, i);
            arrayDepois = array.slice(i + 1);
            arrayFinal = arrayAntes.concat(arrayDepois);
            return uniteNum(arrayFinal);
        }
        if (array[i] == '.') {
            array[i - 1] += array[i] + array[i + 1];
            arrayAntes = array.slice(0, i);
            arrayDepois = array.slice(i + 2);
            arrayFinal = arrayAntes.concat(arrayDepois);
            return uniteNum(arrayFinal);
        }
    }
    return array;
}
//switch case to add operations to operationVisor and to solve all of them
function op(i) {
    switch (i) {
        case 0:
            if (!operationWasLast && !openParenthesis) {
                if (!equalsWasLast) {
                    if (isNaN(operations)) {
                        let array = [...operations];
                        array = uniteNum(array);
                        array = negativeNumbers(array);
                        lastOp = array[array.length - 2] + array[array.length - 1];
                    }
                    operationVisor.value = operations;
                    result = showResult();
                    visor.value = result;
                    operations = result;
                    equalsWasLast = true;
                }
                else {
                    equalsWasLast = true;
                    operations = result + lastOp;
                    operationVisor.value = operations;
                    result = showResult();
                    visor.value = result;
                    operations = result;
                }
            }
            break;
        case 1:
            if (!openParenthesis) {
                if (!operationWasLast || equalsWasLast) {
                    reducingOp();
                    operations += "+";
                    operationVisor.value = operations;
                    operationWasLast = true;
                }
            }
            else {
                if (!operationWasLast || equalsWasLast) {
                    operations += "+";
                    operationVisor.value = operations;
                    operationWasLast = true;
                    equalsWasLast = false;
                }
            }
            break;
        case 2:
            if (!openParenthesis) {
                if (!operationWasLast || equalsWasLast) {
                    reducingOp();
                    operations += "-";
                    operationVisor.value = operations;
                    operationWasLast = true;
                }
            }
            else {
                if (!operationWasLast || equalsWasLast) {
                    operations += "-";
                    operationVisor.value = operations;
                    operationWasLast = true;
                    equalsWasLast = false;
                }
            }
            break;
        case 3:
            if (!openParenthesis) {
                if (!operationWasLast || equalsWasLast) {
                    reducingOp();
                    operations += "×";
                    operationVisor.value = operations;
                    operationWasLast = true;
                }
            }
            else {
                if (!operationWasLast || equalsWasLast) {
                    operations += "×";
                    operationVisor.value = operations;
                    operationWasLast = true;
                    equalsWasLast = false;
                }
            }
            break;
        case 4:
            if (!openParenthesis) {
                if (!operationWasLast || equalsWasLast) {
                    reducingOp();
                    operations += "÷";
                    operationVisor.value = operations;
                    operationWasLast = true;
                }
            }
            else {
                if (!operationWasLast || equalsWasLast) {
                    operations += "÷";
                    operationVisor.value = operations;
                    operationWasLast = true;
                    equalsWasLast = false;
                }
            }
            break;
        case 5:
            if (!openParenthesis) {
                if (!operationWasLast || equalsWasLast) {
                    reducingOp();
                    operations += "^";
                    operationVisor.value = operations;
                    operationWasLast = true;
                }
            } else {
                if (!operationWasLast || equalsWasLast) {
                    operations += "^";
                    operationVisor.value = operations;
                    operationWasLast = true;
                    equalsWasLast = false;
                }
            }
            break;
        case 6:
            openParenthesis = true;
            equalsWasLast = false;
            operations += "(";
            operationVisor.value = operations;
            break;
        case 7:
            openParenthesis = false;
            operations += ")";
            operationVisor.value = operations;
            break;
        case 8:
            if (!openParenthesis) {
                if (!operationWasLast || equalsWasLast) {
                    openParenthesis = true;
                    reducingOp();
                    operations += "^(1÷";
                    operationVisor.value = operations;
                    operationWasLast = true;
                }
            } else {
                if (!operationWasLast || equalsWasLast) {
                    operations += "^(1÷";
                    operationVisor.value = operations;
                    operationWasLast = true;
                    equalsWasLast = false;
                }
            }
            break;
    }
}
//reducing lines of op() method
function reducingOp() {
    equalsWasLast = false;
    result = showResult();
    visor.value = result;
}