// O Closure se lembra das variaveis criadas em seu escopo

function externa(){
    const mensagem = "Olá, Closure";
    function interna(){
        console.log(mensagem);
    }
    return interna;
}

const func = externa();
func()