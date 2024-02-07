let min = 0;
let sec = 0;
let ms = 0;
let isstart = true;
let timer = document.getElementById("time");
let stoptimer;

function togglestart() {
    if (isstart) {
        isstart = false;
        document.getElementById("start").innerText = "stop";
        stoptimer = setInterval(start, 100);

    }
    else {
        isstart = true;
        stop();
    }
}

function start() {
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (ms < 10) {
        ms = "0" + ms;
    }
    timer.innerText = min + ":" + sec +":" + ms;

    min = parseInt(min);
    sec = parseInt(sec);
    ms = parseInt(ms);

    ms++;
    if (ms == 60) {
        ms = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;

    }
}
function stop() {
    document.getElementById("start").innerText = "start";
    clearInterval(stoptimer);
}
function restart() {
    stop();
    timer.innerText = "00:00:00";
    min = 0;
    sec = 0;
    ms = 0;
}