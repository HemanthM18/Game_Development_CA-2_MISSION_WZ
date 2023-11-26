
const container = document.querySelector(".container");
const blood = document.querySelector(".blood");
const start = document.querySelector(".start");

const zombie = document.createElement("img");
zombie.setAttribute("class", "zombie");
zombie.setAttribute("src", "./Img/zombie-6.png");

const height = container.offsetHeight;
const width = container.offsetWidth;

// Function to position zombie randomly
setInterval(() => {
  const randLeft = Math.random() * (width - 100);
  // Generate random left position
  zombie.style.position = "absolute";
  zombie.style.left = randLeft + "px";
}, 300);

let score2 = 0;
let timer;
let secondsLeft = 20;
let timerDisplay;

start.addEventListener("click", () => {
  // Appending zombie to container
  container.appendChild(zombie);

  // Creating timer display element
  timerDisplay = document.createElement("div");
  timerDisplay.classList.add("timer");
  timerDisplay.style.position = "absolute";
  timerDisplay.style.top = "10%px";
  timerDisplay.style.right = "45.4%";
  timerDisplay.style.padding = "10px";
  timerDisplay.style.background = "rgba(0, 0, 0, 0.5)";
  timerDisplay.style.color = "white";
  timerDisplay.style.fontFamily = "Arial, sans-serif";
  timerDisplay.style.fontSize = "1.2rem";

  // Appending timer display to container
  container.appendChild(timerDisplay);

  // Starting timer
  timer = setInterval(() => {
    secondsLeft--;
    timerDisplay.innerText = "Time left: " + secondsLeft + "s";
    if (secondsLeft <= 0 || score2 == 5) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
});

window.addEventListener("click", (e) => {
  // Set blood position to click coordinates
  blood.style.top = e.pageY + "px";
  blood.style.left = e.pageX + "px";

  // Check if click target is zombie, increment score
  if (e.target === zombie) score2++;
  saveScore2(score2);
  // Update score display
  start.innerText = "SCORE: " + score2;
});

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  // set cursor position
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

var div = document.getElementById('instruction');

// Instruction visibility
function hide(){
    div.style.display = 'none';
}

// Check if score is greater than 5
function endGame() {
  if (score2 == 5) {
    window.location.href = "./win-3.html";
  } else {
    window.location.href = "./game-over-3.html";
  }
}

document.getElementById("result").innerHTML=localStorage.getItem("textvalue");

function saveScore2(score2) {
  localStorage.setItem('score2', score2);
}

function getScore2() {
  return localStorage.getItem('score2');
}
