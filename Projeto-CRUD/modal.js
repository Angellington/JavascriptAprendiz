const abrirDialog = document.querySelector("button")
const fecharDialog = document.querySelector("#fechar")
const modal = document.querySelector("dialog")


abrirDialog.onclick = function() {
    modal.showModal()
}

fecharDialog.onclick = function() {
    modal.close()
}
