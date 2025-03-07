/* Não existe class no JS - HERANÇA, usamos protótipos*/
/* JS - Orientado a Protótipos */

const animal = {
    som: 'som de animal',
    tipo: 'animal',
    emitirSom: function(){
        console.log(this.som + this.som)
    }
}

// animal.emitirSom();

const gatinho = {
    som: "miau",
    tipo: 'gato'
}

//                      filho    pai
Object.setPrototypeOf(gatinho, animal)
// gatinho.emitirSom()

const gatinhoRaivo = {
    tipo: 'gatinhoRaivo',
    miarForte: function(){
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatinhoRaivo, gatinho)

gatinhoRaivo.miarForte()

console.log('TESTES')
