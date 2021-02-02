const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var dateCurrent = new Date();

var dtCur = dateCurrent.getUTCDate();
var hour = dateCurrent.getHours();
var min = dateCurrent.getMinutes();
var sec = dateCurrent.getSeconds();

console.log(dtCur, hour, min, sec)

let hourPos = hour*360/12 + (min*360/60)/12;
let minPos = (min*360/60)+(sec*360/60)/60;
let secPos = sec*360/60;


function clockRun() {
    hourPos = hourPos + 30/3600
    minPos = minPos + (1/60)*6;
    secPos = secPos + 360/60;



    HOURHAND.style.transform = "rotate(" + hourPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";

}


var interSet = setInterval(clockRun,1000);