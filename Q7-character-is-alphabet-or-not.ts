// 7. Write a ts program to check whether a character is alphabet or not.

var char: string | null = prompt("Enter the alphabet character");
var alpha: string = String(char);

if (alpha >= 'a' && alpha <= 'z' || alpha >= 'A' && alpha <= 'Z') {
    console.log(`${alpha} is alphabet character`);
} else {
    console.log(`${alpha} is not a alphabet character`);
}