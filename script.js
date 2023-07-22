document.addEventListener('DOMContentLoaded', () => {
    console.log("Javascript loaded");

    const calcularBtn = document.getElementById('calcular');

    calcularBtn.addEventListener('click', () => {
        // let num1 = parseFloat(document.getElementById('numero1').value);
        // let num2 = parseFloat(document.getElementById('numero2').value);
        let num1 = +document.getElementById('numero1').value;
        let num2 = +document.getElementById('numero2').value;
        let operacion = document.getElementById('operacion').value;
        let resultado;
        
        // if (operacion === 'suma') {
            resultado = num1 + num2;
        //}
        
        document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
    });
});