console.clear()
// Quando uma ação finaliza, essa função é executada

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

console.log(rand())

function f1(callback){
    setTimeout(function(){
        console.log("f1")
        if(callback) callback()
    }, 500)
}


function f2(callback){
    setTimeout(function(){
        console.log("f2")
        if(callback) callback()
    }, 1000)
}

function f3(callback){
    setTimeout(function(){
        console.log("f3")
        if(callback) callback()
    }, 1500)
}

f1(function() {
    f2(function(){
        f3(function(){
            console.log("Hello Wolrd")
        })
    })
});

