const btnElement = document.querySelector("#btn");
const inputElement = document.querySelector("#input");

const handleClick = () => {
  console.log("Clicked");
};

// lắng nghe sự kiện cách 2
btnElement.onClick = () => {
  console.log("Clicked");
};

// lắng nghe sự kiện cách 3
btnElement.addEventListener("click", (event) => {
  console.log("Clicked", event.target.id);
});

inputElement.addEventListener("input", (event) => {
  console.log("input", event.target.id);
});
