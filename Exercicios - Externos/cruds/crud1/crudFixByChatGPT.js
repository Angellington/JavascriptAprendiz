// Função para ler os dados
function readAll() {
    // Captura o data_table do HTML [Que é onde os dados irão ficar]
    var tabledata = document.querySelector(".data_table");

    // Aqui ele tenta pegar o dado stringificado JSON
    var object = localStorage.getItem('object');

    // Se o object não estiver no localStorage, inicializa como um array vazio
    if (!object) {
        object = '[]';
        localStorage.setItem('object', object);
    }

    // Aqui ele transforma aquele object em dado JSON
    var objectdata = JSON.parse(object);

    // Aqui é onde será preenchido
    var elements = "";

    // Esta é uma função de mapeamento e criação de HTML
    objectdata.map(record => (
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
            <button onclick="edit(${record.id})">Edit</button>
            <button onclick="remove(${record.id})">Delete</button>
        </td>
    </tr>`
    ));

    // Aqui é a modificação visual impregnada em uma variável
    tabledata.innerHTML = elements;
}

function showCreateForm() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

function add(event) {
    event.preventDefault();
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    // Obter dados do localStorage
    var object = localStorage.getItem('object');
    var data = JSON.parse(object);

    // Adicionar novo objeto
    var newObj = {id: data.length + 1, name: name, email: email};
    data.push(newObj);

    // Atualizar localStorage
    localStorage.setItem('object', JSON.stringify(data));

    // Resetar o formulário
    document.querySelector(".create_form").reset();
    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    // Recarregar os dados
    readAll();
}

function edit(id) {
    // Aqui você pode implementar a lógica para editar o registro
    // Exibir o formulário de atualização com os valores preenchidos
}

function update(event) {
    event.preventDefault();
    // Lógica para atualizar os dados
}

function remove(id) {
    // Obter dados do localStorage
    var object = localStorage.getItem('object');
    var data = JSON.parse(object);

    // Filtrar o registro que deve ser removido
    data = data.filter(record => record.id !== id);

    // Atualizar localStorage
    localStorage.setItem('object', JSON.stringify(data));

    // Recarregar os dados
    readAll();
}
