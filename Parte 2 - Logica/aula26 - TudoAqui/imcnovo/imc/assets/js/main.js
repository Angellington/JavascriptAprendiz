// Selecionar o Formulário (O formulário perde o Comportamento Padrão)
const form = document.querySelector('#formulario');

// Adicionar evento no formulario de enviar
form.addEventListener('submit', function(e) {

    // Previne o Comportamento Padrão
    e.preventDefault();

    // Capturar os inputs do formulario
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    // Converteu os valores do Formulário para numver
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Validação dos resultados, caso for numero ou não
    if (!peso) {
        setResultado('Peso Inválido', false);
        return
    };
    if (!altura) {
        setResultado('Altura Inválida', false);
        return
    };

    // Levar os valores para a função IMC
    const imc = getIMC(peso, altura);

    // Os niveis do IMC
    const nivelIMC = getNivelImc(imc)

    //  A mensagem para o Set Resultado
    const msg = `Seu IMC é ${imc} (${nivelIMC})`

    // setResultado recebendo dois valores
    setResultado(msg, true);
});



// Criar Função do IMC
function getIMC(peso, altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}

// Criar Função Niveis de IMC
function getNivelImc (imc) {
    const nivelImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'obesidade grau 3'];

    if(imc >= 39.9) return nivelImc[5];
    if(imc >= 34.9) return nivelImc[4];
    if(imc >= 29.9) return nivelImc[3];
    if(imc >= 24.9) return nivelImc[2];
    if(imc >= 18.5) return nivelImc[1];
    if(imc < 18) return nivelImc[0];
}




// Função criar paragrafo
function criarP() {
    const p = document.createElement('p');
    return p
}


// Criar uma Função para Resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ' '

    const p = criarP();

    // Verificação par Paragrafo
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML =  msg;
    resultado.appendChild(p);
};

