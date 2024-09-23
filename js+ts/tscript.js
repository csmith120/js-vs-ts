var startButton = document.querySelector('[data-action="start"]');
var stopButton = document.querySelector('[data-action="stop"]');
var resetButton = document.querySelector('[data-action="reset"]');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var timerTime = 0;
var isRunning = false;
var interval;
function startTimer() {
    if (isRunning)
        return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}
function stopTimer() {
    if (!isRunning)
        return;
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
    stopTimer();
    timerTime = 0;
    if (minutes && seconds) {
        minutes.innerText = '00';
        seconds.innerText = '00';
    }
}
function incrementTimer() {
    timerTime++;
    var numOfMinutes = Math.floor(timerTime / 60);
    var numOfSeconds = timerTime % 60;
    //console.log({numOfMinutes, numOfSeconds})
    if (minutes && seconds) {
        minutes.innerText = pad(numOfMinutes);
        seconds.innerText = pad(numOfSeconds);
    }
}
function pad(number) {
    return (number < 10) ? '0' + number : number;
    //if (number < 10) {
    //    return '0' + number
    //} else {
    //    return number;
    //}
}
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', startTimer);
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener('click', stopTimer);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', resetTimer);
