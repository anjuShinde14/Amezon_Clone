document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    let cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            const product = cart.find(item => item.name === productName);

            if (product) {
                product.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';

        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;

            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;

            cartItems.appendChild(li);
        });

        cartTotal.textContent = total.toFixed(2);
    }
});