 function showHour(){
    let date = new Date();

    return date.toLocaleString('pt-BR', {
        hour12: false
    });
 }
 
 function intervalfunction(){
    console.log(showHour())
 }

// const timer = setInterval(function() {
//     console.log(showHour());
//  }, 10000)

setTimeout(function() {
    clearInterval(timer)
}, 10000)