const piName = "Pi";
const piValue = 3.14;
const diameter = 7;
function helloHandler() {
    const userName = document.getElementById("username").value;
    document.getElementById("greeting").innerHTML = `Hello, ${userName}!`;
    console.log(`Hello, ${userName}!`);
}
let count = 0;
    function counter() {
        count ++;
        console.log(`Count ${count}`);
}
helloHandler();