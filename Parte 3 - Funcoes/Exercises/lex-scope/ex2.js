console.clear()

function externa(){
    const message = "Hoi out scope!";

    function interna(){
        console.log(message)
    }

    interna()
}

externa