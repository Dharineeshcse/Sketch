const userName = prompt("Enter Your Name:");
const userDisplay = document.querySelector(".user");
const greetings = `Welcome, ${userName}`;
userDisplay.textContent = greetings;
const canvas = document.querySelector("#Sketch-board");
const shakeButton = document.querySelector("#clearButton");
const ctx = canvas.getContext("2d");
let { height, width } = canvas;
const LineSpeed = 10;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let strokecolor = 0;
ctx.strokeStyle = `hsl(${strokecolor},50%,50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
function draw(e) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  strokecolor += 10;
  ctx.strokeStyle = `hsl(${strokecolor},50%,50%)`;

  switch (e) {
    case "ArrowUp":
      y -= LineSpeed;
      break;
    case "ArrowDown":
      y += LineSpeed;
      break;
    case "ArrowLeft":
      x -= LineSpeed;
      break;
    case "ArrowRight":
      x += LineSpeed;
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw(e.key);
  }
}
function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}
window.addEventListener("keydown", handleKey);
shakeButton.addEventListener("click", clearCanvas);
