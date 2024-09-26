console.clear()
// Import libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// main

function getValidScore(){
    while (true){
        let score = Number(prompt('Insert a score: '))
    
        if(score > 100 || score < 0 || isNaN(score)){
            console.clear()
            console.log('Insert a valid point!'.red)
        } else {
            return score;
        }
    }
}

let score = getValidScore();

let result;
switch(true){
    case (score >= 0 && score < 20): result = 'F'; break; 
    case (score >= 20 && score < 40): result = 'E'; break; 
    case (score >= 40 && score < 60): result = 'D'; break; 
    case (score >= 60 && score < 80): result = 'C'; break; 
    case (score >= 80 && score < 90): result = 'B'; break; 
    case (score >= 90 && score < 100): result = 'A'; break; 
    default: result = 'invalid score;'
}

console.log(result)
