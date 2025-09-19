// Crie classe ContaBancaria (abstrata) com:
// - propriedades: numeroConta, saldo, titular
// - métodos: depositar(valor), sacar(valor) abstrato, consultarSaldo()

// Crie classe ContaCorrente que herda de ContaBancaria:
// - adiciona propriedade: limiteChequeEspecial
// - implementa sacar(valor) considerando o limite

// Crie classe ContaPoupanca que herda de ContaBancaria:
// - adiciona propriedade: taxaRendimento
// - método: aplicarRendimento() que aumenta saldo conforme taxa
// - implementa sacar(valor) sem permitir saldo negativo

// Teste:
// const cc = new ContaCorrente("123", 1000, "João", 500);
// const cp = new ContaPoupanca("456", 2000, "Maria", 0.05);
// cc.sacar(1200);
// cp.aplicarRendimento();
// console.log(cc.consultarSaldo()); // -200 (dentro do limite)
// console.log(cp.consultarSaldo()); // 2100

class ContaBancaria{
    constructor(numeroConta, saldo, titular){
        if(this.constructor === ContaBancaria){
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        } else {
            console.log("Valor de depósito deve ser positivo.");
        }
    }
    sacar(valor){
        throw new Error("Método sacar() deve ser implementado na subclasse.");
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(numeroConta, saldo, titular, limiteChequeEspecial){
        super(numeroConta, saldo, titular);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor){
        if(valor > 0 && valor <= this.saldo + this.limiteChequeEspecial){
            this.saldo -= valor;
        }
    }
    consultarSaldo(){
        return this.saldo;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(numeroConta, saldo, titular, taxaRendimento){
        super(numeroConta, saldo, titular);
        this.taxaRendimento = taxaRendimento;
    }
    
    sacar(valor){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
        }
    }
    aplicarRendimento(){
        this.saldo += this.saldo * this.taxaRendimento;
    }
    consultarSaldo(){
        return this.saldo;
    }
}

const cc = new ContaCorrente("123", 1000, "João", 500);
const cp = new ContaPoupanca("456", 2000, "Maria", 0.05);
cc.sacar(1200);
cp.aplicarRendimento();
console.log(cc.consultarSaldo()); // -200 (dentro do limite)
console.log(cp.consultarSaldo()); // 2100