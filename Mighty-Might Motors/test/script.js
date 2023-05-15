const form = document.querySelector('form');
const cartTable = document.querySelector('.cashier-section table tbody');
const cartTotal = document.querySelector('.cart-total');
const checkoutBtn = document.querySelector('#checkout-btn');
const customerSelect = document.querySelector('#customer-select');
const assignAgentBtn = document.querySelector('#assign-agent-btn');

let cartItems = [];

function renderCart() {
  // Clear cart table
  cartTable.innerHTML = '';

  // Render cart items
  cartItems.forEach(item => {
    const tr = document.createElement('tr');
    const tdItem = document.createElement('td');
    tdItem.textContent = item.item;
    tr.appendChild(tdItem);
    const td
    Quantity = document.createElement('td');
    tdQuantity.textContent = item.quantity;
    tr.appendChild(tdQuantity);
    const tdPrice = document.createElement('td');
    tdPrice.textContent = $${item.price.toFixed(2)};
    tr.appendChild(tdPrice);
    const tdTotal = document.createElement('td');
    tdTotal.textContent = $${(item.quantity * item.price).toFixed(2)};
    tr.appendChild(tdTotal);
    cartTable.appendChild(tr);
    });
    
    // Render cart total
    const total = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    cartTotal.textContent = Total: $${total.toFixed(2)};
    }
    
    form.addEventListener('submit', e => {
    e.preventDefault();
    
    const item = document.querySelector('#item').value.trim();
    const quantity = parseInt(document.querySelector('#quantity').value);
    const price = parseFloat(document.querySelector('#price').value);
    
    if (!item || isNaN(quantity) || isNaN(price)) {
    alert('Please enter valid item information.');
    return;
    }
    
    // Add item to cart
    cartItems.push({ item, quantity, price });
    renderCart();
    
    // Clear form
    form.reset();
    });
    
    checkoutBtn.addEventListener('click', () => {
    const customer = customerSelect.value;
    
    if (!customer) {
    alert('Please select a customer.');
    return;
    }
    
    const paymentMethod = prompt('Please enter the payment method:');
    
    if (!paymentMethod) {
    alert('Please enter a valid payment method.');
    return;
    }
    
    // Send cart items, customer, and payment method to server
    // and handle response here
    // ...
    
    // Clear cart items
    cartItems = [];
    renderCart();
    
    alert('Checkout successful!');
    });
    
    assignAgentBtn.addEventListener('click', () => {
    const customer = customerSelect.value;
    
    if (!customer) {
    alert('Please select a customer.');
    return;
    }
    
    const agent = prompt('Please enter the name of the sales agent:');
    
    if (!agent) {
    alert('Please enter a valid sales agent name.');
    return;
    }
    
    // Send customer and sales agent to server
    // and handle response here
    // ...
    
    alert('Sales agent assigned successfully!');
    });