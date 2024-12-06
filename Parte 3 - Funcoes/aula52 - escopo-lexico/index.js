console.clear()

const nome = "Minerva";

function falaNome(){
    console.log(nome)
}

// falaNome()
function usaFalaNome(){
    const nome = "Alves"
    falaNome()
}

usaFalaNome()