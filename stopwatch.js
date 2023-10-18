document.querySelector('.js-toggle-timer-button')
  .addEventListener('click', () => {
    toggleTimer();
  });

let timerIsOn = false
let intervalId;
const stopwatchDisplayElement = document.querySelector('.js-stopwatch-display');
const toggleButtonElement = document.querySelector('.js-toggle-timer-button');

function toggleTimer() {
  if (timerIsOn === false) {
    let secondTime = 0;
    let minuteTime = 0;
    let hourTime = 0;
    timerIsOn = true;
    toggleButtonElement.innerHTML = 'Stop';

    intervalId = setInterval(() => {
      secondTime++;

      if (secondTime >= 60) {
        secondTime = 0;
        minuteTime++;
      }

      if (minuteTime >= 60) {
        minuteTime = 0;
        hourTime++;
      }

      stopwatchDisplayElement.innerHTML = `${hourTime}:${minuteTime}:${secondTime}`
    }, 1000);
  } else {
    clearInterval(intervalId);
    toggleButtonElement.innerHTML = 'Start';
    timerIsOn = false;
  }
}