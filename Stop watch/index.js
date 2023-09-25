let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timerDisplay = document.getElementById("timer");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

function startStopTimer() {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = "Start";
  } else {
    timer = setInterval(updateTimer, 1000);
    startStopBtn.textContent = "Stop";
  }
  isRunning = !isRunning;
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }   
  }
  const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  timerDisplay.textContent = timeString;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerDisplay.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
}

function pad(number) {
  return number.toString().padStart(2, "0");
}

startStopBtn.addEventListener("click", startStopTimer);
resetBtn.addEventListener("click", resetTimer);
