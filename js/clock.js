const clockHours = document.querySelector(".clock-div .hours");
const clockMinutes = document.querySelector(".clock-div .minutes");

let changeMinutes = -1;

function printClock(){
    const nowDate = new Date();

    if(changeMinutes !== nowDate.getMinutes()){
        changeMinutes = nowDate.getMinutes();
        
        clockHours.innerHTML = String(nowDate.getHours()).padStart(2,"0");
        clockMinutes.innerHTML = String(nowDate.getMinutes()).padStart(2,"0");
    }
}

printClock();
setInterval(printClock, 1000);