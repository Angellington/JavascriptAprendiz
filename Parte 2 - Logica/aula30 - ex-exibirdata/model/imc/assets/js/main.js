// Main
/* Definir o que ser feito!

X - O dia da semana, o dia, o ano e o horário

1 - Exibir o dia da semana;
2 - Exibir o dia;
3 - Exibir o mês;
4 - Exibir o ano;

*/

// - Capturar o elemento
const texth2 = document.getElementById('date');
const texth3 = document.getElementById('hour');

// Pegar o date e exibir o dia da semana ('Segunda', 'Terça'...)

function formatarNumero(numero) {
    return numero < 10 ? `0${numero}` : numero;
}


function updateTime(){
    const date = new Date()

// Pegar o numero do dia nome
const dayname = (date.getDay())
// Pegar o dia do mês
const day = (date.getDate())
// Peger o mes
const monthname = (date.getMonth() + 1)
// Pegar o ano
const year = (date.getFullYear())

// Função de Trazer o nome do Dia da Semana
function DayName(dayname){
    let dayname_text;
    
    switch(dayname){
        case 0:
            dayname_text = 'domingo';
            break;
        case 1:
            dayname_text = 'segunda-feira';
            break;
        case 2:
            dayname_text = 'terça-feira';
            break;
        case 3:
            dayname_text = 'quarta-feira';
            break;
        case 4:
            dayname_text = 'quinta-feira';
            break;
        case 5:
            dayname_text = 'sexta-feira';
            break;
        case 6:
            dayname_text = 'sábado'
            break
        default:
            dayname_text = 'invalid'
    }
    return dayname_text;
}
// Função para trazer o nome do mes
function MonthName(monthname){
    let monthname_text;

    switch(monthname){
        case 1:
            dayname_text = 'janeiro';
            break;
        case 2:
            dayname_text = 'fevereiro';
            break;
        case 3:
            dayname_text = 'março';
            break;
        case 4:
            dayname_text = 'abril';
            break;
        case 5:
            dayname_text = 'maio';
            break;
        case 6:
            dayname_text = 'junho';
            break;
        case 7:
            dayname_text = 'julho';
            break;
        case 8:
            dayname_text = 'agosto';
            break;
        case 9:
            dayname_text = 'setembro';
            break;
        case 10:
            dayname_text = 'outubro';
            break;
        case 11:
            dayname_text = 'novembro';
            break;
        case 12:
            dayname_text = 'dezembro';
            break;
        default:
            dayname_text = 'Invalid'
    }
    return dayname_text
}
const hour = `(${formatarNumero(date.getHours()) - 1}:${formatarNumero(date.getMinutes())}) ${date.getSeconds()} ${date.getMilliseconds()}`


texth2.innerHTML = `${DayName(dayname)}, ${day} de ${MonthName(monthname)} de ${year}`;
texth3.innerHTML = `${hour}`;


}

// Trazer a hora


setInterval(updateTime, 0.1);
updateTime();

// Capturar a imagem
const img = document.getElementsByClassName('circle')[0]

// Criar a div



function criar(){
    let div = document.createElement('div');
    div.classList.add('img')

    const date = new Date();
    const hourn = date.getHours() - 1;
    


    if(hourn > 5 && hourn < 12){
        const bg_morning = (div.id = 'morning')
    }
    if(hourn >= 12 && hourn < 18){
        const bg_afternoon = (div.id = 'afternoon')
    }
    if(hourn >= 18 && hourn < 24){
        const bg_noon = (div.id = 'noon')
    }

    img.appendChild(div)

}

criar()











