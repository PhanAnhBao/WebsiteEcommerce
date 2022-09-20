export function addToCart (item, cart) {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
    }

    const target = cart.find(element => element._id === item._id);

    if (target) { 
        target.quantity += 1;
    }

    else {
        const cartItem = {
            ...item,
            quantity: 1,
        }

        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('ADD SUCCESS');
    window.location.reload();
}
