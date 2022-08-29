// 7. Write a ts program to check whether a character is alphabet or not.
var char = prompt("Enter the alphabet character");
var alpha = String(char);
if (alpha >= 'a' && alpha <= 'z' || alpha >= 'A' && alpha <= 'Z') {
    console.log("".concat(alpha, " is alphabet character"));
}
else {
    console.log("".concat(alpha, " is not a alphabet character"));
}
