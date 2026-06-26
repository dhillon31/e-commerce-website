let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cartCount");
cartCount.innerText = cart.length;

const buttons = document.querySelectorAll(".addBtn");

buttons.forEach(button => {

button.addEventListener("click", () => {

const card = button.parentElement;

const product = {
name: card.querySelector("h3").innerText,
price: card.querySelector(".price").innerText,
image: card.querySelector("img").src
};

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

cartCount.innerText = cart.length;

button.innerText="Added ✓";

setTimeout(()=>{
button.innerText="Add to Cart";
},1000);

});

});