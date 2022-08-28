// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var userInput = prompt("Enter the basic salary");
var HRA = prompt("Enter the the House Rent allowance");
var DA = prompt("Enter the the Dearness allowance");
var basicSalary = Number(userInput);
var house_Rent = Number(HRA);
var Dearness_Allowance = Number(DA);
var HR_rent = (basicSalary * house_Rent) / 100;
var D_Allowance = (basicSalary * Dearness_Allowance) / 100;
if (basicSalary <= 10000) {
    var gross_salary = basicSalary + HR_rent + D_Allowance;
    console.log("Gross salary is : ".concat(gross_salary));
}
else if (basicSalary <= 20000) {
    var gross_salary = basicSalary + HR_rent + D_Allowance;
    console.log("Gross salary is : ".concat(gross_salary));
}
else if (basicSalary > 10000) {
    var gross_salary = basicSalary + HR_rent + D_Allowance;
    console.log("Gross salary is : ".concat(gross_salary));
}
