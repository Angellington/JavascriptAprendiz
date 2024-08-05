console.clear()
// IEE 764-2008

let num1 = 0.7
let num2 = 0.1

console.log(num1 + num2)

num1 += num2
num1 += num2
num1 += num2

num1 = num1.toFixed(2)

console.log(Number(num1))
console.log(Number.isInteger(num1))


num1 = num1 * 100
num1 += num1
num1 += num1
num1 += num1
num1 += num1

console.log(Number.isInteger(num1))

num1 = num1/100

