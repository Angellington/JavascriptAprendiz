// First Objective - Create the timer


// Catch the DOM
const timer = document.getElementById("timer");

const start = document.getElementById("start");
const stop_time = document.getElementById("stop");
const clear = document.getElementById("clear");

const default_timer = '00:00:00'

// Default value on this
timer.innerHTML = `<h1>${default_timer}</h1>`

// Clock (Show local minutes)
const date = new Date();
const clock = date.toLocaleTimeString("pt-BR");





function startButton(){
    document.body.style.background = "white";
    document.body.style.color = "black";

    let clocking = setInterval(function (){
        const date = new Date()
        timer.innerHTML = `<h1>${date.toLocaleTimeString("pt-BR")}</h1>`
    }, 1000);
    stop_time.addEventListener("click", function(){
        clearInterval(clocking)
        document.body.style.background = "black";
        document.body.style.color = "white";
    })
    clear.addEventListener("click", function(){
        document.body.style.background = "white";
        document.body.style.color = "black";
        clearInterval(clocking)
        timer.innerHTML = `<h1>${default_timer}</h1>`
    })
}



start.addEventListener("click", function(){
    startButton()
})
