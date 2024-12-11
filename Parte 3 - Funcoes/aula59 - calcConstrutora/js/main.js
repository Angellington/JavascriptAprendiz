// Função Construtura -> objetos
// Função Fabrica -> Objetos

// Construtora -> Pessoa (new)

// Não precisa de return

function Calculadora(){
    this.display = document.querySelector(".display");

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener("keypress", e => {
            if(e.keyCode !== 13) return;
            this.realizaConta();
        })
    }


    this.capturaCliques = () => {
        document.addEventListener("click", e => {
            const el = e.target;
            if(el.classList.contains("btn-num")) this.addNumDisplay(el);
            if(el.classList.contains("btn-clear")) this.clear();
            if(el.classList.contains("btn-dtn")) this.del();
            if(el.classList.contains("btn-eq")) this.realizaConta();
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus()
    }

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert("Conta Inválida");
                return
            }

            this.display.value = conta;
        } catch(e) {
            alert("Conta Inválida");
            return;
        }
    }

    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.clear = () => this.display.value = '';




}



const calculadora = new Calculadora()
calculadora.inicia();
