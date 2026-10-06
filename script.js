

const price = 5999;

let quantity = 1;
let cartCount = 0;
let selectedSize = "8";
let selectedColor = "Black";
let flipped = false;


// 3D FLIP
function flipProduct() {

  const product = document.getElementById("productInner");

  flipped = !flipped;

  if (flipped) {
    product.style.transform = "rotateY(180deg)";
  } else {
    product.style.transform = "rotateY(0deg)";
  }

}


// QUANTITY
function changeQuantity(amount) {

  quantity += amount;

  if (quantity < 1) {
    quantity = 1;
  }

  if (quantity > 10) {
    quantity = 10;
  }

  document.getElementById("quantity").textContent = quantity;

  updatePrice();

}


// UPDATE TOTAL
function updatePrice() {

  const total = price * quantity;

  document.getElementById("totalPrice").textContent =
    total.toLocaleString("en-IN");

}


// COLOR
function selectColor(element, color) {

  document
    .querySelectorAll(".color")
    .forEach(button => button.classList.remove("active"));

  element.classList.add("active");

  selectedColor = color;

}


// SIZE
function selectSize(element) {

  document
    .querySelectorAll(".size")
    .forEach(button => button.classList.remove("active"));

  element.classList.add("active");

  selectedSize = element.textContent;

}


// ADD TO CART
function addToCart() {

  cartCount += quantity;

  document.getElementById("cartCount").textContent =
    cartCount;

  showNotification(
    `${quantity} × Nike Zoom Winflo 6 added to bag`
  );

}


// NOTIFICATION
function showNotification(message) {

  const notification =
    document.getElementById("notification");

  notification.textContent = message;

  notification.classList.add("show");

  setTimeout(() => {

    notification.classList.remove("show");

  }, 2500);

}

