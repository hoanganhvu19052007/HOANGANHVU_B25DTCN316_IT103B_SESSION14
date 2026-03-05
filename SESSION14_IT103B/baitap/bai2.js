const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const form = document.getElementById("products-form");
const productsList = document.getElementById("products-list");
const nameInput = document.getElementById("products-name");
const priceInput = document.getElementById("products-price");

// bai nay em tham khao AI ạ
form.addEventListener("submit", function (event) {
    event.preventDefault(); // ngăn reload trang

    const name = nameInput.value.trim();
    const price = priceInput.value.trim();

    const newProducts = {
        id: Date.now(),
        name: name,
        price: Number(price)
    };

    const li = document.createElement("li");

    li.innerHTML = `
        ${newProducts.name} - ${newProducts.price}
    `;

    productsList.appendChild(li);

    nameInput.value = "";
    priceInput.value = "";
});