function response() {
    function greet() {
    const user = document.getElementById("user").value;
    document.getElementById("useroutput").innerHTML = `Hello, ${user}!`;
}

    function calculation() {
    const tired = document.getElementById("tired").value;
    let energy;
    energy = 100 - (tired * 20);
    document.getElementById("energyoutput").innerHTML = `Your charge level is: ${energy} %`;
    }
    greet();
    calculation();
}