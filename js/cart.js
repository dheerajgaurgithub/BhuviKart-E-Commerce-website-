function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalPriceEl = document.getElementById("total-price");

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p class='empty'>Your cart is empty.</p>";
        totalPriceEl.textContent = "0.00";
        return;
    }

    cart.forEach(item => {
        total += item.price * item.quantity;

        const card = document.createElement("div");
        card.className = "cart-card";
        card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>$${item.price} × ${item.quantity}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
        cartContainer.appendChild(card);
    });

    totalPriceEl.textContent = total.toFixed(2);
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkoutCart() {
    alert("Checkout successful! Thank you for shopping.");
    localStorage.removeItem("cart");
    loadCart();
}

window.onload = loadCart;
