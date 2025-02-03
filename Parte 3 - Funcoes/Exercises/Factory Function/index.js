// Função que cria e retorna um novo objeto

function carro(modelo, cor){
    return {
        modelo, cor, 
        ligar(){
            console.log("Carro está ligado!")
        }
    };
}


car1 = carro("V1", "Branco")

car1.ligar()

let fusca = carro("Fusca", "Azul")

//