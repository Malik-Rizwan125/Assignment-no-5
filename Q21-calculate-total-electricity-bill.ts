// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

var userInput: string | null = prompt("Enter the unit");
var sur_Charge: string | null = prompt("Enter the surCharge price");

var electricity_Unit: number = Number(userInput);
var Charges_number: number = Number(sur_Charge);
var sur_Charges_calculation = (electricity_Unit / 100) * 20;

if (electricity_Unit <= 50) {
    var totalBill = (electricity_Unit * 0.50) + sur_Charges_calculation;
    console.log(`Your total bil is ${totalBill}`)
} else if (electricity_Unit <= 150) {
    var totalBill = (electricity_Unit * 0.75) + sur_Charges_calculation;
    console.log(`Your total bil is ${totalBill}`)
} else if (electricity_Unit <= 250) {
    var totalBill = (electricity_Unit * 1.20) + sur_Charges_calculation;
    console.log(`Your total bil is ${totalBill}`)
} else if (electricity_Unit >= 250) {
    var totalBill = (electricity_Unit * 1.50) + sur_Charges_calculation;
    console.log(`Your total bil is ${totalBill}`)
}


// comment code

// var userInput: string | null = prompt("Enter the total unit");
// var unit: string | null = prompt("Enter the unit price");
// var sur_Charge: string | null = prompt("Enter the surCharge price");


// var electricity_Unit: number = Number(userInput);
// var per_unit_price: number = Number(unit);
// var Charges_number: number = Number(sur_Charge);

// var sur_Charges_calculation = (electricity_Unit * per_unit_price / 100) * 20;

// if (electricity_Unit <= 50) {
//     var totalBill = electricity_Unit + sur_Charges_calculation;
//     console.log(`Your total bil is ${totalBill}`)
// } else if (electricity_Unit <= 150) {
//     var totalBill = electricity_Unit + sur_Charges_calculation;
//     console.log(`Your total bil is ${totalBill}`)
// } else if (electricity_Unit <= 250) {
//     var totalBill = electricity_Unit + sur_Charges_calculation;
//     console.log(`Your total bil is ${totalBill}`)
// } else if (electricity_Unit >= 250) {
//     var totalBill = electricity_Unit + sur_Charges_calculation;
//     console.log(`Your total bil is ${totalBill}`)
// }






