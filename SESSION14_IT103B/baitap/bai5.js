const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const productList = document.getElementById("product-list");

for (let i = 0; i < products.length; i++) {

    const li = document.createElement("li");
    li.className = "product-item";

    li.textContent =
        products[i].name + " - " +
        Number(products[i].price).toLocaleString("vi-VN") + " VND";

    productList.appendChild(li);
}
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {

    const keyword = searchInput.value.toLowerCase();

    const items = document.querySelectorAll(".product-item");

    for (let i = 0; i < items.length; i++) {

        const text = items[i].textContent.toLowerCase();

        if (text.includes(keyword)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }

    }

});