const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = num1 + num2

console.clear()
console.log(typeof(num3))
console.log(num1.concat(num2, "Minerva"))
// ... rest -> ... spread
// O spread espalha e funciona para objeto

const a3 = [...num1, ...num2, 'Minerva']
console.log(a3)