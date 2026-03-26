// Cart array to store items
let cart = [];

// Add item to cart
function addToCart(name, price) {
  // Check if item already exists in cart
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].quantity = cart[i].quantity + 1;
      found = true;
      break;
    }
  }

  // If not found, add new item
  if (!found) {
    cart.push({ name: name, price: price, quantity: 1 });
  }

  updateCartDisplay();
  showCartSection();
  alert(name + " has been added to your cart!");
}

// Show the cart section
function showCartSection() {
  const cartSection = document.getElementById("cart-section");
  cartSection.classList.remove("hidden");
  // Scroll to cart
  cartSection.scrollIntoView({ behavior: "smooth" });
}

// Update the cart display on screen
function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  // Clear current list
  cartList.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  // Loop through cart and display each item
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const listItem = document.createElement("li");
    const itemTotal = item.price * item.quantity;
    listItem.innerHTML = item.name + " x" + item.quantity + " <span>$" + itemTotal.toFixed(2) + "</span>";
    cartList.appendChild(listItem);
    total = total + itemTotal;
    totalItems = totalItems + item.quantity;
  }

  // Update total and item count
  cartTotal.textContent = "Total: $" + total.toFixed(2);
  cartCount.textContent = totalItems;
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty! Please add some items first.");
  } else {
    alert("Thank you for your purchase! Your order has been placed. 🎉");
    clearCart();
  }
}

// Clear all items from cart
function clearCart() {
  cart = [];
  updateCartDisplay();
  document.getElementById("cart-section").classList.add("hidden");
}

// Handle contact form submission
function submitForm(event) {
  // Prevent page from reloading
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple check that fields are not empty
  if (name !== "" && email !== "" && message !== "") {
    // Show success message
    document.getElementById("form-msg").classList.remove("hidden");

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}

// Show/hide cart when cart button is clicked
document.getElementById("cart-btn").addEventListener("click", function () {
  const cartSection = document.getElementById("cart-section");

  if (cart.length === 0) {
    alert("Your cart is empty! Add some products first.");
  } else {
    if (cartSection.classList.contains("hidden")) {
      cartSection.classList.remove("hidden");
      cartSection.scrollIntoView({ behavior: "smooth" });
    } else {
      cartSection.classList.add("hidden");
    }
  }
});
