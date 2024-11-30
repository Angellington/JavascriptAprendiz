// Adicionar elemento
const button = document.getElementById("btn-submit");
const output = document.getElementById("output");
let index = 0;

let storedNames = localStorage.getItem("Names")

if(!storedNames){
    console.log("")
} else {
    let storedNames = localStorage.getItem("Names");  // Supondo que você já tenha os dados no localStorage
    let now_storedNames = JSON.parse(storedNames);  // Converte o JSON para um array
    let list_storedNames = now_storedNames.length;  // Obtém o número de elementos no array

    // Itera sobre o array e exibe cada elemento
    for (let i = 0; i < list_storedNames; i++) {
        console.log(now_storedNames[i])
        const data = createData(now_storedNames[i], i)
        output.innerHTML += data;

        console.log(i);  // Acessa o valor individual do array
    }
}


button.addEventListener("click", function(e){
    e.preventDefault()
    // Catch up
    const input_nome = document.getElementById("nome").value;
    const storedNames = JSON.parse(localStorage.getItem("Names")) || [""];
    storedNames.push(input_nome); // Adiciona o novo nome ao array

    // Converte o array de nomes para JSON e armazena no localStorage
    localStorage.setItem("Names", JSON.stringify(storedNames));
    index++
    
    const data = createData(input_nome, index);

    // Converte o nome para JSON
    let nomeJSON = JSON.stringify(input_nome);

    output.innerHTML += data
    // Alert
    alert(index);
})

function createData(nome, index){
    const data = `
        <div class="container">
            <p id="name_out">${nome}</p>
            <button class="edit" data-index="${index}">edit</button>
            <button class="dlt" data-index="${index}">delete</button>
            <p>${index}</p>
        </div>
    `

    return data;
}

function removeData(){

}

function deleteData(index){


    
    alert("teste")
}

// Seleciona todos os botões com a classe 'dlt'
const dlt = document.querySelectorAll(".dlt");

dlt.forEach(function(dlt){
    dlt.addEventListener("click", function(e){
        const index = e.target.getAttribute("data-index");

        // Remove o item da interface
        e.target.closest('.container').remove();

        // Remove o item do localStorage
        let storedNames = JSON.parse(localStorage.getItem("Names")) || [];

        // Filtra o array para remover o nome correspondente
        storedNames = storedNames.filter((name, i) => i !== parseInt(index));

        // Atualiza o localStorage com o array modificado
        localStorage.setItem("Names", JSON.stringify(storedNames));

        

    })
})

const edit = document.querySelectorAll(".edit");

edit.forEach(function(editButton) {
    editButton.addEventListener("click", function(e) {
        const index = e.target.getAttribute("data-index"); // Pega o índice do item

        // Recupera os dados armazenados no localStorage
        let storedNames = JSON.parse(localStorage.getItem("Names"));

        if (storedNames && storedNames[index]) { // Verifica se o nome existe no índice
            let recoverData = storedNames[index]; // Pega o dado correspondente ao índice

            const input_nome = document.getElementById("nome");
            input_nome.value = recoverData; // Preenche o campo de input com o dado recuperado

            // A cada mudança no valor do input, o localStorage será atualizado
            input_nome.addEventListener("input", function() {
                storedNames[index] = input_nome.value; // Atualiza o nome no array
                localStorage.setItem("Names", JSON.stringify(storedNames)); // Salva de volta no localStorage
            });

            alert(`Nome recuperado: ${recoverData}`); // Exibe o nome recuperado (opcional, pode ser removido)
        } else {
            alert("Dados não encontrados ou índice inválido");
        }
    });
});
