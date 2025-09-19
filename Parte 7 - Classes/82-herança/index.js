class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`);
            return;
        } 

        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`);
            return;
        } 

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('BLUE');
d1.ligar();
d1.desligar();

// Herança
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome); // Chama o construtor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

// Recomendável três no máximo
class Chip extends Smartphone {
    constructor(nome, cor, modelo, tamanho, operadora){
        super(nome, cor, modelo);
        this.tamanho = tamanho;
        this.operadora = operadora
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha, você alterou o método ligar');

    }
}

const s1 = new Smartphone('iPhone', 'preto', 'A10');
s1.ligar();

const c1 = new Chip('Chip da Tim', 'N/A', 'N/A', 'Padrão', 'Tim');
c1.ligar();

const t1 = new Tablet('iPad', true);
t1.ligar();
