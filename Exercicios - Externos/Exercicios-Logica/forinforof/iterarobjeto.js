console.clear()

const pessoa = {
    nome: 'Maria',
    idade: 25,
    cidade: 'São Paulo'
}

for (let i in pessoa){
    console.log(i + ": " + pessoa[i])
}