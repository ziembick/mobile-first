const createProductButton = document.querySelector('#create-product')
const dialog = document.querySelector('.create-product_dialog')
const cancelButton = document.querySelector('#cancel')



// dialog.open = true

// dialog.setAttribute('open', true)
// dialog.removeAttribute('open')

dialog.showModal()
// dialog.close()

// setTimeout (() => dialog.close(), 3000)

// function openModal () {
//     dialog.showModal()
// }

const openModal = () => dialog.showModal()
// const closeModal = () => dialog.close()


createProductButton.addEventListener('click', openModal)

// cancelButton.addEventListener('click', () => {
//     dialog.close()
// })

cancelButton.addEventListener('click', () => dialog.close())