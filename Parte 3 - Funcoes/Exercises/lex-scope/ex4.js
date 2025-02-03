function createGreetings(greeting){
    return function(nome){
        console.log(`${greeting}, ${nome}`)
    };
}

const ola = createGreetings("Olá");
ola("Minerva")