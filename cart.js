let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

function displayCart(){

cartItems.innerHTML = "";

let total = 0;

if(cart.length === 0){
cartItems.innerHTML = "<h2>Cart is Empty</h2>";
totalPrice.innerText = "0";
return;
}

cart.forEach((product,index)=>{

let price = parseInt(product.price.replace(/[^\d]/g, ""));
  if (isNaN(price)) price = 0;


total += price;

cartItems.innerHTML += `
<div class="item">

<img src="${product.image}">

<div class="item-details">
<h3>${product.name}</h3>
<p>${product.price}</p>
</div>

<button class="remove-btn"
onclick="removeItem(${index})">
Remove
</button>

</div>
`;

});

totalPrice.innerText = total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

displayCart();

document.getElementById("orderBtn")
.addEventListener("click",()=>{

alert("Order Placed Successfully!");

localStorage.removeItem("cart");

window.location.reload();

});
