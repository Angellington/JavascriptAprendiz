const nomes = ["MInerva", "ALves", "Barbosa", "Valverde"]

console.clear()

console.log(nomes)

//nomes.splice(indice, delete, elm1, elm2)
console.log(nomes.splice(-1, 1, "Matheus", "Marcos", "Dudu", "Kakau"))
console.log(nomes)

nomes.splice(0, 1, "Minerva")
console.log(nomes)