/*HTML VARIABLES*/
const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");

let intervalId = null;

minutesHtml.placeholder = "00";
hoursHtml.placeholder = "00";
secondsHtml.placeholder = "00";

listTimes = [hoursHtml,minutesHtml,secondsHtml];

/*VARIABLES*/
const modeType = 1;

function assignModeType( mode ){
    if ( mode === 1 ){
        listTimes.forEach(element => {
            element.disabled = true;
        });
    }
}

assignModeType( 1 )

function stopWatch() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    secondsHtml.placeholder  = seconds < 10 ? '0' + seconds : seconds;
    minutesHtml.placeholder = minutes < 10 ? '0' + minutes : minutes;
    hoursHtml.placeholder = hours < 10 ? '0' + hours : hours;

    const intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }

        secondsHtml.placeholder  = seconds < 10 ? '0' + seconds : seconds;
        minutesHtml.placeholder = minutes < 10 ? '0' + minutes : minutes;
        hoursHtml.placeholder = hours < 10 ? '0' + hours : hours;
    }, 1000);

    return intervalId;
}




function useStopWatch( boolean ){
    if(boolean){
        intervalId = stopWatch();
    }else{
        clearInterval(intervalId);
        intervalId = null;
    }
}


function restart(){
    minutesHtml.placeholder = "00";
    hoursHtml.placeholder = "00";
    secondsHtml.placeholder = "00";
    useStopWatch( false );
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
    secondsHtml.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    minutesHtml.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    hoursHtml.innerHTML = hours < 10 ? '0' + hours : hours;
    
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
    
            secondsHtml.innerHTML = seconds < 10 ? '0' + seconds : seconds;
            minutesHtml.innerHTML = minutes < 10 ? '0' + minutes : minutes;
            hoursHtml.innerHTML = hours < 10 ? '0' + hours : hours;
    
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    
        return intervalId;
    }

    
}
