const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "red";
function setColour(name) {
    body.style.backgroundColor = name;
}
setColour("green")
setColour("blue")
setColour("red")

function getRandomColour() {
    Math.random();
    if (Math.random() < 0.33) {
        return "green";
    } else if (Math.random() < 0.66) {
        return "blue";
    } else {
        return "red";
    }
}

setColour(getRandomColour());