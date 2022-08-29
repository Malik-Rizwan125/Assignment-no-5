// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.

var side1:string | null = prompt("Enter the side 1 value");
var side2:string | null = prompt("Enter the side 2 value");
var side3:string | null = prompt("Enter the side 3 value");

var t_side1:number = Number(side1);
var t_side2:number = Number(side2);
var t_side3:number = Number(side3);

var all_sides_triangel:number = t_side1 + t_side2 + t_side3;

if(all_sides_triangel == 180){
    console.log(`The triangle is valid`);
}else {
    console.log(`The triangle is not valid`);
}