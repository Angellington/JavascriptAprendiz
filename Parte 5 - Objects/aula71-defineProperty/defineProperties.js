// defineProperties
function Produto(name, price, stock){
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        value: stock,
        writable: true, // Ensure writable is true
        configurable: true,
    });

    Object.defineProperties(this, {
        name: { // Fix: Correct property name to 'name'
            enumerable: true,
            value: name,
            writable: true, // Ensure writable is true
            configurable: true,
        },
        price: {
            enumerable: true,
            value: price,
            writable: true, // Ensure writable is true
            configurable: true,
        },
    });
}

const p1 = new Produto("Shirt", 20, 3);
console.log(Object.keys(p1)); // shows the keys
console.log(p1); // shows the object with properties
