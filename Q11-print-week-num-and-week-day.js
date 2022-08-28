// 11. Write a ts program to input week number and print week day.
var userInput = prompt("Enter the week number");
var week = Number(userInput);
if (week == 1) {
    console.log(week, "Today is Monday");
}
else if (week == 2) {
    console.log(week, "Today is Tuesday");
}
else if (week == 3) {
    console.log(week, "Today is Wednesday");
}
else if (week == 4) {
    console.log(week, "Today is Thusday");
}
else if (week == 5) {
    console.log(week, "Today is Friday");
}
else if (week == 6) {
    console.log(week, "Today is Saturday");
}
else if (week == 7) {
    console.log(week, "Today is Sunday");
}
else {
    console.log("Enter a valid week number 1-7");
}
