console.clear()

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join('');

        },


        fala: function(assunto){
            return `${this.nome} está falando ${assunto}`
        },
        altura: altura,
        peso: peso,
        imc(){
            const index = this.peso / (this.altura ** 2);
            return index.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.fala("sobre ts"))
console.log(p1.nome)

const p2 = criaPessoa("Minerva", "Alves", "Barbosa", 1.6, 40)
console.log(p2.fala("Sobre o novo annabel"))
console.log(p2.nomeCompleto) // Chamando como variavel, usando o get
console.log(p2.fala("Oi, kagura"))