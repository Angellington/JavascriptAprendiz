const abrirDialog = document.querySelector(".create-contain")

// const fecharDialog = document.querySelector("#closeIcon")

const fecharDialog = document.querySelector(".novo .icone")

const modal = document.querySelector("dialog")


abrirDialog.onclick = function() {
    modal.showModal()
}

fecharDialog.onclick = function() {
    modal.close()
}
