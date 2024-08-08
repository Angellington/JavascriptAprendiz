console.clear()

const pessoa1 = {
    nome: 'Minerva',
    sobrenome: 'Alves',
    idade: 21,

    fala() {
        console.log(`${this.nome} está dizendo oi! Tenho ${this.idade}`)
    },
    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala() // Output: Minerva está dizendo oi! Tenho 21
pessoa1.incrementaIdade() // A idade é incrementada
pessoa1.fala() // Output: Minerva está dizendo oi! Tenho 22
pessoa1.incrementaIdade() // A idade é incrementada
pessoa1.fala() // Output: Minerva está dizendo oi! Tenho 22
pessoa1.incrementaIdade() // A idade é incrementada
pessoa1.fala() // Output: Minerva está dizendo oi! Tenho 22
