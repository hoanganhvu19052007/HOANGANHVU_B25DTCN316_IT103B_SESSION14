const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let str = "";

for (let i = 0; i < products.length; i++) {
  str += `
    <div class="product">
        <p>Tên sản phẩm: ${products[i].name}</p>
        <p>Giá tiền: ${products[i].price} VND</p>
    </div>
  `;
}

document.getElementById("product-list").innerHTML = str; 