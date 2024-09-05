// Capturar o elemenento do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Capturar os inputs
    const inputNome = document.querySelector('#nome');
    const inputSobrenome = document.querySelector('#sobrenome');
    const inputNasc = document.querySelector('#nasc');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password')

    // Trazer o valor dos input
    nome = inputNome.value;
    sobrenome = inputSobrenome.value;
    nasc = inputNasc.value;
    email = inputEmail.value;
    password = inputPassword.value;
e
    
    // Fazer a validação e obter a mensagem e o status

    const {msg, isValid} = validar(nome, sobrenome, nasc, email, password)


    // Fazer a validacao de nome
    validator(msg, isValid);
});


function validar(nome, sobrenome, nasc, email, password){
    if (nome.trim() == ''){
        return {msg: 'Insira um nome', isValid: false}
    }
    if (sobrenome.trim() == ''){
        return {msg: 'Insira um sobrenome', isValid: false}
    } 
    if (nasc == ''){
        return {msg: 'Insira uma data de nascimento', isValid: false}
    }

    const idade = calcularIdade(nasc);
    if (idade < 12){
        return {msg: 'Você precisa ter 12 anos para acessar!', isValid: false}
    }
    if (idade > 120){
        return {msg: 'Por favor, insira uma data válida!', isValid: false}
    }
    

    if (email.trim() == ''){
        return {msg: 'Insira um email', isValid: false}
    }
    if (!validarEmail(email)){
        return {msg: 'Insira um email válido', isValid: false};
    }
    if (password.trim() ==''){
        return {msg: 'Insira uma senha', isValid: false};
    }
    
    const senhaValidacao = validarSenha(password);
    if (!senhaValidacao.isValid){
        return {msg: senhaValidacao.msg, isValid: false};
    }
    

    return {msg: 'Formulário validado', isValid: true}
}

// Validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar password
function validarSenha(password) {
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /\d/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 8) {
        return { msg: 'A senha deve ter pelo menos 8 caracteres.', isValid: false };
    }
    if (!regexMaiuscula.test(password)) {
        return { msg: 'A senha deve conter pelo menos uma letra maiúscula.', isValid: false };
    }
    if (!regexMinuscula.test(password)) {
        return { msg: 'A senha deve conter pelo menos uma letra minúscula.', isValid: false };
    }
    if (!regexNumero.test(password)) {
        return { msg: 'A senha deve conter pelo menos um número.', isValid: false };
    }
    if (!regexEspecial.test(password)) {
        return { msg: 'A senha deve conter pelo menos um caractere especial.', isValid: false };
    }

    return { msg: 'Senha válida.', isValid: true };
}

// Criar função idade
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())){
        idade--;
    }

    return idade;
}



// Criar a Função de Parágrafo
function criarP() {
    const p = document.createElement('p');
    return p
}

// Aparecer no validator
function validator(msg, isValid){
    const validacao = document.querySelector('.validacao');
    const p = criarP();
    p.innerHTML = msg;

    // Testando a cor
    if(isValid === true){
        p.classList.add('correto')
    } else {
        p.classList.add('erro')
    }
    validacao.innerHTML = '';
    validacao.appendChild(p);0
};



