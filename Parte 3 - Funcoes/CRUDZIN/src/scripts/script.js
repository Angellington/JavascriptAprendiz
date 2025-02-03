// Capturar os valores:
const submit = document.getElementById("form");
const result = document.getElementById("result");
let index = 0;

// Recuperar do LocalStorage
let storedNames = localStorage.getItem("CRUD");

// Verifica se há itens armazenados no localStorage
if (storedNames) {
    // Converte o conteúdo de storedNames para um objeto JavaScript
    let now_storedNames = JSON.parse(storedNames);

    // Obtém o número de nomes armazenados
    let list_storedNames = now_storedNames.length;

    // Itera sobre os nomes armazenados
    now_storedNames.forEach(item => {
        const data = createData(item.index, item.name);
        result.innerHTML += data; // Adiciona o conteúdo ao resultado
    });
}

// Event to click on button (Adicionar novo item)
submit.addEventListener("submit", function(e) {
    e.preventDefault();
    // Captura o valor do formulário
    let name = document.getElementById("name").value;
    
    // Cria o Result com o nome e atualiza o LocalStorage
    const data = createResult(name);
    index++;

    result.innerHTML += data;

    // Reset o formulário
    submit.reset();
});

// Função para criar o resultado
function createResult(name) {
    const resultData = { index, name };

    // Recupera os itens armazenados ou cria um array vazio
    const storedNames = JSON.parse(localStorage.getItem("CRUD")) || [];

    // Adiciona o novo nome
    storedNames.push(resultData);

    // Atualiza o LocalStorage
    localStorage.setItem("CRUD", JSON.stringify(storedNames));

    // Cria o HTML com o nome e o índice
    return createData(index, name);
}

// Função para criar o HTML do item
function createData(index, name) {
    return `
    <div class='container'>
        <p>${name}</p>
        <h3 class="index" data-index='${index}'>Index: ${index}</h3>
        <button data-index='${index}' class="edit">Edit</button>
        <button data-index='${index}' class="dlt">Delete</button>
    </div>
    `;
}

// Delegar eventos de click no result (editar e deletar)
result.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains('edit')) {
        e.preventDefault();
        const index = e.target.getAttribute("data-index");
        editItem(index); // Chama a função de editar
    }

    if (e.target && e.target.classList.contains('dlt')) {
        e.preventDefault();
        const index = e.target.getAttribute("data-index");
        deleteItem(index); // Chama a função de deletar
    }
});

// Função para editar o item
function editItem(index) {
    let storedNames = JSON.parse(localStorage.getItem("CRUD"));

    // Encontra o item pelo index
    const item = storedNames.find(item => item.index == index);
    
    if (item) {
        // Alerta para edição e cria um prompt para editar
        const newName = prompt("Edit name:", item.name);
        
        if (newName) {
            item.name = newName; // Atualiza o nome

            // Atualiza o LocalStorage
            localStorage.setItem("CRUD", JSON.stringify(storedNames));

            // Atualiza a interface
            const container = document.querySelector(`.container button[data-index='${index}']`).closest('.container');
            container.querySelector('p').textContent = newName;
        }
    }
}

// Função para deletar o item
function deleteItem(index) {
    let storedNames = JSON.parse(localStorage.getItem("CRUD"));

    // Filtra o item a ser removido
    storedNames = storedNames.filter(item => item.index != index);

    // Atualiza o LocalStorage
    localStorage.setItem("CRUD", JSON.stringify(storedNames));

    // Remove o item da interface
    const container = document.querySelector(`.container button[data-index='${index}']`).closest('.container');
    container.remove();
}
