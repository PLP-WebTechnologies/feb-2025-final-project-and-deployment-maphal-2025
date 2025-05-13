<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Week 8 Assignment</title>
    <link rel="stylesheet" href="final project.css" />
</head>
<body>
    <header>
        <nav>
            <div class="logo"><h2>Final Project</h2></div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html" class="active">Contact</a></li>
            </ul>
        </nav>
    </header>
     <main>
        <section class="content">
            <article>
                <a href="https://www.calculator.net/investment-calculator.html"> Investemnt calculator</a>
                <img src="Investment 1.jpg" alt="Investemnt image" width="260" height="260">
                <P>The Investment Calculator can be used to calculate a specific parameter for an investment plan. The tabs represent the desired parameter to be found. For example, to calculate the return rate needed to reach an investment goal with particular inputs, click the 'Return Rate' tab.</P>
                 <img src="Investment 2.jpg" alt="investment image" width="260" height="260">
            </article>
            <article>
                <a href="https://www.betterbond.co.za/calculators/bond-and-transfer/">Bond Calculator</a>
                <img src="House 1.jpg" alt="House image" width="260" height="260">
                <p>Bond Calculator. Before you make the final decision to finance a property, you need to understand the costs involved, and how much you can afford. This calculator can help you determine the monthly repayments based on the Home</p>
            <img src="House 2.jpg" alt="House image" width="260" height="260">

            </article>
            <article>
                <a href="https://apps.liberty.co.za/RetirementCalculator/">Retirement Calculator</a>
                <img src="Old Man 1.avif" alt="old Man image" width="260" height="260">
                <p>Are you saving enough for retirement? By the time you retire, you should have saved enough to receive an income that can replace what you have been earning, so you can cover your ongoing living expenses. Use the calculator below to estimate your projected retirement income and how much contributions you need to make per month to achieve your retirement goals.</p>
                 <img src="Old Man 2.jpg" alt="old image" width="260" height="260">
    
            </article>
            <article>
                <a href="https://www.autotrader.co.za/car-finance-calculator">Car Finance Calculator</a>
                <img src="Car1.jpg" alt="car image" width="260" height="260">
                <p>Calculate your estimated monthly repayment as well as total interest based on the vehicle retail price</p>
                <img src="Car 2.jpg" alt="car image" width="260" height="260">    
            </article>
           
        </section>
    </main>

    <main>
        <section class="contact-section">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! 💌</p>
            <form class="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>
    <script src="final project.js"></script>
    <footer>
        <p>&copy; 2025 Final Project - All rights reserved</p>
    </footer>
</body>
</html>

CSS

/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #fff8e1;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #d4af37; /* Gold color */
    color: white;
    padding: 1rem;
    text-align: center;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    position: relative;
}

/* Glowing hover effect */
nav ul li a:hover {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #d4af37, 0 0 15px #d4af37;
}

.hero {
    text-align: center;
    padding: 3rem 1rem;
    background-color: #fff;
    color: #d4af37;
}

.hero h1 {
    font-size: 3rem;
}

.product-list {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin-top: 40px;
    padding: 20px;
}

.product {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    width: 200px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.product img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #f0f0f0;
}

.product h3 {
    font-size: 1.2rem;
    color: #333;
}

.product p {
    font-size: 1rem;
    color: #d4af37;
    font-weight: bold;
}

.product:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.product button {
    background-color: #d4af37;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

.product button:hover {
    background-color: #b38b1c;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

/* Cart Page */
#cartItems {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
}

/* Each individual cart item box */
.cart-item {
    background-color: #fff;
    border: 1px solid #eee;
    padding: 1rem;
    border-radius: 10px;
    width: 220px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s ease;
}

.cart-item:hover {
    transform: translateY(-5px);
}

.cart-item .remove-btn {
    margin-top: 10px;
    background-color: white;
    color: #d4af37;
    border: 1px solid #d4af37;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cart-item .remove-btn:hover {
    background-color: #d4af37;
    color: white;
}

/* Footer Styling */
footer {
    background-color: #d4af37;
    color: white;
    text-align: center;
    padding: 1.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
    .product-list {
        flex-direction: column;
        align-items: center;
    }

    .product {
        width: 90%;
    }
}

.cart-highlight {
    font-size: 1.4rem;
    color: #b38b1c;
    background-color: #fff4d1;
    border: 1px solid #d4af37;
    padding: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
    transition: all 0.3s ease;
}

/* Contact Page */
.contact-section {
    max-width: 600px;
    margin: 3rem auto;
    background-color: #fffdf7;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.2);
    text-align: center;
}

.contact-section h2 {
    color: #d4af37;
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

.contact-section p {
    color: #666;
    margin-bottom: 2rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 0.75rem;
    border: 1px solid #e0c97e;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #fffaf0;
    transition: border 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
}

.contact-form button {
    padding: 0.8rem 1.5rem;
    background-color: #d4af37;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-form button:hover {
    background-color: #b38b1c;
}

/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Header Styling */
header {
    background: #116d4b;
    color: #bbd4bc;
    padding: 1rem;
    text-align: center;
}

/* Main Content Styling */
main {
    flex: 1;
    padding: 1rem;
}

/* Grid Layout for Articles */
.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

/* Article Styling */
article {
    background: #f4f4f4;
    padding: 1rem;
    border: 1px solid #ddd;
}

/* Footer Styling */
footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
    header, footer {
        padding: 0.5rem;
    }

    .content {
        grid-template-columns: 1fr;
    }
}

JS

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

