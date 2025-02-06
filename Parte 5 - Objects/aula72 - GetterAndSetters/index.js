// defineProperty -> Getter and Setters
function Product(name, price, stock){
    this.name = name;
    this.price = price;

    let privateStock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: true,
        get: function(){
            return privateStock;
        },
        set: function(value){
            // privateStock = value;
            if (typeof value !== 'number'){
                
                throw new TypeError('Invalid value');
                
            }
            privateStock = value;
        }

    });
}

const p1 = new Product('Shirt', 20, 3);
p1.stock = 2;
console.log(p1.stock)


// nao se faz necessario o value por conta de termos um metodo que vai retornar o valor;


// nao se faz necessario o write por conta de termmos um metodo que vai alterar o valor;

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
    set nome(valor){
        nome = valor;
    }
    }
}

const p2 = criaProduto('Camiseta');

console.log(p2.nome);
p2.nome = 'blusa';

console.log(p2.nome)