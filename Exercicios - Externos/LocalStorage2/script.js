// 1 - localStorage.setItem("key", "valor") - Adicionar algo no Armazenamento Local
localStorage.setItem("Funcionario", "David")


// 2 - localStorage.getItem("chave")
let itemObtained = document.querySelector("#itemObtained")
let funcionario = localStorage.getItem("Funcionario")

itemObtained.textContent = funcionario

// 3 - localStorage.removeItem("chave")
let itemRemovido = document.querySelector("#itemRemovido")
// localStorage.removeItem("Funcionario")


// Remove tudo!!!
localStorage.clear()


/* -------- Salvar Objeto -------- */
const dublador = {
    nome:"Duda",
    nickname: "Mini Knight",
    genero: "Feminino",
    voz1: "Fina",
    voz2: "Flexível",
    youtube: "Mini Knight",
    idade: "16",
    aniversario: "2007-06-23",
    ocupacao: "dubladora"
}

// Aqui ele está trazendo o tipo do objeto
let teste1 = document.querySelector("#teste1")
teste1.innerHTML = dublador + (typeof dublador)

// Convertendo e entregando ao Local Storae
localStorage.setItem("dublador", JSON.stringify(dublador))
let teste2 = document.querySelector("#teste2")
teste2.innerHTML = localStorage

// Conseguir o Objeto para a Chave em uma variavel
let getDublador = localStorage.getItem("dublador") // Pegar a chave
let teste3 = document.querySelector('#teste3')
teste3.innerHTML = typeof getDublador // Não retorna

// Transformar em JSON
let dubladorObject = JSON.parse(getDublador)
let teste4 = document.querySelector("#teste4")
teste4.innerHTML = dubladorObject.genero



