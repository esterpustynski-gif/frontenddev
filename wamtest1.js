function moleGenerator() {
    setInterval(() => {
        const i = Math.random();
    if (i < 1/9) {
        console.log("Mole 1");
}
    else if (i < 2/9) {
        console.log("Mole 2");
}
    else if (i < 3/9) {
        console.log("Mole 3");
}
    else if (i < 4/9) {
        console.log("Mole 4");
}
    else if (i < 5/9) {
        console.log("Mole 5");
}
    else if (i < 6/9) {
        console.log("Mole 6");
}
    else if (i < 7/9) {
        console.log("Mole 7");
}
    else if (i < 8/9) {
        console.log("Mole 8");
}
    else {
        console.log("Mole 9");
}
}, 1000);
}
moleGenerator();

