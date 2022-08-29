// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var angel1 = prompt("Enter the valid value of the angel1");
var angel2 = prompt("Enter the valid value of the angel2");
var angel3 = prompt("Enter the valid value of the angel3");
var t_angel1 = Number(angel1);
var t_angel2 = Number(angel2);
var t_angel3 = Number(angel3);
var sum_all_t_angels = t_angel1 + t_angel2 + t_angel3;
if (sum_all_t_angels == 180) {
    console.log("Triangel is valid");
}
else {
    console.log("trangel is not valid");
}
