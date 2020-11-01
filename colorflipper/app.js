const colors = ["green", "pink", "grey", "red", "yellow", "blue", "rgba(76, 122, 98)", "rgba(133,122,200)", "rgba(13,12,200)", "rgba(33,122,20)", "#7DE2D1", "#f15025","#ce2d4f"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
