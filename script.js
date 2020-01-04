for (let i = 1; i <= 16; i++) {
  const colorBox = document.createElement("div");
  document.body.appendChild(colorBox);
}
function random(number) {
  return Math.floor(Math.random() * number);
}
function backgroundColor() {
  const randomColor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  return randomColor;
}
const divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = backgroundColor();
  };
}
