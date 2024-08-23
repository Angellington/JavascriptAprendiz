console.clear()


const hora = 24;

// if (hora < 12) {
//     console.log("Bom dia")
//     console.log(1+1)
// } else {
//     console.log("Boa tarde?")
// }


// Respeitará o Horário
if (hora < 12){
    console.log("Bom dia!!")
} else if (hora > 12 && hora < 18){
    console.log("Boa tarde!")
} else if (hora >= 18 && hora < 23){
    console.log("Boa noite!")
} else {
    console.log("A hora não é válida!")
}

// if - Pode ser usado sozinho
const nobara = 'MORTA'
if (nobara === 'viva'){
    console.log("Kugisaki está vivaaaa!!!")
}

// * - Só pode um ELSE na condicional
// * - Pode usar condições em if, else if, e else