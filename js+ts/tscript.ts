const startButton = document.querySelector<HTMLButtonElement>('[data-action="start"]');
const stopButton = document.querySelector<HTMLButtonElement>('[data-action="stop"]');
const resetButton = document.querySelector<HTMLButtonElement>('[data-action="reset"]');
const minutes = document.querySelector<HTMLSpanElement>('.minutes');
const seconds = document.querySelector<HTMLSpanElement>('.seconds');

let timerTime: number = 0;
let isRunning: boolean = false;
let interval: number | undefined;

function startTimer(): void {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer():void {
    if(!isRunning) return;

    isRunning = false;
    clearInterval(interval);
}


function resetTimer():void {
    stopTimer();

    timerTime = 0;
    if (minutes && seconds){
        minutes.innerText = '00';
        seconds.innerText = '00';
    }
}

function incrementTimer():void {
    timerTime++;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;

    //console.log({numOfMinutes, numOfSeconds})
    if (minutes && seconds){
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

startButton?.addEventListener('click', startTimer);
stopButton?.addEventListener('click', stopTimer);
resetButton?.addEventListener('click', resetTimer);