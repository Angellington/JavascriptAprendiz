// defineProperty - defineProperty
// Its like private attributes

// I am defiining a new property in the object
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;

    Object.defineProperty(this, "stock", {
        enumerable: false, // shows the key
        value: stock, // value
        writable: false, // can be changed value
        configurable: true, // can be deleted KEY
    });
}

const p1 = new Product("Shirt", 20, 3);
p1.stock = 500;
// delete p1.stock;
// console.log(p1.stock());

console.log(Object.keys(p1)); // shows the key7

for(let key in p1){
    console.log(key);
}