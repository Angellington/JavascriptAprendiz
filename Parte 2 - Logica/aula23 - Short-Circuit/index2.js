console.clear()
/*
|| - Ou  
*/

// Retorna apenas Verdadeiras
//         False - False - False - True - True (Output: Angel Minerva)
// console.log(0 || false || null || 'Angel Minerva' || true)

// const corUsuario = null;
// const corPadrao = corUsuario || 'preto'

// console.log(corPadrao)

const a = 0
const b = null
const c = false // Pegadinha
const d = false
const e = NaN

// False - False - 'False' - False = False
console.log(a || b || c || d || e)

// Retorna o último valor falso