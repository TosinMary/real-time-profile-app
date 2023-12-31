const weekDay = document.querySelector(".dayOfTheWeek")
const timer = document.querySelector(".timer");
const milliSecondsDate = document.querySelector(".milliSecondsDate")


const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = daysOfTheWeek[d.getDay()]
let milliSeconds = d.getTime();

function showDay () {
    milliSecondsDate.innerHTML = milliSeconds;
    weekDay.innerHTML = day;
};

document.addEventListener(onload, showDay());


let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

leadingHours = 0;
leadingMinutes = 0;
leadingSeconds = 0;


function realTime () {
    seconds++
    if(seconds/60 === 1){
        seconds = 0;
        minutes++

        if (minutes/60 === 1){
            minutes = 0;
            hours++
        }
    }
    if (hours < 10) {
      leadingHours = "0" + hours.toString();

    }else {
        leadingHours = hours;
    }
    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();

    }else {
        leadingMinutes = minutes;
    }
    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();

    }else {
        leadingSeconds = seconds;
    }
   
  let displayTime = timer.innerText = leadingHours + " :" + leadingMinutes + " :" + leadingSeconds;
 
}
window.setInterval(realTime, 1000);

