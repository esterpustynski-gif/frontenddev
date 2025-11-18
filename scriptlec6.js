 setInterval(() => {
    function randomInt() {
        return Math.floor(Math.random()*3);
    }
    randomNumber = randomInt();
    console.log(randomNumber);
    array = ["r", "y", "g"];
for (i = 0; i < array.length; i++) {
    elem = document.getElementById(array[i]);
    elem.style.backgroundColor = "white";
}
    if (randomNumber == 0) {
        elem = document.getElementById("r");
        console.log(elem.style.backgroundColor);
        elem.style.backgroundColor = elem.getAttribute("data-color");
    }
    else if (randomNumber == 1) {
        elem = document.getElementById("y");
        console.log(elem.style.backgroundColor);
        elem.style.backgroundColor = elem.getAttribute("data-color");
    }
    else if (randomNumber == 2) {
        elem = document.getElementById("g");
        console.log(elem.style.backgroundColor);
        elem.style.backgroundColor = elem.getAttribute("data-color");
    }
  
}, 1000);