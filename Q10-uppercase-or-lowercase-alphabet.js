// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
var letter = prompt("Enter any character and check character is upperCase or lowerCase");
if (letter == (letter === null || letter === void 0 ? void 0 : letter.toUpperCase())) {
    console.log("This character is uppercase");
}
else {
    console.log("This character is lowercase");
}
