// conta bancaria

function ContaBancaria(titular, saldo, numeroDaConta){
    this.titular = titular;
    this.saldo = saldo;
    this.numeroDaConta = numeroDaConta;

    this.depositiar = (valor) => {
        return this.saldo += valor;
    }
    this.sacar = (valor) => {
        if(valor > this.saldo){
            return `Saque negado! Valor acima da conta bancária!`
        } else {
            return this.saldo -= valor;
        }
    }
    this.extrato = () => {
        return `O saldo atual é: ${this.saldo}`;
    }
}
console.clear();

const conta = new ContaBancaria("Minerva", 0, 1710)
console.log(conta.extrato())
console.log(conta.depositiar(10))
console.log(conta.depositiar(10))
console.log(conta.depositiar(10))
console.log(conta.depositiar(10))
console.log(conta.depositiar(10))
console.log(conta.depositiar(10))
console.log(conta.sacar(42))