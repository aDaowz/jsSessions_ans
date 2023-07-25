document.addEventListener('DOMContentLoaded', () => {

    // [1] SE PASA display A GLOABL COMO LET
    // const display = document.getElementById('display');
    display = document.getElementById('display');

    const buttons = document.querySelectorAll('.number.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // [2] SE PASA EL PARAMETRO DE button
            console.log("////////////", button);
            numericButtonPressed(button);
        });
    });

    // [5] SE PASA CONTENIDO A clearAllButtonPressed()
    const clearAllButton = document.getElementById('CA');
    clearAllButton.addEventListener('click', () => {
        clearAllButtonPressed();
    });

    // [6] SE PASA CONTENIDO A clearButtonPressed()
    const clearButton = document.getElementById('C');
    clearButton.addEventListener('click', () => {
        clearButtonPressed();
    });

    // [7] SE PASA CONTENIDO A resultButtonPressed()
    const resultButton = document.getElementById('result');
    resultButton.addEventListener('click', () => {
        resultButtonPressed();
    });

    // [8] SE PASA CONTENIDO A operationButtonPressed()
    const operationButtons = document.querySelectorAll('.operation.button');
    operationButtons.forEach(operation => {
        operation.addEventListener('click', () =>{
            // [9] SE PASA PARAMETRO DE operation
            operationButtonPressed(operation);
        });
    }); // operationButtons.forEach

});// DOMContentLoaded