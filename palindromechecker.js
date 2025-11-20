const input=document.getElementById("input");
function reverseString(str) {
    return str.split("").reverse().join("");
}
function check() {
    const value = input.value;
    // alert(value);
    const reverse = reverseString(value);
    // alert(reverse);

    if (value === reverse) {
        alert("The string is a palindrome");
    } 
    else {
        alert("The string is not a palindrome");
    }
    input.value = "";
}