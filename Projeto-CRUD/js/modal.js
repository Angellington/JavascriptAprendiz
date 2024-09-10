const abrirDialog = document.querySelector(".create-contain")
const FloatButtonOpen = document.querySelector(".floating-button")

// const fecharDialog = document.querySelector("#closeIcon")

const fecharDialog = document.querySelector(".novo .icone")

const modal = document.querySelector("dialog")


abrirDialog.onclick = function() {
    modal.showModal()
}
// Vai abrir o dialog com o Float Button
FloatButtonOpen.onclick = function() {
    modal.showModal()
}

fecharDialog.onclick = function() {
    modal.close()
}


// Temporario















// ---------- Validar o formulario -------------
const formulario = document.getElementById('formulario');



formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // Selecionar os valores do Formulario
    const inputNome = document.getElementById('nome');
    const inputSobrenome = document.getElementById('sobrenome');
    const inputGenero = document.getElementsByName('gender');
    const inputDanasc = document.getElementById('data-nasc');
    const inputEmail = document.getElementById('email');

    // Valores dos Inputs
    nome = inputNome.value;
    sobrenome = inputSobrenome.value;
    genero = inputGenero.value;
    nasc = inputDanasc.value;
    email = inputEmail.value;


    const { msg , isValid } = validacao(nome, sobrenome, genero, nasc, email)

    validar(msg, isValid)

})

function validacao(nome, sobrenome, genero, nasc){
    // Verificar NOME
    if (nome.trim() == ''){
        return {msg: 'Insira um nome', isValid: false};

    } else {
        return {msg: 'Formulario aceito', isValid: true}
    }
}






// Criar paragrafo
function CreateP() {
    let p = document.createElement('p')
    return p
}

// Adicionar algo no validade
function validar(msg, isValid){
    const validate = document.getElementById('validate')
    const p = CreateP()
    p.innerHTML = msg

    if (isValid === !true){
        validate.classList.add('bad')
    } else {
        validate.classList.add('good')
    }
    validate.innerHTML = ''

    validate.appendChild(p)
}