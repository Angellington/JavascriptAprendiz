console.clear()


const date = setInterval(Horario, 1000)

function Horario() {
    const d = new Date();
    console.log(d.toLocaleTimeString())
}