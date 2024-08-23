// Capturar as tags HTML
const peso = document.querySelector("#peso")

const altura = document.querySelector("#altura")

const enviar = document.querySelector("#enviar")

const divresultado = document.querySelector(".ResultadoIMC")

// Console Log



function IMCFormula(peso, altura){
     let IMC = peso / (altura)**2
     return IMC.toFixed(2)
}

enviar.onclick = function() {
    const pesoValue = parseFloat(peso.value);
    const alturaValue = parseFloat(altura.value);

    divresultado.style.display = "block"

    if (isNaN(pesoValue) || isNaN(alturaValue)) {
        divresultado.innerHTML = "Por favor, insira valores válidos.";
    } else {
        const IMC = IMCFormula(pesoValue, alturaValue);
        divresultado.innerHTML = `Seu IMC é ${IMC}`;
        
    }
};
