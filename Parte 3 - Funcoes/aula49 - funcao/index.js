speakHoi()

function speakHoi(){
    console.log("Hoi")
}

speakHoi()

// First-class objects
// Tratar função como dados

const name = function(){
    console.log("Minerva Alves")
}

console.log(name())

name()

function execFunc(func){
    func();
}

// Arrow function

const arrow = () => {
    console.log("I am a rock")
}

arrow()

// setInterval(function() {
//     console.log('oi')
// }, 1000)

// in functioon

const obj = {
    falar: function(){
        console.log("Falar")
    }
}

obj.falar()