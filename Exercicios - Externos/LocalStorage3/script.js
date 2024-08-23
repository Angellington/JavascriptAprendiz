// LocalStorage
localStorage.setItem("Dubladora", "Isabel")
localStorage.clear()

// Definir o Objeto
let dubladora = {
    nome: "Minerva",
    idade: "19",
    genero: "Masculino",
    voz1: "Flexível",
    voz2: "Fina",
    youtube: "CorteDeInverno"
}
//  Parte 1 - Selecionar o Objeto
let PlaceObject = document.querySelector("#teste1")
PlaceObject.innerHTML = dubladora + (typeof dubladora)

// Parte 2 - Converter e Entregar ao Local Storage
localStorage.setItem("Dublador", JSON.stringify(dubladora))
let teste2 = document.querySelector("#teste2")
teste2.innerHTML = localStorage + (typeof localStorage)

// Parte 3 - getItem - Resgatar o item CHAVE do Local Storage
let getDubladora = localStorage.getItem("Dublador")
let teste3 = document.querySelector("#teste3")
teste3.innerHTML = getDubladora + (typeof getDubladora)

// Parte 4 - Consegui o Objeto, agora é pegar
DubladoraObject = JSON.parse(getDubladora)
teste4 = document.querySelector("#teste4")
teste4.innerHTML = DubladoraObject.voz1