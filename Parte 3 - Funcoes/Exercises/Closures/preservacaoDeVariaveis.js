function contador(){
    let count = 0;
    return function() {
        count++;
        return count
    };
}

const incrementa = contador();

console.log(incrementa())
console.log(incrementa())
console.log(incrementa())
console.log(incrementa())
console.log(incrementa())