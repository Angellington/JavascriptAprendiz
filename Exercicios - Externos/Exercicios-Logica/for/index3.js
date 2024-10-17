console.clear()
string = 'javascript'
const vowels= ['a', 'e', 'i', 'o', 'u'];
let vowels_hist = []

for(let i = 0; i < string.length; i++){
    if(vowels.includes(string[i])){
        vowels_hist.push(string[i])
    }
}
console.log('A quantidade de vogais é: ', vowels_hist.length)

// console.log(string.length)