console.clear();
// - Import libraries;
const prompt = require("prompt-sync")();
const color = require("colors")


/* 
1. O usuario vai escolher uma opção;
2. E vai exibir a opção escolhida;
3. Vai ter o botão de sair.

*/

function showMenu() {
    console.log(` Choose your option: \n` +
        `(1) - Register` + `(2) - Login ` + `(3) - Delete` + `(4) - View ` + `(5) - Quit`);
        
        let input = prompt(': ');
        let opcao = Number(input)
        return opcao;
}

function execMenu(opcao){
    switch (opcao){
        case 1:
            console.log('Register...');
            break;
        case 2:
            console.log('Login...');
            break;
        case 3:
            console.log('Deleting...');
            break;
        case 4:
            console.log('Viewing...');
            break;
        case 5:
            console.log('Quiting...');
            break;
        default:
            console.clear();
            console.log('Try again...')
    }
}

function StarMenu(){
    let quit = false;

    while (!quit){
        let opcao = showMenu();

        if (opcao === 5){
            quit = true
        }
        execMenu(opcao)
    } 
}

StarMenu();

