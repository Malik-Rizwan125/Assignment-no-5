// 6. Write a ts program to check whether a year is leap year or not.

var userInput:string | null = prompt("Enter the leap year number");
var num:number = Number(userInput);
if(num % 4 ==0){
    console.log("number is leap year");
}else{
    console.log("number is not leap year");
}