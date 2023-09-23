import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';

const btn = document.querySelector('button[data-start');
const timer = document.querySelector('.timer');

btn.disabled = true;
btn.addEventListener('click', () => options.onClose());

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = Date.now();

    if (selectedDates[0] < currentDate) {
      alert('Please choose a date in the future');
    } else if (selectedDates[0] > currentDate) {
      btn.disabled = false;
    }
    setInterval(() => {
      const exact = Date.now();
      const delta = exact - currentDate;
      const components = convertMs(delta);
      updateInterface(components);
    }, 1000);
  },
};

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

// console.log(convertMs(seconds));
// console.log(convertMs(140000));
// console.log(convertMs(24140000));

function updateInterface({ days, hours, minutes, seconds }) {
  timer.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds `;
}
