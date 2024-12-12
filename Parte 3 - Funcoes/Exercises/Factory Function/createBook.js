// Create Book
console.clear()

function createBook(title, autor){
    return {
        title, autor,
        resumo() {
            console.log(`O livro ${title} foi escrito por ${autor}.`)
        }
    };
}

const b1 = createBook("Um Livro para a Garota B", "Minerva Alves")
const b2 = createBook("The Last Melancoly", "Minerva Alves")

b1.resumo()
b2.resumo()

const b3 = createBook("O Homem de Giz", "Tudor")
b3.resumo()