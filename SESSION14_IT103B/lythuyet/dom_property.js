// Lấy ra nội dung của 1 thẻ (2 bước)
// B1: Lấy ra phần tử đó
const headingElement = document.querySelector("#heading-1");
const heading2Element = document.querySelector("#heading-2");
const listElement = document.querySelector("#list");
const contentElement = document.querySelector("#content");
const bodyElement = document.body;
// B2: Thông qua phần tử sẽ truy cập vào nội dung
console.log("textContent: ",headingElement.textContent);

console.log("innerText: ", headingElement.innerText);

console.log("innerHTML: ", headingElement.innerHTML);

// Thay đổi nội dung của thẻ 
headingElement.textContent = "Nội dung đã bị thay đổi";

heading2Element.innerText = "Nội dung 2 bị thay đổi";

listElement.innerHTML = "<li>Nội dung 1</li>";

// Thay đổi style của 1 phần tử HTML bằng js
// contentElement.style.color = "red";
// contentElement.style.fontWeight = "700";
// contentElement.style.border = "1px solid black";

// Thêm class
contentElement.classList.add("content");

// Xóa class
contentElement.classList.remove("text");

bodyElement.classList.add("dark");

// Tạo 1 thẻ HTML bằng js
const divElement =  document.createElement("div");
divElement.textContent = "Nội dung thẻ div";
divElement.setAttribute("class", "content");
divElement.setAttribute("id", "content");

// Gán thẻ vừa tạo vào 1 vị trí cụ thể 
bodyElement.append(divElement);

''