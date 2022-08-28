// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
var userInput = prompt("Enter the any alphabet character");
if (userInput == 'a' || userInput == 'e' || userInput == 'i' || userInput == 'o' || userInput == 'u') {
    console.log(userInput, "character is vowel alphabet");
}
else if (userInput == 'A' || userInput == 'E' || userInput == 'I' || userInput == 'O' || userInput == 'U') {
    console.log(userInput, "character is vowel alphabet");
}
else {
    console.log(userInput, "character is consonant alphabet");
}
