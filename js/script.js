// Fetch all products on load
async function fetchAllProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    renderProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Render product cards
function renderProducts(products) {
  const container = document.getElementById("product-list-container");
  container.innerHTML = ""; // Clear old results

  if (products.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}</h3>
      <p>$${product.price}</p>
      <a href="product-details.html?id=${product.id}">View Details</a>
    `;
    container.appendChild(card);
  });
}

// Filter by category
async function filterByCategory(category) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
    const data = await response.json();
    renderProducts(data);
  } catch (error) {
    console.error("Category fetch error:", error);
  }
}

// Search products by keyword
async function searchProducts() {
  const input = document.getElementById("search-input").value.toLowerCase().trim();
  if (!input) {
    fetchAllProducts();
    return;
  }

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const filtered = data.filter(product =>
      product.title.toLowerCase().includes(input)
    );
    renderProducts(filtered);
  } catch (error) {
    console.error("Search error:", error);
  }
}

// Cart count on navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

// On page load
window.onload = () => {
  fetchAllProducts();
  updateCartCount();
};
