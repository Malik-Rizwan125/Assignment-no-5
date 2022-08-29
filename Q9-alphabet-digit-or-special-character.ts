// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.

var char: string | null = prompt("Enter the string ,digit and spacial character");

var alpha: string = String(char);

if (alpha >= 'a' && alpha <= 'z' || alpha >= 'A' && alpha <= 'Z') {
    console.log(`${alpha} is alphabet character`);
} else if (parseInt(alpha)!= NaN) {
    console.log(`${alpha} is digit`);
} else {
    console.log(`${alpha} is special character`);
}