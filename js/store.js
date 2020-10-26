if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    const removeCartItemButton = document.getElementsByClassName('btn-danger')
    for (var i=0; i < removeCartItemButton.length; i++) {
        const button = removeCartItemButton[i]
        button.addEventListener('click', removeCartItem)
    }

    const quantityInput = document.getElementsByClassName('cart-quantity-input')
    for (var i =0; i < quantityInput.length; i++ ) {
        const input = quantityInput[i]
        input.addEventListener('change', quantityChanged)
    } 

    const addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i =0; i < addToCartButtons.length; i++ ) {
        const button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    const buttonClicked =event.target
            buttonClicked.parentElement.parentElement.remove()
            updateCartTotal()
}

function quantityChanged(event) {
    const input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    const button = event.target
    const shopItem = button.parentElement.parentElement
    const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    const imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
    const cartRow = document.createElement('div')
    cartRow.innerText= title
    const cartItems = document.getElementsByClassName('cart-items')[0]
    const cartRowContents = ` 
    `
    cartItems.append(cartRow)
}

function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0]
    const cartRows = cartItemContainer.getElementsByClassName('cart-row')
    const total = 0
    for (var i=0; i < cartRows.length; i++) {
        const cartRow = cartRows[i]
        const priceElement = cartRow.getElementsByClassName('cart-price') [0]
        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        const price = parseFloat(priceElement.innerText.replace('$',''))
        const quantity = quantityElement.value 
        total = total + (price *quantity)
    }
    total = Math.round(total * 100) / 100 
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}