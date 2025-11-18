document.getElementById("display").innerText = "Timer:";
function print(seconds) {
    if (seconds < 0) {
        document.getElementById("display").innerText = "Time is up!";
    }
     else {
        document.getElementById("display").innerText = `Time left: ${seconds} seconds`;
    }
}

let seconds = 30;
let timer = setInterval(() => { 
    console.log(seconds);
    seconds--;
    print(seconds);
    if (seconds < 0) {
        clearInterval(timer);
        console.log("Time is up!");
    }
}, 1000);
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
});

