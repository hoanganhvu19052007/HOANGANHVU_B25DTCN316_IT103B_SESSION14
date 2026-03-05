console.log(document);

// lấy ra phần tử có healding-1
// getELementById lấy ra 1 phần tử có id duy nhất
console.log(document.getElementById("heading-1"));

// lấy ra tất cả các thẻ h1
//getElementsByTagName trả về dạng HTMlCollection
console.log(document.getElementsByTagName("h1"));

// Lấy ra phần tử có id là heading-2
console.log(document.querySelector("#heading-2"));

// lấy ra danh sách tất cả các thẻ p
console.log(document.querySelectorAll(".paragraph"));


