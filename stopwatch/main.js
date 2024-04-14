/*HTML VARIABLES*/
const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

minutesHtml.placeholder = "00";
hoursHtml.placeholder = "00";
secondsHtml.placeholder = "00";

listTimes = [hoursHtml,minutesHtml,secondsHtml];

/*VARIABLES*/
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let pausedTime = 0;
let isPaused = false;
let startButtonClicked = true; 

/*FUNCTIONS*/
function assignModeType( mode ){
    if ( mode === 1 ){
        listTimes.forEach(element => {
            element.disabled = true;
        });
        startButton.innerHTML = "Start";
        startButton.onclick = playButtonStopWatchMode; 
    }
}


assignModeType( 1 )


function playButtonStopWatchMode() {
    startButtonClicked = !startButtonClicked; 

    if (startButtonClicked) {
        startButton.innerHTML = "Pause";
        useStopWatch(1); 
    } else {
        startButton.innerHTML = "Start";
        useStopWatch(2);
    }
}

function updateDisplay() {
    secondsHtml.placeholder = seconds < 10 ? '0' + seconds : seconds;
    minutesHtml.placeholder = minutes < 10 ? '0' + minutes : minutes;
    hoursHtml.placeholder = hours < 10 ? '0' + hours : hours;
}

function stopWatch() {
    return setInterval(() => {
        if (!isPaused) {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }
    }, 1000);
}

function pauseStopWatch() {
    clearInterval(intervalId);
    pausedTime = hours * 3600 + minutes * 60 + seconds;
    isPaused = true;
}

function restartStopWatch() {
    isPaused = false;
    seconds = pausedTime % 60;
    minutes = Math.floor((pausedTime % 3600) / 60);
    hours = Math.floor(pausedTime / 3600);
    clearInterval(intervalId);
    intervalId = stopWatch(); // Aquí asignamos el nuevo intervalo a intervalId
}

function useStopWatch(selection) {
    switch (selection) {
        case 1:
            isPaused = false;
            clearInterval(intervalId);
            intervalId = stopWatch();
            break;
        case 2:
            pauseStopWatch();
            break;
        case 3:
            restartStopWatch();
            break;
        case 4:
            resetStopWatch();
            break;
    }
}



function resetStopWatch(){
    minutesHtml.placeholder = "00";
    hoursHtml.placeholder = "00";
    secondsHtml.placeholder = "00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    isPaused = true;
    intervalId = null;
    clearInterval(intervalId);
    updateDisplay()
}

function timer() {
    let seconds = parseInt(secondsInputHtml.value);
    let minutes = parseInt(minutesInputHtml.value);
    let hours = parseInt(hoursInputHtml.value);
    
    if (isNaN(seconds) || seconds === "" || seconds === null || seconds === undefined) {
        seconds = 0;
    }

    if (isNaN(minutes) || minutes === "" || minutes === null || minutes === undefined) {
        minutes = 0;
    }

    if (isNaN(hours) || hours === "" || hours === null || hours === undefined) {
        hours = 0;
    }
    updateDisplay()
    
    if ( hours != 0 || seconds != 0 || minutes != 0 ){
        const intervalId = setInterval(() => {
            seconds--;
    
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
            }
    
            updateDisplay()
    
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    
        return intervalId;
    }

    
}
