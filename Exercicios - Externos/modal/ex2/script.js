const button = document.querySelector("button");

const modal = document.querySelector("dialog");

const FecharModal = document.querySelector("dialog button")

button.onclick = function () {
    modal.showModal()
}

FecharModal.onclick = function () {
    modal.close()
}

