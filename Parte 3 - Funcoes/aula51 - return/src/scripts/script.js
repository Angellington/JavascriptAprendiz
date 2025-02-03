// function sum(a, b){
//     return a + b
// }

document.addEventListener("click", function(e){
    document.body.style.backgroundColor = 'red'
});

function createPeson(name, LastName){
    return { name: name, LastName: LastName};
}

const p1 = createPeson("Minerva", "Alves")
const p2 = createPeson("Alb", "Oblivion")

console.log(p1, p2)

