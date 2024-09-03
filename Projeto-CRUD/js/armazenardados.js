// CRUD - Fase 1 (CRIAR)

// Criar o objeto
// info = {
//     nome: 'Null',
//     sobrenome: 'Null',
//     genero: 'Null',
//     datanasc: 'Null',
//     email: 'Null'
// }

// Criar um Local Storage
// localStorage.setItem('info', JSON.stringify(info))

// Permitir que os dados enviados pelo Form seja atualizado no Objeto do LocalStorage

// Capturar as queries do Formulário
let FormNome = document.querySelector('form #nome')
let FormSobrenome = document.querySelector('form #sobrenome')
let FormGenero = document.querySelectorAll('form input[name="gender"]')
let FormNasc = document.querySelector('input[type="date"]')
let FormEmail = document.querySelector('form #email')
let FormEnviar = document.querySelector('form .enviar')



// Função de Verificar Idade
function verificarIdade(dataNasc) {
    const hoje = new Date();
    const dataNascimento = new Date(dataNasc);
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const m = hoje.getMonth() - dataNascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    return idade
}


// Evento dos valores
FormEnviar.addEventListener('click', function(event){
    // Guardar os dados em variaveis
    event.preventDefault();

    let nomeValor = FormNome.value
    let sobrenomeValor = FormSobrenome.value
    let generoValor;

    // Loop para encontrar o Genero selecionado
    for (let FormGeneros of FormGenero){
        if (FormGeneros.checked){
            generoValor = FormGeneros.value
            break
        }
    }

    // Pegar a data do input
    let nascValor = FormNasc.value
    let emailValor = FormEmail.value

    // Validar Formulário
    if(FormNome == ""){
        alert("É necessário um nome");
    }

    if(FormSobrenome == ""){
        alert("É necessário um sobrenome");
    }
    const idade = verificarIdade(nascValor);
    if (idade < 12) {
        alert("É necessário ter 12 anos para acessar a internet, pirralho.")
        return;
    }



    // Output dos valores

    alert(
        "Nome: " + nomeValor + "\n" +
        "Sobrenome: " + sobrenomeValor + "\n" +
        "Gênero: " + generoValor + "\n" +
        "Data de Nascimento: " + nascValor + "\n" +
        "Email: " + emailValor
    )

    // Passar para o objeto info
    info = {
        nome: nomeValor,
        sobrenome: sobrenomeValor,
        genero: generoValor,
        datanasc: nascValor,
        email: emailValor
    }
    localStorage.setItem('info', JSON.stringify(info))



})





// Retornar os dados atualizados na tabela