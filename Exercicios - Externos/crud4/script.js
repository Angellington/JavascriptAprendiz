
let initial_data = [{name: 'Minerva', text: 'Light Off'},
    {name: 'Inverno', text: 'Snowing down'}
]

// --- Converter o array de objeto ---
if(!localStorage.getItem('poem')) {
    const jsonData = localStorage.setItem('poem', JSON.stringify(initial_data));
}
localStorage.setItem('poem', JSON.stringify(initial_data))

let currentIndex = null;

// First step: readAll

function readAll() {
    // Capturar
    const resultado = document.getElementsByClassName('resultado')[0];

    // Let os elementos do array
    const storedData = localStorage.getItem('poem');
    const data = JSON.parse(storedData) || [];

    // Limpar o inner
    resultado.innerHTML = '';

    // Passar a leitura
    data.forEach((item, index) => {
        const read = document.createElement('div');
        read.classList.add('read');

        read.innerHTML = `
            <div class="data">
                <strong>${item.name}</strong>
                <p>${item.text}</p>
            </div>
            <div class="action">
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>
            </div>
        `;

        resultado.appendChild(read);

        // Para deletar botões
        const btn_delete = document.querySelectorAll('.delete');
        btn_delete.forEach(button => {
        button.onclick = function () {
            const index = this.getAttribute('data-index');
            deleteAll(index);
            };
        });

        const btn_edit = document.querySelectorAll('.edit');
        btn_edit.forEach(button => {
            button.onclick = function() {
                const index = this.getAttribute("data-index");
                editItem(index)
            };
        });
    });
}

function createAll(){
    // Capturar os INPUTS
    const name = document.getElementById('name').value;
    const text = document.getElementById('text').value;

    new_item = {name, text}

    // Pegar o LocalStorage
    getPoem = localStorage.getItem('poem');
    data = JSON.parse(getPoem) || [];

    if (currentIndex !== null){
        data[currentIndex] = new_item;
        currentIndex = null;
    } else {
        data.push(new_item)
    }

    // Passar para o LocalStorage
    localStorage.setItem('poem', JSON.stringify(data))


    const form = document.getElementById('form')
    form.reset();
    readAll()
}

//


const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    createAll()
})

function deleteAll(index){
    const storedData = localStorage.getItem('poem');
    const data = JSON.parse(storedData) || [];

    data.splice(index, 1);

    localStorage.setItem('poem', JSON.stringify(data));

    readAll();
}

function editItem(index) {
    const storedData = localStorage.getItem('poem');
    const data = JSON.parse(storedData) || [];

    // Prencher formulario com os dados do item selecionado
    document.getElementById("name").value = data[index].name;
    document.getElementById("text").value = data[index].text;

    currentIndex = index
}
readAll();






