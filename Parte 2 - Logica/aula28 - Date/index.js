console.clear();

// const tres_horas = 60 * 60 * 3 * 1000;

// const um_dia = 60 * 60 * 24 * 1000

// const data = new Date(0 + tres_horas + um_dia);

//                    YYYY  MM DD  H   M   S   MS
const data = new Date(2007, 9, 17, 7, 45, 24, 525); 
console.log(data.toString()); // Output: Wed Oct 17 2007 07:45:24 GMT-0500

//                      YYYY-MM-DD
const ndata = new Date('2007-10-18');
console.log(ndata.toString()); // Output:Tue Oct 16 2007 19:00:00 GMT-0500

//                      YYYY-MM-DD HH:MM:SS
const adata = new Date('2007-10-17 07:45:53');
console.log(data.toString()); // Output: Wed Oct 17 2007 07:45:24 GMT-0500

//Get Date
console.log('Weekday', data.getDate()); // Output: Weekday 17
console.log('Month', data.getMonth()); // Output: Month 9
console.log('Year', data.getFullYear()); // Output: Year 2007
console.log('Day', data.getDay()); // Output: Day 


function Left_Zero(num){
    return (num >= 10) ? num : `0${num}`
}

function formataData(datinha) {
    const dia = datinha.getDate();
    const mes = Left_Zero(datinha.getMonth() + 1)
    const ano = datinha.getFullYear();

    return `${dia}/${mes}/${ano}`
}

const datinha = new Date();
const data_brasil = formataData(datinha)
console.log(data_brasil)