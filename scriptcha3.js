const minMins = 0;
const maxMins = 1440;

function response() {
    if (document.getElementById("mins").value == minMins) {
        document.getElementById("output").innerHTML = "You need to try a little more!";
    } 
    else if (document.getElementById("mins").value >= 5 && document.getElementById("mins").value < 15) {
        document.getElementById("output").innerHTML = "Not bad!";
    } 
    else if (document.getElementById("mins").value >= 15 && document.getElementById("mins").value < 30) {
        document.getElementById("output").innerHTML = "Good job!";
    } 
    else if (document.getElementById("mins").value >= 30 && document.getElementById("mins").value < 60) {
        document.getElementById("output").innerHTML = "Excellent work, keep it up!";
    } 
    else if (document.getElementById("mins").value >= 60 && document.getElementById("mins").value < maxMins) {
        document.getElementById("output").innerHTML = "Get some rest now :)";
    }
    else if (document.getElementById("mins").value < 0) {
        document.getElementById("output").innerHTML = "Try harder :(";
    } 
    else if (document.getElementById("mins").value == maxMins) {
        document.getElementById("output").innerHTML = "Are you ok?";
    } 
    else {
        document.getElementById("output").innerHTML = "Please enter a number.";
    }
}
response();