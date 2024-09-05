// Create a Function on BUTTON

const formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    const inputName = document.querySelector('#name')
    const inputLastName = document.querySelector('#last_name')
    const inputBirth = document.querySelector('#birth')
    const inputEmail = document.querySelector('#email')
    const inputPassword = document.querySelector('#password')

    name = inputName()
})