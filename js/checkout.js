function loadCheckoutSummary() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const summaryContainer = document.getElementById("checkout-summary");

    if (cart.length === 0) {
        summaryContainer.innerHTML = "<p class='empty'>Your cart is empty.</p>";
        document.querySelector('.checkout-form').style.display = "none";
        return;
    }

    let total = 0;
    summaryContainer.innerHTML = "<h3>Order Summary:</h3>";

    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement("div");
        itemDiv.className = "checkout-item";
        itemDiv.innerHTML = `
      <p><strong>${item.name}</strong> × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>
    `;
        summaryContainer.appendChild(itemDiv);
    });

    const totalDiv = document.createElement("div");
    totalDiv.className = "checkout-total";
    totalDiv.innerHTML = `<p><strong>Total: $${total.toFixed(2)}</strong></p>`;
    summaryContainer.appendChild(totalDiv);
}

function submitOrder(event) {
    event.preventDefault();
    alert("Order placed successfully! A confirmation has been sent to your email.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

window.onload = loadCheckoutSummary;
