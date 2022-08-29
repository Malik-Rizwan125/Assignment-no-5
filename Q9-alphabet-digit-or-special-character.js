// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
var char = prompt("Enter the string ,digit and spacial character");
var alpha = String(char);
if (alpha >= 'a' && alpha <= 'z' || alpha >= 'A' && alpha <= 'Z') {
    console.log("".concat(alpha, " is alphabet character"));
}
else if (parseInt(alpha) != NaN) {
    console.log("".concat(alpha, " is digit"));
}
else {
    console.log("".concat(alpha, " is special character"));
}
