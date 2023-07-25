document.addEventListener('DOMContentLoaded', () => {
    const NumericKey = {
        NUM_0: '0',
        NUM_1: '1',
        NUM_2: '2',
        NUM_3: '3',
        NUM_4: '4',
        NUM_5: '5',
        NUM_6: '6',
        NUM_7: '7',
        NUM_8: '8',
        NUM_9: '9'
    }

    const OperationKey = {
        PLUS: '+',
        MINUS: '-',
        MULTIPLY: '*',
        DIVIDE: '/',
    }

    const ActionKey = {       
        CLEAR_ALL: 'Delete',
        CLEAR: 'Backspace',
        ENTER: 'Enter'
    }

    document.addEventListener('keydown', (event) => {
        const keyCode = event.key;

        const numericButtonArray = Object.values(NumericKey);
        const operationButtonArray = Object.values(OperationKey);
        const actionbuttonArray = Object.values(ActionKey);

        if(numericButtonArray.includes(keyCode)){
            const number = Number(keyCode);
            numericButtonPressed(number);
        }

        if(operationButtonArray.includes(keyCode)){
            const operation = keyCode;
            console.log("Operacion presionado: ", operation);
            operationButtonPressed(operation);
        }

        if(actionbuttonArray.includes(keyCode)){
            event.preventDefault();
            const action = keyCode;
            console.log("Accion presionado: ", action);
            switch(action){
                case ActionKey.CLEAR_ALL:
                    clearAllButtonPressed();
                    break;
                case ActionKey.CLEAR:
                    clearButtonPressed();
                    break;
                case ActionKey.ENTER:
                    resultButtonPressed();
                    break;
            }
        }
    });
});