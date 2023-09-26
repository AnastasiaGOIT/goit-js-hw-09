const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const div = document.querySelector('div');

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

div.classList.add('start');

let id = null;

function onClickStart() {
  id = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnDisabled(!false);
}

function btnDisabled(e) {
  stopBtn.disabled = !e;
  startBtn.disabled = e;
}

function onClickStop() {
  clearInterval(id);
  btnDisabled(false);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
