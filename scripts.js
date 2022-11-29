const createProductButton = document.querySelector('#create-product')
const dialog = document.querySelector('.create-product_dialog')
console.log(dialog.hasAttribute('open'))
// dialog.open = true

// dialog.setAttribute('open', true)
// dialog.removeAttribute('open')

dialog.showModal()
// dialog.close()

// setTimeout (() => dialog.close(), 3000)

createProductButton.addEventListener('click', () => {
    dialog.showModal()
})