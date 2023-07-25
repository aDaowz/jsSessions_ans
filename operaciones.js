console.log("Cargando variables y metodos");

let display = null;

let factor1 = 0;
let factor2 = 0;
let result = 0;
let selectedOperation = null;
let isResolved = false;

let resetValues = () => {
    factor1 = 0;
    factor2 = 0;
    result = 0;
    selectedOperation = null;
    // isResolved = false;
}

let addition = (x, y) => x + y;
let substraction = (x, y) => x - y;
let multiplication = (x, y) => x * y;
let division = (x, y) => x / y;

// [3] PARAMETRO DE button
let numericButtonPressed = (button) => {
    if(display.textContent === '+' || 
            display.textContent === '-' ||
            display.textContent === '*' ||
            display.textContent === '÷' ||
            isResolved)
    {
        display.textContent = '';
        isResolved = true;
    }

    // [4] Para arreglar el issue con el teclado relacionado a tipo de dato, se debe poner condicional ternario
    // display.textContent += button.textContent;
    display.textContent += typeof button === 'number'? button : button.textContent;
}

let clearAllButtonPressed = () => {
    display.textContent = '';
}

let clearButtonPressed = () => {
    display.textContent = display.textContent.slice(0, -1);
}

let resultButtonPressed = () => {
    factor2 = Number(display.textContent);
    switch(selectedOperation){
        case '+': // case '+':
            result = addition(factor1, factor2);
            break;
        case '-': // case '-':
            result = substraction(factor1, factor2);
            break;
        case '*': // case '*':
            result = multiplication(factor1, factor2);
            break;
        case '÷': // case '÷':
            result = division(factor1, factor2);
            break;
    }
    // result = factor1 + factor2;

    console.log('Result = ', result);
    display.textContent = result;
    isResolved = true;

    resetValues();
}

let operationButtonPressed = (operation) => {
    console.log('***************** ', operation, typeof operation);
    if(factor1 === 0){
        factor1 = Number(display.textContent);
    }
    else{
        let factor2 = Number(display.textContent);                
        switch(selectedOperation){ // *
            case '+':
                factor1 += factor2;
                display.textContent = factor1;
                console.log("Result = ", factor1);
                break;
            case '-':
                factor1 -= factor2;
                display.textContent = factor1;
                console.log("Result = ", factor1);
                break;
            case '*':
                factor1 *= factor2;
                display.textContent = factor1;
                console.log("Result = ", factor1);
                break;
            case '÷':
                factor1 /= factor2;
                display.textContent = factor1;
                console.log("Result = ", factor1);
                break;
            default:
                console.warn('This operation is no valid!');
                break;
        } // switch
    } // else

    // [10] PARA SOLUCIONAR ISSUE DEBE TENER TERNARIO
    // selectedOperation = operation.textContent; // +, -, *, ÷ 
    selectedOperation = typeof operation === 'string' ? operation : operation.textContent; // +, -, *, ÷ 
    display.textContent = selectedOperation;
}