// Capturar os valores:
// Capturar o Submit - Output - Index
const submit = document.getElementById("form")
const result = document.getElementById("result")
let index = 0;


// Recuperar do LocalStorage

let storedNames = localStorage.getItem("CRUD");

if(!storedNames){
    console.log("")
} else {    

    let now_storedNames = JSON.parse(storedNames);

    let list_storedNames = now_storedNames.length;
    for(let i = 0; i < list_storedNames; i++){
        const data = createData(i, now_storedNames[i].name)
        result.innerHTML += data;
        index = list_storedNames;
    }
}





// Event to click on button
submit.addEventListener("submit", function(e){
    e.preventDefault();
    // Catch form elements;

    let name = document.getElementById("name").value;
    
    // Create Result with name
    const data = createResult(index, name)
    index++

    result.innerHTML += data;



    // Reset
    submit.reset()
})

function createResult(index, name){
    const resultData = { index, name};

    // Criar no Local Storage
    const storedNames = JSON.parse(localStorage.getItem("CRUD")) || [];
    // storedNames.push(name);

    storedNames.push(resultData)

    localStorage.setItem("CRUD", JSON.stringify(storedNames))

    const data = createData(index, name)

    return data;
}

function createData(index, name){
    const data = `
    
    <div class='container' >
    <p>${name}</p>
    <h3 data-index='index'>Index: ${index}</h3>
        <button data-index='${index}' class="edit">edit</button>
        <button data-index='${index}' class="dlt">delete</button>
    </div>
    `

    return data;
}


// Delegar apartir do result (o gerado)
result.addEventListener("click", function(e){
    if(e.target && e.target.classList.contains('edit')){
        e.preventDefault();
        const index = e.target.getAttribute("data-index");
        alert(`Edit index is ${index}`)
    }

    if(e.target && e.target.classList.contains('dlt')){
        e.preventDefault();
        const index = e.target.getAttribute("data-index");
        alert(`Delete index is ${index}`)


        let storedNames = JSON.parse(localStorage.getItem("CRUD"))

        for(let i = 0; i < storedNames.length; i++){
            // Comparar corretamente
            if(storedNames[i].index == index){
                storedNames.splice(i, 1)

                localStorage.setItem("CRUD", JSON.stringify(storedNames))

                e.target.closest('.container').remove()

                break;
            }
        }
    }
})


// Functions


/*
1. Pôr o nome nos indices!

2. Adicionar a função de deletar!

3. Adicionar a função de editar!

*/
