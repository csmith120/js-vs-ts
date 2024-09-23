const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;



function startTimer() {

}

function stopTimer() {
    
}


function resetTimer() {
    
}

function incrementTimer() {
        timerTime++;
    
        const numOfMinutes = Math.floor(timerTime / 60);
        const numOfSeconds = timerTime % 60;
    
        //console.log({numOfMinutes, numOfSeconds})
    
        minutes.innerText = pad(numOfMinutes);
        seconds.innerText = pad(numOfSeconds);
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
    //if (number < 10) {
    //    return '0' + number
    //} else {
    //    return number;
    //}
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);