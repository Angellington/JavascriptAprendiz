const order = (n) => {
    return (n % 2 == 0) ? ("par") : ("impar");
}

console.log(order(3))