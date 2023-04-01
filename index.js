const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
let interval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
function formatTime(seconds) {
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const seconds = Math.floor(seconds % 60);

  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}

const createTimerAnimator = (duration, display) => {
  let start = Date.now();
  let diff;
  function timer() {
    diff = duration - ((Date.now() - start) / 1000 || 0);
    display.textContent = formatTime(diff);
    if (diff <= 0) {
      clearInterval(interval);
    }
  }
  timer();
  clearInterval(interval);
  interval = setInterval(timer, 1000);
};

inputEl.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  createTimerAnimator(seconds, document.getElementById("timer"));

  inputEl.value = "";
});
