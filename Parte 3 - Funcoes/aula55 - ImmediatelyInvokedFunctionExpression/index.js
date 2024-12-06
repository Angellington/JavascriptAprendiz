// Indefinir que toquem no escopo global com funções e etc

// IIFE -> Immediately Invoked Function Expression
(function(idade, peso, altura) {
    console.clear()

    const sobrenome = "Minerva";
    function criaNome(nome){
        return nome + ' ' + sobrenome
    };

    function falaNome(){
        console.log(criaNome('Isa'))
    }

    falaNome()
    console.log(idade, peso, altura)

})(19, 55, 1.65)



// const nome = "Hoi World"
