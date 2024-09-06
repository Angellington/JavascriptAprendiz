// Select Form and Main Function
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e){
    //Previnir o evento padrão
    e.preventDefault();

    // Capturar os Campos do Formulário
    const inputName  = document.querySelector("#name");
    const inputLastName = document.querySelector('#lastname');
    const inputBirthdate = document.querySelector('#birthdate');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');

    
    // Capturar os Valores dos Campos
    name = inputName.value;
    lastname = inputLastName.value;
    birthdate = inputBirthdate.value;
    email = inputEmail.value;
    password = inputPassword.value;

    // Para teste

    const {msg, isValid} = validate(name, lastname, birthdate, email, password)

    validar(msg, isValid)
})

// Função para a Validação
function validate(name, lastname, birthdate, email, password){
    // Validar nome
    if (name.trim() == ''){
        return{msg: 'Digite um nome', isValid: false}
    }
    // Validar sobrenome
    if (lastname.trim() == ''){
        return{msg: 'Digite um sobrenome', isValid: false}
    }
    // Validar Data de Nascimneto
    if (birthdate == ''){
        return{msg: 'Nos informe uma data de nascimento', isValid: false}
    }
    const age = ageVerify(birthdate);
    if (age < 12){
        return{msg: "You're baby!", isValid: false}
    }

    if (age > 120){
        return{msg: "You're immortal", isValid: false}
    }

    // Validar email
    if (email.trim() == ''){
        return{msg: 'Please, tab your email', isValid: false}
    }
    if (!emailVerify(email)) {
        return{msg: 'Incorrect Email', isValid: false}
    }

    // Validar senha
    const passwordVerif = passwordVerify(password);
    if (!passwordVerif.isValid){
        return {msg: passwordVerif.msg, isValid: false}
    }


    return {msg: 'Formulário Válido', isValid: true}


}




// Função para verificar a idade
function ageVerify(birthdate){
    const today = new Date();
    const birthday = new Date(birthdate)

    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();

    if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())){ 
        idade--;
    }
    return age   
}

// Função para verificar o email
function emailVerify(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função para verificar a senha
function passwordVerify(password){
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






// Criar paragrafo
function create_p(){
    const p = document.createElement('p')
    return p
}

// Função para mostrar na tela o ALERTA
function validar(msg, isValid){
    const verify = document.querySelector('.verify');
    const p = create_p()
    p.innerHTML = msg
    
    if (isValid == true){
        p.classList.add('Good')
    } else {
        p.classList.add('Bad')
    }    
    verify.innerHTML = ''

    verify.appendChild(p);
}