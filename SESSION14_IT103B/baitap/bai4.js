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

  const nameSpan = document.createElement("span");
  nameSpan.textContent = products[i].name + " - ";

  const priceSpan = document.createElement("span");
  priceSpan.textContent =
    Number(products[i].price).toLocaleString("vi-VN") + " VND";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Sửa giá";
  editBtn.className = "edit-price-btn";

  li.appendChild(nameSpan);
  li.appendChild(priceSpan);
  li.appendChild(editBtn);

  productList.appendChild(li);

  editBtn.addEventListener("click", function () {
    let newPrice = prompt("Nhập giá mới (VND):");

    if (newPrice === null) return;

    if (newPrice === "" || isNaN(newPrice)) {
      alert("Giá không hợp lệ");
      return;
    }

    priceSpan.textContent = Number(newPrice).toLocaleString("vi-VN") + " VND";

    products[i].price = Number(newPrice);
  });
}
