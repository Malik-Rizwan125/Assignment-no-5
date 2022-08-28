// 18. Write a ts program to calculate profit or loss.

var costInput: string | null = prompt("Enter the cost price");
var sellInput: string | null = prompt("Enter the sell price");
var cPrice: number = Number(costInput);
var sPrice: number = Number(sellInput);
var profit: number;
if (sPrice > cPrice) {
    profit = sPrice - cPrice;
    console.log("Total profit is :", profit)
} else {
    profit = sPrice - cPrice;
    console.log("Total lose is :", profit)
}