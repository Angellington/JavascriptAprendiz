console.clear('19690-12-31 00:00:00');

const data = new Date('1969-12-31 00:00:00');
const diaSemana = data.getDay();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = 'Inválido';
    }
    return diaSemanaTexto;
}

// let diaSemanaText = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

// console.log(diaSemanaText[diaSemana])



/*  Controle do Fluxo de Codigo IF/ELSE */

// if (diaSemana === 0){
//     diaSemanaTexto = 'Domingo'
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda'    
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça'    
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta'    
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta'    
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta'    
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado'    
// } else {
//     console.log("Inválido")
// }

// Switch / Case ( break and default)



console.log(getDiaSemanaTexto(diaSemana))