function criarCalculadora() {
    return {
        // Atributos
        display: document.querySelector('.display'),

        // Métodos
        inicia() {
            this.clickButton();
            this.pressionaEnter();
            this.pressionaBackSpace();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();  // Impede o comportamento padrão de apagar
                    this.clearDisplay()
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                this.realizaConta();
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert("Conta inválida");
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert("Conta Inválida");
                return;
            }
        },

        clickButton() {
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-dtn')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();