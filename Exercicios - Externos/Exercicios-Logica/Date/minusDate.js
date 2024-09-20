console.clear();

const date_now = new Date();
const date_birth = new Date('2005-06-17')

let idade = date_now.getFullYear() - date_birth.getFullYear();

const mes = date_now.getMonth() - date_birth.getMonth();

const dia = date_now.getDate() - date_birth.getDate();

//    (true) OR  ((Se mes for zero e date ow)) MENOR (date_birthdate) idade diminui um
if (mes < 0 || (mes === 0 && date_now.getDate() < date_birth.getDate())) {
    idade--
}

console.log(`Idade: ${idade} anos`)