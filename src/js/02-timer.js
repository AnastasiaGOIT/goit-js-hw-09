import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

const btn = document.querySelector('button[data-start');
const timer = document.querySelector('.timer');
const input = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minEl = document.querySelector('span[data-minutes]');
const secEl = document.querySelector('span[data-seconds]');

btn.disabled = true;
btn.addEventListener('click', onClick);
const currentDate = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([time]) {
    if (time < currentDate) {
      Notiflix.Report.failure(
        'Error',
        'Please choose a date in the future',
        'Ok'
      );

      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  },
};

function onClick() {
  const id = setInterval(() => {
    const mainDate = new Date();
    const date = new Date(input.value).getTime();
    const difference = date - mainDate;
    const { days, hours, minutes, seconds } = convertMs(difference);
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minEl.textContent = `${minutes}`;
    secEl.textContent = `${seconds}`;
    if ((days, hours, minutes, seconds <= 0)) {
      clearInterval(id);
      return;
    }
  }, 1000);
}

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
