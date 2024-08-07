let numero = Number(prompt("Digite um numero: "))

texto = document.getElementById('num')

texto.innerHTML = numero
texto.innerHTML += `<p>Raiz Quadrada ${numero ** 0.5}</p>`
texto.innerHTML += `<p>O ${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`


