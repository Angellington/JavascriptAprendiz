// Create a Function on BUTTON

const formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function(e){
    // Previnindo o Evento padrao do formulario
    e.preventDefault();
    
    // Capturar os Elementos HTML
    const inputName = document.querySelector('#name')
    const inputLastName = document.querySelector('#last_name')
    const inputBirth = document.querySelector('#birth')
    const inputEmail = document.querySelector('#email')
    const inputPassword = document.querySelector('#password')

    // Capturar os valores ddos Elementos HTML
    Name = inputName.value;
    LastName = inputLastName.value;
    Birth = inputBirth.value;
    Email = inputEmail.value;
    Password = inputPassword.value;
    
    // Usa-se a desestruturação  para desempacotar o objeto em variaveis separadas 
    const {msg, isValid} = validacao(Name, LastName, Birth, Email, Password);

    // Chamar o validador
    validator(msg, isValid)
})


// Função de Validações
function validacao(Name, LastName, Birth, Email, Password){
    if (Name.trim() == ''){
        return {msg: 'Insira um nome', isValid: false}
    }
    if (LastName.trim() == ''){
        return {msg: 'Insira um sobrenome', isValid: false}
    }
    if (Birth == ''){
        return {msg: 'Insira uma Data de Nascimento', isValid: false}
    }

    // Criar a idade pela função calcular idade
    const idade = calcularIdade(Birth);
    if (idade < 12){
        return {msg: 'Você é nênê, não pode!', isValid: false}
    }
    if (idade > 120){
        return {msg: 'Temos um ser imortal!! Buahhahaha', isValid: false}
    }

    if (Email == ''){
        return {msg: 'Insira um Email', isValid: false}
    }

    // Criar a função de validar email (se o Validar Email for falso, entao) 
    if (!validarEmail(Email)){
        return {msg: 'Insira um email válido', isValid: false}
    }

    if (Password.trim() == ''){
        return {msg: 'Insira uma senha', isValid: false}
    }
    
    // Validar senha
    const senhaValidacao = validarSenha(Password);
    if (!senhaValidacao.isValid){
        return {msg: senhaValidacao.msg, isValid: false}
    }

    return {msg: 'Passou do Formulario', isValid: true}
    }
    

// Função para calcular idade
function calcularIdade(Birth){
    const hoje = new Date();
    const nascimento = new Date(Birth); 

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())){
        idade--;
    }

    return idade;
}



// Função para Verificar o Email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função validar password
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





// Criar Função Criar paragrafo
function CriarP() {
    const p = document.createElement('p')
    return p   
}

// Função Mostrar Validação
function validator(msg, isValid) {
    const p = CriarP()
    const validatewarn = document.querySelector('.validatewarn')
    p.innerHTML = msg
    if(isValid === true){
        p.classList.add('correct')
    } else {
        p.classList.add('bad')
    }

    validatewarn.innerHTML = ' '
    validatewarn.appendChild(p)  
}