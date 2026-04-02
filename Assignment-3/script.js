const products = [
    {
        name: "Oversized Hoodie",
        price: 1999,
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
    },
    {
        name: "Denim Jacket",
        price: 2499,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
    },
    {
        name: "Casual T-Shirt",
        price: 999,
        image: "https://images.unsplash.com/photo-1520974735194-97a01fcd58d4"
    },
    {
        name: "Sneakers",
        price: 2999,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552"
    }
];

let cartCount = 0;

function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(div);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

displayProducts();