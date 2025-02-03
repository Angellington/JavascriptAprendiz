function criarContaBancaria(saldoInicial){
    return {
        saldo: saldoInicial,
        depositar(valor){
            this.saldo += valor;
        },
        sacar(valor){
            this.saldo -= valor;
        }
    };
}

conta = criarContaBancaria(100)

console.clear()
console.log(conta.saldo)
conta.depositar(100)
console.log(conta.saldo)
conta.sacar(2000)
console.log(conta.saldo)