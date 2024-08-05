let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

console.log(varA, varB, varC)

const varAtemp = varA
varA = varB //
varB = varC // VAR = B - VAR C
varC = varC //  VAR C = VAR
varC = varAtemp
console.log(varA, varB, varC)



