const button = document.querySelector("button"); //Selecionar o (button)

const modal = document.querySelector("dialog"); // Selecionar o (dialog)

const buttonClose = document.querySelector("dialog button")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}