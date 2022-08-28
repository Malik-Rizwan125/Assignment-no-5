// 5. Write a ts program to check whether a number is even or odd.

var userInput: string | null = prompt("Enter the number");
var num: number = Number(userInput);
if (num % 2 == 0) {
    console.log("number is even");
} else {
    console.log("number is odd");
}