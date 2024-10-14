let blocks = ''

for (let i = 1; i <= 5; i++){
    for (let j = i; j > 0; j--){
        blocks += "#"
    }
    blocks += "\n"
}

console.log(blocks)

let block_v2 = ''

for(let i = 5; i > 0; i--){
    for (let j = i; j > 0; j--){
        block_v2 += "#"
    }
    block_v2 += "\n"
}

console.log(block_v2)