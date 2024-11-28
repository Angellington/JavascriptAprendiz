const texto = document.getElementById("sample2");

let msg = "Silence takes me to wonder, silence take me to ponder"

// texto.innerHTML = msg; - InnerHTML Write at HTML

document.write(msg, " ", 5 + 12)

// window.alert("hoi")

let x, y, z;
x = 5;
y = 6;
z = x + y;

document.write("\nHello Dollynho seu amiguinho")

function apagarALuz(){
    let light = document.body.style.backgroundColor = "black";
}

const btn_light = document.getElementById("black")

btn_light.addEventListener("click", function(e){
    apagarALuz()
    setTimeout(function(){
        document.body.style.backgroundColor = "white"
    }, 2000)
})


const car = {
    name: "Fiat",
    model: "500",
    weight: "850kg",
    color: "white"
}

