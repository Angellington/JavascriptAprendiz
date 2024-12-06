// Global
function returnFunction(nome){
    // Mãe
    return function(){
        // Eu
        return nome;
    };
};

const funcao = returnFunction("Minerva");
console.dir(funcao)

