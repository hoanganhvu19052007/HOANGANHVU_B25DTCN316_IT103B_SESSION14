const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const form = document.getElementById("product-form");
const productList = document.getElementById("product-list");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const price = priceInput.value.trim();

    if (name === "" || price === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    const li = document.createElement("li");
    li.className = "product-item";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.className = "delete-btn";

    li.textContent = name + " - " + price + " VND ";
    li.appendChild(deleteBtn);

    productList.appendChild(li);

    deleteBtn.addEventListener("click", function() {

        const check = confirm("Bạn có chắc muốn xóa sản phẩm này?");

        if (check) {
            productList.removeChild(li);
        }

    });

    form.reset();
});