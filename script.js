let cart = [];

function displayProducts(filtered = products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  filtered.forEach(product => {
    grid.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>R ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} - R ${item.price}</p>`;
  });
}

function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("open");
}

function checkout() {
  let message = "Hi Kwagga 4x4, I want to order:\n";
  cart.forEach(item => {
    message += `- ${item.name} (R ${item.price})\n`;
  });
  window.open(`https://wa.me/27XXXXXXXXX?text=${encodeURIComponent(message)}`);
}

function filterProducts() {
  const vehicle = document.getElementById("vehicleFilter").value;
  const category = document.getElementById("categoryFilter").value;

  const filtered = products.filter(p =>
    (vehicle === "All" || p.vehicle === vehicle) &&
    (category === "All" || p.category === category)
  );

  displayProducts(filtered);
}

displayProducts();
