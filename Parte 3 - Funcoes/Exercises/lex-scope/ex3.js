console.clear()

/* Name conflicts */
const value = "Global"

function message(){
    const value = "Function"

    function messagetwo(){
        const value = "Funcion"
        return value
    }

    return messagetwo();

}

console.log(message())