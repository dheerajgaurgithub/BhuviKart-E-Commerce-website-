// Fetch all products from Fake Store API
async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    renderProducts(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

// Render product cards on the page
function renderProducts(products) {
  const container = document.getElementById("product-list-container");
  container.innerHTML = ""; // Clear existing content

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title.slice(0, 40)}...</h3>
      <p>$${product.price}</p>
      <a href="product-details.html?id=${product.id}">View Details</a>
    `;
    container.appendChild(card);
  });
}

// Fetch products by category
async function fetchByCategory(category) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
    const products = await res.json();
    renderProducts(products);
  } catch (error) {
    console.error("Failed to fetch category:", error);
  }
}

// Search for products by keyword
function searchProducts() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();

  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query)
      );
      renderProducts(filtered);
    })
    .catch(error => {
      console.error("Search failed:", error);
    });
}

// Fetch all products on page load
window.onload = fetchProducts;
