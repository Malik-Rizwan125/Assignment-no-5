// 12. Write a ts program to input month number and print number of days in that month.
var userInput = prompt("Enter Month number");
var dayNum = Number(userInput);
if (dayNum == 1) {
    console.log("30 days in January");
}
else if (dayNum == 2) {
    console.log("28 days in Febrary");
}
else if (dayNum == 3) {
    console.log("31 days in March");
}
else if (dayNum == 4) {
    console.log("30 days in April");
}
else if (dayNum == 5) {
    console.log("31 days in May");
}
else if (dayNum == 6) {
    console.log("30 days in June");
}
else if (dayNum == 7) {
    console.log("31 days in July");
}
else if (dayNum == 8) {
    console.log("31 days in Augest");
}
else if (dayNum == 9) {
    console.log("30 days in September");
}
else if (dayNum == 10) {
    console.log("31 days in Octorbar");
}
else if (dayNum == 11) {
    console.log("30 days in November");
}
else if (dayNum == 12) {
    console.log("31 days in December");
}
else {
    console.log("Enter a valid month number");
}
;
