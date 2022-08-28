// 18. Write a ts program to calculate profit or loss.
var costInput = prompt("Enter the cost price");
var sellInput = prompt("Enter the sell price");
var cPrice = Number(costInput);
var sPrice = Number(sellInput);
var profit;
if (sPrice > cPrice) {
    profit = sPrice - cPrice;
    console.log("Total profit is :", profit);
}
else {
    profit = sPrice - cPrice;
    console.log("Total lose is :", profit);
}
