/****************************** HTML VARIABLES ******************************/
const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

minutesHtml.value = "00";
hoursHtml.value = "00";
secondsHtml.value = "00";

listTimes = [hoursHtml,minutesHtml,secondsHtml];

/****************************** VARIABLES ******************************/
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let pausedTime = 0;
let isPaused = false;
let startButtonClicked = true; 

/****************************** FUNCTIONS ******************************/

function assignModeType( mode ){
    /*
    Select the mode type for the program, 1 for stop watch, 2 for the timer.
    Params: 
        • mode int between 1 or 2.
    Requires:
        • Existance of global variables listTimes, resetButton, startButton, startButtonClicked.
        • Existance of functions useStopWatch() and playButtonStopWatchMode()
    */
    if ( mode === 1 ){
        listTimes.forEach(element => {
            element.disabled = true;
        });
        resetButton.onclick = () => useStopWatch(3);
        startButton.innerHTML = "Start";
        startButtonClicked = false;
        startButton.onclick = playButtonStopWatchMode; 
    } else if ( mode === 2 ){
        listTimes.forEach(element => {
            element.disabled = false;
        });
        resetButton.onclick = () => useStopWatch(3);
        startButton.innerHTML = "Start";
        startButtonClicked = false;
        startButton.onclick = playButtonTimerhMode;
    }
}

/****************************** STOP WATCH FUNCTIONS ******************************/

function playButtonStopWatchMode() {
    /*
    Function to manage the behavior of the button of start, it switches between pause and 
    play to manage the stopwacht depending on the click.
    Requires:
        • Existance of global variables startButtonClicked, startButton.
        • Existance of function useStopWatch().
    */
    startButtonClicked = !startButtonClicked; 

    if (startButtonClicked) {
        startButton.innerHTML = "Pause";
        useStopWatch(1); 
    } else {
        startButton.innerHTML = "Start";
        useStopWatch(2);
    }
}

function stopWatch() {
    /*
    Function to use the stopwatch. It updates and excecutes the stopwatch.
    Requires: 
       • That global variable of seconds, minutes, hour, isPaused exist.
       • Existance of function updateDisplay(). 
    */
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
    /*
    Function to pause the stop watch and it turn isPaused into false.
    Requires:
        • Existance of global variable isPaused and intervalId.
        • Existance of function clearInterval()
    */
    clearInterval(intervalId);
    isPaused = true;
}

function resetStopWatch(){
    /*
    Function to reset the stop watch into zero.
    Requires:
        • Existance of global variables seconds, minutes, hours, intervalId, isPaused.
        • Existance of functions clearInterval() and updateDisplay()
    */
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(intervalId);
    intervalId = null;
    updateDisplay();
    isPaused = true;
}

function useStopWatch(selection) {
    /*
    Function to execute the function depending of the selection to handle the stopwatch.
    Params:
        • selection: int between 1 and 3.
    Requires:
        • Existence of functions clearInterval(), pauseStopWatch() and resetStopWatch()
        • Existence of global variables isPaused and intervalId
    */
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
            resetStopWatch();
            break;
    }
}


/****************************** TIMER FUNCTIONS ******************************/

function timer() {
    /*
    Function to use the timer. It updates and excecutes the timer.
    Requires: 
       • That global variable of seconds, minutes, hour, isPaused exist.
       • Existance of function updateDisplay(). 
    */
    seconds = parseInt(secondsHtml.value);
    minutes = parseInt(minutesHtml.value);
    hours = parseInt(hoursHtml.value);
    
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
        return intervalId = setInterval(() => {
            if (!isPaused) {
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
            }
            
        }, 1000);
    }
  
}

function useTimer(selection) {
    /*
    Function to execute the function depending of the selection to handle the timer.
    Params:
        • selection: int between 1 and 3.
    Requires:
        • Existence of functions clearInterval(), pauseStopWatch() and resetStopWatch()
        • Existence of global variables isPaused and intervalId
    */
    switch (selection) {
        case 1:
            isPaused = false;
            clearInterval(intervalId);
            intervalId = timer();
            break;
        case 2:
            pauseStopWatch();
            break;
        case 3:
            resetStopWatch();
            break;
    }
}

function playButtonTimerhMode() {
    /*
    Function to manage the behavior of the button of start, it switches between pause and 
    play to manage the stopwacht depending on the click.
    Requires:
        • Existance of global variables startButtonClicked, startButton.
        • Existance of function useStopWatch().
    */
    startButtonClicked = !startButtonClicked; 

    if (startButtonClicked) {
        startButton.innerHTML = "Pause";
        useTimer(1); 
    } else {
        startButton.innerHTML = "Start";
        useTimer(2);
    }
}

/***************************** FUNCTION TO UPDATE DISPLAY *****************************/

function updateDisplay() {
    /*
    Function to update the placeholder of the input parts of the program.
    It always assure that it is in the two digit format as mininum.
    Requires:
        • Existance of global variables secondsHtml minutesHtml hoursHtml.
    */
    secondsHtml.value = seconds < 10 ? '0' + seconds : seconds;
    minutesHtml.value = minutes < 10 ? '0' + minutes : minutes;
    hoursHtml.value = hours < 10 ? '0' + hours : hours;
}


assignModeType( 2 )