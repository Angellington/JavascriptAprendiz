function executarDepois(callback, tempo){
    setTimeout(callback, tempo);
}

function mensagem(){
    console.log("This message in the bootle");
}

executarDepois(mensagem, 2000)