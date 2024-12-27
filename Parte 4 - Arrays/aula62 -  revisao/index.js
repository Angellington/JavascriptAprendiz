console.clear()
// const nome = ["MInerva", "Batata", "Faria LIma"]
// //  String,  Objetos, Funções, 
// nome[2] = 'Joanina';
// delete nome[2];
// console.log(nome)

const nomes = new Array("Minerva", "Maria", "Sophia");

console.log(nomes);
// Arrays são dados por referencia
let novo  = [...nomes];
novo.pop()
let removido = nomes.shift()
console.log(removido)

nomes.push("ARSÉNE");
nomes.unshift("Joker")

const array =  ["Arsene", "Orpheus", "Pixie"]
const nuevo = array.slice(0, 2)
console.log(nuevo)
console.log(nomes)

const nomezito = "MInerva Alves BArbosa";
const nomesi = nomezito.split(" ");
console.log(nomesi)
console.log(nomesi.reverse())