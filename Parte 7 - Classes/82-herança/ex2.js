// Crie uma classe Forma com:
// - método calcularArea() que lança erro (deve ser implementado)

// Crie classe Retangulo que herda de Forma:
// - propriedades: largura, altura
// - implementa calcularArea()

// Crie classe Circulo que herda de Forma:
// - propriedade: raio
// - implementa calcularArea()

// Crie classe Triangulo que herda de Forma:
// - propriedades: base, altura
// - implementa calcularArea()

// Teste:
// const formas = [
//   new Retangulo(5, 10),
//   new Circulo(7),
//   new Triangulo(6, 8)
// ];
// formas.forEach(forma => console.log(forma.calcularArea()));

class Forma{
    constructor(){
        if(this.constructor === Forma){
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
    }

    calcularArea(){
        throw new Error("Método calcularArea() deve ser implementado.");
    }
}

class Retangulo extends Forma{
    constructor(largura, altura){
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(){
        return this.largura * this.altura;
    }
}

class Circula extends Forma{
    constructor(raio){
        super();
        this.raio = raio;
    }

    calcularArea(){
        return Math.PI * this.raio * this.raio;
    }
}

class Triangulo extends Forma{
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return (this.base * this.altura) / 2;
    }
}
