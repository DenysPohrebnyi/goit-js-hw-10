import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const button = document.querySelector('button')
button.addEventListener('click', handleButton)
const input = document.querySelector('#datetime-picker')
const timerField = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate;
let counterInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  enableSeconds: true,
  dateFormat: 'Y-m-d H:i:S',
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight'
      });
      button.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      button.disabled = false;
    }
  },
};

const calendar = flatpickr(input, options);

function handleButton() {
  if (!userSelectedDate) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a valid date',
      position: 'topRight'
    });
    return;
  }
  button.disabled = true;
  input.disabled = true;
  startCounter();
};

function startCounter() {
  counterInterval = setInterval(() => {
    const currentTime = new Date();
    const deltaTime = userSelectedDate - currentTime;
    
    if (deltaTime <= 0) {
      clearInterval(counterInterval);
      updateTimer(0);
      input.disabled = false;
      return;
    }

    updateTimer(deltaTime);
  }, 1000);
}
  
function updateTimer(ms) {
const time = convertMs(ms);
timerField.days.textContent = addLeadingZero(time.days);
timerField.hours.textContent = addLeadingZero(time.hours);
timerField.minutes.textContent = addLeadingZero(time.minutes);
timerField.seconds.textContent = addLeadingZero(time.seconds);
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
