// 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.

var side1: string | null = prompt("Enter the side 1 value");
var side2: string | null = prompt("Enter the side 2 value");
var side3: string | null = prompt("Enter the side 3 value");

var t_side1: number = Number(side1);
var t_side2: number = Number(side2);
var t_side3: number = Number(side3);

if (t_side1 == t_side2 && t_side2 == t_side3) {
    console.log(`All the condition is true so its equilateral`);
} else if (t_side1 == t_side2 || t_side2 == t_side3 || t_side3 == t_side1) {
    console.log(`One condition is true so its isosceles`);
} else {
    console.log(`All the condition is false its scalene`);
}