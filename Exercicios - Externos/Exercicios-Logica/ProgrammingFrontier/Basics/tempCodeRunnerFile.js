while(true){
    console.clear()
    console.log(`${numbers.join(' ')} = RESULTADO`)
    n = prompt('(Q - for QUIT) -Insert a number: ')


    if(n === 'Q' || n === 'q'){
        console.log('Quitting...')
        break
    }

    if(Number(n)){
        numbers.push(n)
        let operation = prompt('Select Opertion: (+/-/x-/:): ')
        while (true){
            if(operation === '+'){
                numbers.push(operation)
                break
            } else {
                continue
            }
        }
       
        continue
    }

}