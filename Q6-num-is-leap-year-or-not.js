// 6. Write a ts program to check whether a year is leap year or not.
var userInput = prompt("Enter the leap year number");
var num = Number(userInput);
if (num % 4 == 0) {
    console.log("number is leap year");
}
else {
    console.log("number is not leap year");
}
