console.clear()

// Simular conta bancaria. A função deve permitir depositar e sacar dinheiro
// Mas o saldo nao pode ser acessado diretamente.

/*
A função cria conta sera acionada

a funcao criaconta tera duas funcoes acessiveis. Sacar, Depositar, Ver Saldo

tem objeto dentro da funcao, que possui objeto funcao

*/

function criarConta(){
    let saldo = 0;

    return {
        depositar: function(valor){
            saldo += valor;
            console.log(`Depósito feito de ${valor}R$, Saldo: ${saldo}`)
        },
        sacar: function(valor){
            if(valor > saldo){
                console.log("Saldo Insuficiente!")
            } else {
                saldo -= valor
                console.log(`Valor sacado de ${valor}R$, Saldo: ${saldo}`)
            }
        }
    };
}


// Acessar a conta
const conta = criarConta();

conta.depositar(20)
conta.depositar(20)
conta.sacar(13)
conta.sacar(13)
conta.sacar(20)
conta.depositar(100)