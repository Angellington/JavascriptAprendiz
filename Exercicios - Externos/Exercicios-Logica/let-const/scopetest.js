console.clear()

// let e const tem escopo de bloco
function scopeTeste() {
    if (true) {
        var x = 30;
        let y = 50; // erro de bloco
        const z = 100; // erro de bloco
    }
    console.log(x)
    console.log(y)
    console.log(z)
}

scopeTeste()