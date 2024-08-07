console.clear()
const alunos = ['Angel', 'Minerva', 'João']
const funcionarios = ['Camilo', 'Bel', 'Carmim', 'Sabrina', 'Carlos']

console.log(alunos)
console.log(alunos[0])
console.log(funcionarios)
console.log(funcionarios[1])

console.log(alunos.length)
console.log(funcionarios.length)

alunos.push('Sofia')
alunos.unshift('Marcos')

console.log(alunos)

console.log(alunos.slice(0, 2))

const removido = alunos.pop(2)

console.log(removido)
console.log(alunos)

console.log(funcionarios.shift(2))

delete alunos[2]

console.log(alunos)

console.clear()

const estagiarios = ['Angel', 'Minerva', 'Wellington', 'Anjo de Neve', 'SuperRetro bits', 'Yukenshi']
console.log(estagiarios)
console.log(typeof estagiarios)
console.log()

