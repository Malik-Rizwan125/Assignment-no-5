// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%


var userInput: string | null = prompt("Enter the basic salary");
var HRA: string | null = prompt("Enter the the House Rent allowance");
var DA: string | null = prompt("Enter the the Dearness allowance");


var basicSalary: number = Number(userInput);
var house_Rent: number = Number(HRA);
var Dearness_Allowance: number = Number(DA);

var HR_rent = (basicSalary * house_Rent) / 100;
var D_Allowance = (basicSalary * Dearness_Allowance) / 100;


if (basicSalary <= 10000) {
    let gross_salary = basicSalary + HR_rent + D_Allowance;
    console.log(`Gross salary is : ${gross_salary}`);
} else if (basicSalary <= 20000) {
    let gross_salary = basicSalary + HR_rent + D_Allowance;
    console.log(`Gross salary is : ${gross_salary}`);
} else if (basicSalary > 10000) {
    let gross_salary = basicSalary + HR_rent + D_Allowance;
    console.log(`Gross salary is : ${gross_salary}`);
}




