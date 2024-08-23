const abrirDialog = document.querySelector(".create-contain")
const FloatButtonOpen = document.querySelector(".floating-button")

// const fecharDialog = document.querySelector("#closeIcon")

const fecharDialog = document.querySelector(".novo .icone")

const modal = document.querySelector("dialog")


abrirDialog.onclick = function() {
    modal.showModal()
}
// Vai abrir o dialog com o Float Button
FloatButtonOpen.onclick = function() {
    modal.showModal()
}

fecharDialog.onclick = function() {
    modal.close()
}
