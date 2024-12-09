function saudacao(nome){
    return function(){
        console.log(`Hoi, ${nome}`)
    };
}

setTimeout(saudacao("Minerva"), 2000)