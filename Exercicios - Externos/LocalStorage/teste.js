// 1 - Inserir Dados (Chave e Valor) Como objeto
localStorage.setItem("name", "Minerva")

// 2 - Restart sem perder dados

// 3 - Resgatar item no LocalStorage
const name = localStorage.getItem("name")

console.log(name)

// 4 - Resgate de item que não existe
const lastName = localStorage.getItem("lastName")
console.log(lastName)

if(!lastName){
    console.log("Sem sobrenome")
}

// 5 - Remover item
// localStorage.removeItem("name")

// 6 - Limpar todos os itens
localStorage.setItem("a", 1)
localStorage.setItem("b", 2)

// console.log(typeof localStorage.getItem("a"))

localStorage.clear();
// Ficar atento ao key


// Session Storage
sessionStorage.setItem("Number", 123)

// - Reiniciar e perder dados
const n = sessionStorage.getItem("Number");

console.log(n)

// sessionStorage.removeItem("number");

sessionStorage.clear()



// 9 - Salvar Objeto
const person = {
    name: "Minerva",
    age: "19",
    job: "Dubber",
}
// Vai vir como objeto, deve levar para JSON

// localStorage.setItem("person", person)

// Strinfica converter para JSON
localStorage.setItem("person", JSON.stringify(person))

const getPerson = localStorage.getItem("person")

console.log(getPerson)

// Passar para JSON a variavel - para poder usar das propriedades
const personObject = JSON.parse(getPerson)

console.log(typeof personObject)
console.log(personObject.job)