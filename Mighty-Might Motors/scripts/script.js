// Get the "Add to Cart" buttons
var addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

// Get the shopping cart dropdown and its content
var cartDropdown = document.querySelector(".cart .dropdown-content");

// Set the initial cart item count to zero
var cartItemCount = 0;

// Add event listeners to each "Add to Cart" button
addToCartBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // Get the price and name of the product
    var price = parseFloat(btn.getAttribute("data-price"));
    var name = btn.getAttribute("data-name");

    // Add the product to the shopping cart
    var cartItem = document.createElement("div");
    cartItem.textContent = "Product " + (cartItemCount + 1) + " - Price: $" + price.toFixed(2);
    cartDropdown.appendChild(cartItem);

    // Increment the cart item count and update the cart total
    cartItemCount++;
    updateCartTotal();
  });
});

// Function to update the cart total
function updateCartTotal() {
  var cartTotal = 0;
  cartDropdown.innerHTML = ""; // clear the cart dropdown content

  // create a cart item for each product in the cart
  var cartItems = cartDropdown.querySelectorAll(".cart-item");
  cartItems.forEach(function(item) {
    var price = parseFloat(item.getAttribute("data-price"));
    var name = item.getAttribute("data-name");

    // Add the product to the shopping cart
    var cartItem = document.createElement("div");
    cartItem.textContent = name + " - $" + price.toFixed(2);
    cartItem.setAttribute("data-price", price); // set the data-price attribute
    cartDropdown.appendChild(cartItem);
  });

  cartDropdown.parentElement.querySelector("a").textContent = "Shopping Cart - Total: $" + cartTotal.toFixed(2) + " (" + cartItems.length + " items)";
}