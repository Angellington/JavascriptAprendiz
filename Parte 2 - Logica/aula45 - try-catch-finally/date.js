function returnHour(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Waiting date...");
    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hourTwelve: false
    })
}

const hora = returnHour();
console.log(hora)