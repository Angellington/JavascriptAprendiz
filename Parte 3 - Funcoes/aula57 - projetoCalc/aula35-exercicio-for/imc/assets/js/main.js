function criarCalculadora() {
    return {
        // Atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        // Métodos
        inicia() {
            this.clickButton();
            this.pressionaEnter();
            this.pressionaBackSpace();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.key === 'Backspace') {
                    e.preventDefault();  // Impede o comportamento padrão de apagar
                    this.apagaUm();
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
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                // Usar 'new Function()' como alternativa segura ao eval()
                conta = new Function('return ' + conta)();

                if (conta === undefined || conta === null) {
                    alert("Conta inválida");
                    return;
                }

                this.display.value = String(conta);
            } catch (err) {
                alert("Conta Inválida");
            }
        },

        clickButton() {
            // this -> calculadora
            document.addEventListener('click', (e) => {
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
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();