console.clear()

function criarCarro(model, fuel){
    return {
        model: model,
        fuel: fuel,
        charge(qntd) {
            this.fuel += qntd;
        },
        andar()  {
            if(this.fuel === 0){
                console.log("Carro nao pode andar! Sem combustivel")
            } else {
                console.log("Carro está andando")
                this.fuel -= 10;
            }
        }
    
    }
}

car = criarCarro("fusca", 1800);
console.log(car)
car.charge(200)
console.log(car)

car.andar()
console.log(car)