const abrirDialog = document.querySelector(".create-contain")
const modal = document.querySelector("dialog")


abrirDialog.onclick = function() {
    modal.showModal()
}

fecharDialog.onclick = function() {
    modal.close()
}
