const verdadeira = true;

// Let tem escopo de bloco { .... bloco }
// Var so tem escopo de função


let nome = 'Luiz';
var nome2 = 'Luiz2';

var nome2 = 'Minerva'


if (verdadeira) {
    let nome = 'Mi'
    console.log(nome, nome2)

    if(verdadeira) {
        let hello = console.log('Hello World');
        console.log(nome, nome2);
    }
}
function falaOi() {
    var nome = 'Angel';
    console.log('Oi',  nome);
}

falaOi()


