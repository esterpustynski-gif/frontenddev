let secsElapsed = 0;
let interval = null;
const time = document.getElementById("time");
function padStart(value) {
    return String(value).padStart(2, "0");
}
function setTime() {
    const mins = Math.floor(secsElapsed / 60);
    const secs = secsElapsed % 60;
    const hours = Math.floor(mins / 60);
    time.innerHTML = `${padStart(hours)}:${padStart(mins)}:${padStart(secs)}`;
}
function timer () {
    secsElapsed++;
    setTime();
}
function startClock() {
    if (interval) stopClock();
    interval = setInterval(timer, 1000);

}
function stopClock() {
    clearInterval(interval);
}

function resetClock() {
    stopClock()
    secsElapsed = 0;
    setTime();

}
