console.clear()

const date = new Date('2024')
const year = date.getFullYear()

if(year % 4){
    console.log('O ano é bissexto')
} else {
    console.log('Não bissexto')
}

