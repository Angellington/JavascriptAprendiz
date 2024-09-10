// Onload no Body
window.onload = function(){
    readAll();
}

// Criar os Dados para Teste
let data = [ 
    {id: 0, nome: 'Minerva', sobrenome: 'Alves', genero: 'M', data: '20-07-2022', email: 'superetro85@gmail.com'},
    {id: 1, nome: 'Angel', sobrenome: 'Carmim', genero: 'F', data: '24-03-2004', email: 'StarNights@gmail.com'},
    {id: 2, nome: 'Annabel', sobrenome: 'Marmita'}
]





// Criar Função para ler os dados
function readAll() {
    localStorage.setItem('people', JSON.stringify(data));

    // Capturar a tabela
    var dataTable = document.getElementById('table');

    // Levar o object ao objectData
    var object = localStorage.getItem('people');
    var objectdata = JSON.parse(object)

    // Criar o elements vazio
    var elements = ' '
    objectdata.map(record => {
        elements += `
         <tr>
            <td data-title="id" class="id">${record.id}</td>
            <td data-title="nome" class="nome">${record.nome}</td>
            <td data-title="sobrenome" class="sobrenome">${record.sobrenome}</td>
            <td data-title="gender" class="gender">${record.genero}</td>
            <td data-title="datanasc" class="datanasc">${record.data}</td>
            <td data-title="email" class="email">${record.email}</td>
            <td data-title="actions"class="actions">
                <div class="UR">
                    <i class="fa-solid fa-pen-to-square" id="edit"></i>
                    <i class="fa-solid fa-trash" id="delete"></i>
                </div>
            </td>
        </tr>
        `
    })

    // Inserir os elementos na tabela
    dataTable.innerHTML = elements;
}