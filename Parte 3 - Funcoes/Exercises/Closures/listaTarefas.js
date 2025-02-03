console.clear()

/* 
Criar uma função que gerencie uma lista de tarefas... Adicionar tarefa, listar todas, remover tarefa pelo indice

Usar função, dentro de objeto função
*/

function listaTarefas(){
    let tarefas = []
    return {
        adicionar: function(tarefa){
            tarefas.push(tarefa)
            console.log(`[ ${tarefa} ] foi adicionado à Lista de Tarefas!`)
        },
        listar: function(){
            console.log("-=-=-=-Abrindo a Lista de Tarefas-=-=-=-=")
            for(let i = 0; i < tarefas.length; i++){
                console.log(`[${i}] - ${tarefas[i]}`)
            }
            console.log("-=-=-=-Fechando a Lista de Tarefas-=-=-=-=")
        },
        remover: function(i){
            if(i >= 0 && i < tarefas.length){
                console.log(`Tarefa foi removida: ${tarefas[i]}`)
                tarefas.splice(i, 1)
            } else {
                console.log("Indice invalido")
            }
        }
    }
}


const lista = listaTarefas();
lista.adicionar("Varrer a área")
lista.adicionar("Limpar o carro")
lista.listar()
lista.remover(1)
lista.listar()