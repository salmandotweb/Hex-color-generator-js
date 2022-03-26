const color = document.querySelector(".color");
const generateBtn = document.querySelector(".generateColor");

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  color.style.backgroundColor = "#" + randomColor;
  document.body.style.backgroundColor = "#" + randomColor;
};

generateBtn.addEventListener("click", generateColor);
