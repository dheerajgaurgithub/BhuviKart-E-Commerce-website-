// Fetch product details from Fake Store API using product ID
async function fetchProductDetails(id) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await res.json();
        renderProduct(product);
    } catch (error) {
        console.error("Failed to fetch product details:", error);
    }
}

// Render product data on the details page
function renderProduct(product) {
    document.getElementById("product-image").innerHTML = `
    <img src="${product.image}" alt="${product.title}">
  `;
    document.getElementById("product-name").innerText = product.title;
    document.getElementById("product-price").innerText = `$${product.price}`;
    document.getElementById("product-desc").innerText = product.description;

    // Store current product info globally for use in cart
    window.currentProduct = {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image
    };
}

// Add product to localStorage cart
function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.id === window.currentProduct.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...window.currentProduct, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}

// Extract product ID from URL query string
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

// Initialize on page load
window.onload = () => {
    const id = getProductIdFromURL();
    if (!id) {
        alert("Invalid Product ID");
        return;
    }
    fetchProductDetails(id);
};
