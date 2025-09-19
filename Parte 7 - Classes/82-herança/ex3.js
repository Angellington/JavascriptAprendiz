// Crie classe Funcionario com:
// - propriedades: nome, salarioBase
// - método: calcularSalario() que retorna salarioBase

// Crie classe Gerente que herda de Funcionario:
// - adiciona propriedade: bonus
// - sobrescreve calcularSalario() para retornar salarioBase + bonus

// Crie classe Vendedor que herda de Funcionario:
// - adiciona propriedade: comissao, vendas
// - sobrescreve calcularSalario() para retornar salarioBase + (vendas * comissao)

// Teste:
// const gerente = new Gerente("João", 5000, 2000);
// const vendedor = new Vendedor("Maria", 3000, 0.1, 10000);
// console.log(gerente.calcularSalario());  // 7000
// console.log(vendedor.calcularSalario()); // 4000

class Funcionario{
    constructor(nome, salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase
    }

    calcularSalario(){
        return `Salário: R$${this.salarioBase}`
    }
}


class Gerente extends Funcionario{
    constructor(nome, salarioBase, bonus){
        super(nome, salarioBase);
        this.bonus = bonus;
    }

    calcularSalario(){
        return `Salário: R$${this.salarioBase + this.bonus}`;
    }
}

class Vendedor extends Funcionario{
    constructor(nome, salarioBase, comissao, vendas){
        super(nome, salarioBase);
        this.comissao = comissao;
        this.vendas = vendas;
    }

    calcularSalario(){
        return `Salário: R$${this.salarioBase + (this.vendas * this.comissao)}`;
    }
}

const g1 = new Gerente("João", 5000, 2000);
console.log(g1.calcularSalario());

