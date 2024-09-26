const h1 = document.querySelector('.container h1');
const data = new Date()
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch(diaSemana) {
        case 0: diaSemanaTexto = 'domingo'; break;
        case 1: diaSemanaTexto = 'segunda-feira'; break;
        case 2: diaSemanaTexto = 'terça-feira'; break
        case 3: diaSemanaTexto = 'quarta-feira'; break;
        case 4: diaSemanaTexto = 'quinta-feira'; break;
        case 5: diaSemanaTexto = 'sexta-feira'; break;
        case 6: diaSemanaTexto = 'sábado'; break;
        default:
            diaSemanaTexto = 'Inválido';
    }
    return diaSemanaTexto;
}

function getNomeMesTexto(numeroMes) {
    let numero;
    switch(numeroMes) {
        case 0: numeroMes = 'janeiro'; break;
        case 1: numeroMes = 'fevereiro'; break;
        case 2: numeroMes = 'março'; break
        case 3: numeroMes = 'abril'; break;
        case 4: numeroMes = 'maio'; break;
        case 5: numeroMes = 'junho'; break;
        case 6: numeroMes = 'julho'; break;
        case 7: numeroMes = 'agosto'; break
        case 8: numeroMes = 'setembro'; break;
        case 9: numeroMes = 'outubro'; break;
        case 10: numeroMes = 'novembro'; break;
        case 11: numeroMes = 'dezembro'; break;
        default:
            numeroMes = 'Inválido';
    }
    return numeroMes;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMesTexto(numeroMes)

    return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes} ` + 
    `de ${data.getFullYear()} ${data.getHours()}: ${data.getMinutes()}` 
    )
}


h1.innerHTML = criaData(data)





// Segunda Maneira

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});

