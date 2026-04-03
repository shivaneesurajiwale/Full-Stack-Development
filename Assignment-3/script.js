// SIMPLE PRODUCT LIST
const products = [
    { name: "Hoodie", price: 799, img: "images/hoodie.webp" },
    { name: "T-Shirt", price: 499, img: "images/tshirt.webp" },
    { name: "Jacket", price: 1499, img: "images/jacket.webp" }
];

let cartCount = 0;

// SHOW PRODUCTS
const productList = document.getElementById("productList");

if(productList){
    products.forEach(product => {
        productList.innerHTML += `
            <div class="card">
                <img src="${product.img}">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <button onclick="addToCart()">Add to Cart</button>
            </div>
        `;
    });
}

// ADD TO CART
function addToCart(){
    cartCount++;
    document.getElementById("count").innerText = cartCount;
}