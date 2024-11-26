console.clear()

function inter() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000); // O tempo de atraso aumenta a cada iteração
    }
}

inter();
