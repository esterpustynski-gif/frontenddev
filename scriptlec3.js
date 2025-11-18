
function greeter(userName, greeting) {
    let outputHtml = "";
if (userName == "Ester" || userName == "ester") {
    outputHtml = "You like JavaScript!";
} else if (userName == "Oscar" || userName == "oscar") {
    outputHtml = "You like Python!";
} else {
    outputHtml = "Who the hell are you and why are you on my computer?";
}
outputHtml = `${outputHtml}, ${greeting}`;
console.log(outputHtml);
document.getElementById("greeting").innerHTML = outputHtml;
}
greeter("ester");

