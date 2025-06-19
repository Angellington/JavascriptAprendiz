let idade = 34;


verificaIdade = () => {
    if(idade > 18){
        console.log('Mais de dezoito')
    }
}

atribuiIdade = (novaIdade) => {
    idade = novaIdade
}

verificaIdade()
atribuiIdade(16)
verificaIdade()