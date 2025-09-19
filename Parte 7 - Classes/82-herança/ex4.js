// Crie classe Veiculo com:
// - propriedades: marca, modelo, ano

// Crie classe Motorizado com:
// - propriedades: potenciaMotor, combustivel

// Crie classe Carro que herda de Veiculo e Motorizado:
// - deve receber todas as propriedades no construtor
// - método: descricao() que retorna todas as informações

// Crie classe Bicicleta que herda apenas de Veiculo:
// - adiciona propriedade: numeroMarchas
// - método: descricao() que retorna informações

// Dica: Use composição para a herança múltipla

// Teste:
// const carro = new Carro("Toyota", "Corolla", 2023, "150HP", "Gasolina");
// const bike = new Bicicleta("Caloi", "Elite", 2023, 21);
// console.log(carro.descricao());
// console.log(bike.descricao());


class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca; 
        this.modelo = modelo;
        this.ano = ano;
    }
}

class Motorizado{
    constructor(potenciaMotor, combustivel){
        this.potenciaMotor = potenciaMotor;
        this.combustivel = combustivel;
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, ano, potenciaMotor, combustivel){
        super(marca, modelo, ano);
        this.motor - new Motorizado(potenciaMotor, combustivel);
    }
    descricao(){
        return `Carro: ${this.marca} ${this.modelo} (${this.ano}), Motor: ${this.motor.potenciaMotor}, Combustível: ${this.motor.combustivel}`;
    }
}

const carro = new Carro("Toyota", "Corolla", 2023, "150HP", "Gasolina");
console.log(carro.descricao());