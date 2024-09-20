console.clear()

// Comparar duas data e trazer qual delas é a mais recente
const date_A = new Date('2007-10-18');
const date_B = new Date('2005-06-20');
const now = new Date().toString()

if(date_B > date_A){
    console.log('É mais recente')
} else {
    console.log('É mais antigo')
}

date_verify = (date_A > date_B) ? `${date_A.getFullYear()} é mais recente que ${date_B.getFullYear()}` : `${date_B.getFullYear()} é mais velho que ${date_A.getFullYear()}`

console.log(date_verify)