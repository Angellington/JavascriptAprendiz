console.clear()

function adicionarDias(data, dias){
    let novaData = new Date(data);
    novaData.setDate(novaData.getDate() + dias);
    return novaData;
}

// Uso
const dataInicial = new Date('2005-06-20');
const diasParaAdicionar = 10;

const novaData = adicionarDias(dataInicial, diasParaAdicionar);
console.log(novaData)