const container = document.querySelector("#product-list");
let allProducts = [];

async function loadProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    allProducts = data.products;
    displayProducts(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  let html = "";
  products.forEach((element, index) => {
    html += `
            <div class="product">
                <img src="${element.thumbnail}">
                <h3>${element.title}</h3>
                <p>$${element.price}</p>
                <button onclick="addToCart(${index})">
                    Add To Cart
                </button>
            </div>
        `;
  });
  container.innerHTML = html;
}

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = allProducts[index];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

loadProducts();
