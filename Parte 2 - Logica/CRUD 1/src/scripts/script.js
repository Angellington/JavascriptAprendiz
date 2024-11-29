// Adicionar elemento
const button = document.getElementById("btn-submit");
const output = document.getElementById("output");


button.addEventListener("click", function(e){
    e.preventDefault()

    // Catch up
    const input_nome = document.getElementById("nome").value;

    const storedNames = JSON.parse(localStorage.getItem("Names")) || [];
    storedNames.push(input_nome); // Adiciona o novo nome ao array

    // Converte o array de nomes para JSON e armazena no localStorage
    localStorage.setItem("Names", JSON.stringify(storedNames));


    const data = createData(input_nome);

    // Converte o nome para JSON
    let nomeJSON = JSON.stringify(input_nome);

    // Armazena no localStorage
    localStorage.setItem("Nome", nomeJSON);


    output.innerHTML += data

})

function createData(nome, index){
    const data = `
        <div class="container">
            <p id="name_out">${nome}</p>
            <button class="edit" data-index="${index}">edit</button>
            <button class="dlt" data-index="${index}">delete</button>
        </div>
    `

    return data;
}

output.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("edit")) {
        // Editar o nome
        const container = e.target.closest(".container");
        const p = container.querySelector("#name_out");

        const newName = prompt("Edit the name:", p.textContent);
        if (newName) {
            p.textContent = newName;
        }
    } else if (e.target && e.target.classList.contains("dlt")) {
        // Deletar o item
        const container = e.target.closest(".container");
        container.remove();
    }
});