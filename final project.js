let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsDiv = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    const removeAllBtn = document.querySelector('.remove-all');

    // Function to render the cart
    function renderCart() {
        cartItemsDiv.innerHTML = '';

        if (cart.length === 0) {
            cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
            totalPriceElement.textContent = "0.00";
            return;
        }

        let total = 0;

        cart.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('cart-item');

            itemEl.innerHTML = `
                <p>${item.name}</p>
                <p>R${item.price}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            cartItemsDiv.appendChild(itemEl);
            total += item.price;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }

    // Handle add-to-cart buttons (on product page)
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.previousElementSibling.previousElementSibling.textContent;
            const productPrice = parseFloat(event.target.dataset.price);
            const productId = event.target.dataset.product;

            const product = { id: productId, name: productName, price: productPrice };
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} has been added to your cart!`);
            renderCart();
        });
    });

    // Remove individual item
    cartItemsDiv.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    // Remove all items
    if (removeAllBtn) {
        removeAllBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to remove all items from your cart?")) {
                cart = [];
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            }
        });
    }

    // Initial render
    if (cartItemsDiv && totalPriceElement) {
        renderCart();
    }
});