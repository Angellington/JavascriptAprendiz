console.clear();
// Import libraries
const prompt = require('prompt-sync')()

// Function to Menu exibition
function showMenu(){
    let opcao = prompt(" Escolha uma opção: \n" +
        "(1) - Cadastrar\n" +
        "(2) - Atualizar\n" +
        "(3) - Excluir\n" +
        "(4) - Visualizar\n" +
        "(5) - Sair \n"
    );

    return parseInt(opcao);
}

function execOption(opcao) {
    console.clear()
    switch (opcao) {
        case 1:
            console.log('Você escolheu: Cadastrar!')
            break;
        case 2:
            console.log("Você escolheu: Atualizar!")
            break;
        case 3:
            console.log("Você escolheu: Excluir!")
            break;
        case 4:
            console.log("Você escolheu: Visualizar")
            break;
        case 5:
            console.log("Você escolheu: Sair")
            break;
        default:
            console.log("Sua opção não é válida!")
            
    }
}

function iniciarMenu() {
    let sair = false;

    while (!sair){
        let opcao = showMenu();

        if (opcao === 5) {
            sair = true
        }

        execOption(opcao);
    }
}


iniciarMenu()