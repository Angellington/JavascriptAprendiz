// Aqui é a variável que está armazenada os dados em OBJECT
let data = [
    {id: 1, name: "sami", email: "sami@gmail.com"},
    {id: 2, name: "Khan", email: "Khan@gmail.com"}
]


// Função para ler os dados
function readAll() {

    //Definição de Variáveis - Define o nome da mini function "object" e stringifica os dados de modo JSON, apesar de selecionar
    localStorage.setItem("object", JSON.stringify(data));

    // Captura o data_table do HTML [Que é onde os dados irão ficar]
    var tabledata = document.querySelector(".data_table ");

    // Aqui ele tenta pegar o dado estringificado JSON
    var object = localStorage.getItem('object');

    // Se o Object não estiver no localstorage inicializa com um array vazio
    if (!object) {
        object = '[]';
        localStorage.setItem('object', object);
    }


    // Aqui ele transforma aquele object em dado JSON
    var objectdata = JSON.parse(object);

    // Aqui é onde será preenchido
    var elements = "";

    //Esta é uma função de mapeamento e criação de HTML
    objectdata.map(record => (
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    </tr>`
    ))

    // Aqui é a modificação visual impregnada em uma variavel
    tabledata.innerHTML = elements;
}

function create(event) {
    var form = document.querySelector(".create_form").style.display = "block";
    var form = document.querySelector(".add_div").style.display = "none";
}

function add(event) {
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    // Obter dados do LocalStorage
    var object = localStorage.getItem('object');
    var data = JSON.parse(object);

    // Adicionar novo objeto
    var newObj = {id: data.length + 1, name: name, email: email};
    data.push(newObj)

    // Atualizar o localStorage
    localStorage.setItem('object', JSON.stringify(data));

    var form = document.querySelector(".create_form").style.display = "none";
    var form = document.querySelector(".add_div").style.display = "block";

    readAll()
}

