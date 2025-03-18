let jsMsec = 0;
let jsSec = 0;
let jsMin = 0;


let msSec = document.getElementById("msec");
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let btn = document.querySelector("button");

let interval;

const start = () => {
    interval = setInterval(() => {
        jsMsec++;
        msSec.innerHTML = jsMsec;
        if (jsMsec >= 100) {
            jsSec++;
            sec.innerHTML = jsSec;
            jsMsec = 0;
        } else if (jsSec >= 59) {
            jsMin++;
            min.innerHTML = jsMin;
            jsSec = 0;
        }
        btn.disabled = true;
    }, 10)
}

const stop = () => {
    clearInterval(interval);
    btn.disabled = false;
}

const reset = () => {
    jsMsec = 0;
    jsSec = 0;
    jsMin = 0;
    msSec.innerHTML = jsMsec;
    sec.innerHTML = jsSec;
    min.innerHTML = jsMin;
    clearInterval(interval);
    btn.disabled = false;
}
