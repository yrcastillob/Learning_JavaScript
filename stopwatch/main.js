/**/
const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");
let intervalId = null;

minutesHtml.innerHTML = "0";
hoursHtml.innerHTML = "0";
secondsHtml.innerHTML = "0";

function stopWatch() {

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    minutesHtml.innerHTML = minutes;
    hoursHtml.innerHTML = hours;

    intervalId = setInterval(() => {
        seconds++;
        secondsHtml.innerHTML = seconds;
        
        if (seconds === 59) {
            seconds = 0;
            minutes++;
            minutesHtml.innerHTML = minutes;
            if (minutes === 59) {
                minutes = 0;
                hours++;
                hoursHtml.innerHTML = hours;
            } 
        }
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

