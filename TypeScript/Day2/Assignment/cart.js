let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.querySelector("#cart-items");

function displayCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  let html = "";
  let total = 0;

  cart.forEach((product, index) => {
    total += product.price;
    html += `
            <div class="item">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
  });

  container.innerHTML = html;
  document.querySelector("#total").innerText = "Total: " + total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();
