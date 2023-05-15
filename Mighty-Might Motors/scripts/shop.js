// // Shop Section
// const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
// const cartItems = document.querySelector('.cart-items');
// const cartTotal = document.querySelector('.cart-total');

// // Cart Data
// let cart = [];

// addToCartButtons.forEach(button => {
//   button.addEventListener('click', addToCart);
// });

// function addToCart(event) {
//   const button = event.target;
//   const productId = button.dataset.id;

//   // Check if product is already in cart
//   const existingCartItem = cart.find(item => item.id === productId);
//   if (existingCartItem) {
//     // Increment quantity of existing item
//     existingCartItem.quantity++;
//   } else {
//     // Add new item to cart
//     const newItem = {
//       id: productId,
//       quantity: 1
//     };
//     cart.push(newItem);
//   }

//   // Update cart display
//   displayCart();
// }

// function removeFromCart(event) {
//   const button = event.target;
//   const productId = button.dataset.id;

//   // Remove item from cart
//   cart = cart.filter(item => item.id !== productId);

//   // Update cart display
//   displayCart();
// }

// function displayCart() {
//   // Clear previous items in cart
//   cartItems.innerHTML = '';

//   // Display cart items
//   cart.forEach(item => {
//     const cartItem = document.createElement('li');
//     cartItem.textContent = `Product ${item.id} x ${item.quantity}`;

//     // Add remove button for cart item
//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.dataset.id = item.id;
//     removeButton.addEventListener('click', removeFromCart);
//     cartItem.appendChild(removeButton);

//     cartItems.appendChild(cartItem);
//   });

//   // Update cart total
//   const cartTotalPrice = cart.reduce((total, item) => {
//     const itemPrice = getItemPrice(item.id);
//     return total + (itemPrice * item.quantity);
//   }, 0);
//   cartTotal.textContent = `Total: $${cartTotalPrice.toFixed(2)}`;
// }

// function getItemPrice(productId) {
//   // Replace with logic to get the price of the item with the given ID
//   // (e.g. from a server-side database or an array of items)
//   switch (productId) {
//     case 'janwik':
//       return 19.99;
//       case 'EDELAMBURGINI':
//       return 39.99;
//       case 'RAFWELET':
//       return 29.99;
//       case 'CHONDA':
//         return 15.99;

//       // Add more cases here for additional products
//       default:
//       return 0;
//       }
//       }
      
//       // Initialize cart display
//       displayCart();



const product = [
  {
      id: 0,
      image: 'images/1.png',
      title: 'Classic Roadster',
      price: 189,
  },
  {
      id: 1,
      image: 'images/3.png',
      title: 'Sports Car #1',
      price: 249,
  },
  {
      id: 2,
      image: 'images/2.png',
      title: 'Sports Car#2',
      price: 249,
  },
  {
      id: 3,
      image: 'images/4.png',
      title: 'All Terrain Vehicle',
      price: 124,
  },
  {
      id: 2,
      image: 'images/5.png',
      title: '4-Wheel Drive Cruiser',
      price: 249,
  },
  {
      id: 2,
      image: 'images/6.png',
      title: 'Santa Fe Train',
      price: 159,
  },
  {
      id: 2,
      image: 'images/7.png',
      title: 'Rechargeable Battery (6v)',
      price: 27,
  },
  {
      id: 2,
      image: 'images/8.png',
      title: 'Turbo-Injected Porsche',
      price: 249,
  },
  {
      id: 2,
      image: 'images/9.png',
      title: 'Indy Car',
      price: 249,
  },
  {
      id: 2,
      image: 'images/10.png',
      title: '2-Ton Pickup',
      price: 249,
  },
  
];
const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>$ ${price}.00</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
      </div>`
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "$ "+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }

  
}