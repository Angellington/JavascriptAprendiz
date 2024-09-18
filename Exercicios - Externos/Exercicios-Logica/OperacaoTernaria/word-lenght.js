console.clear()
// Verify word 
const prompt = require('prompt-sync')();

word = prompt('Insert your word: ')
word_verify = (word.lenght < 5) ? 'Short word' : 'Long word'

console.log(word_verify)