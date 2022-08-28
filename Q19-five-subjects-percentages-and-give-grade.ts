// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F



let userInput1: string | null = prompt("enter the Chemistry marks");
let userInput2: string | null = prompt("enter the Biology marks");
let userInput3: string | null = prompt("enter the Mathematics marks");
let userInput4: string | null = prompt("enter the Computer marks");
let userInput5: string | null = prompt("enter the Physics marks");
let n1 = Number(userInput1);
let n2 = Number(userInput2);
let n3 = Number(userInput3);
let n4 = Number(userInput4);
let n5 = Number(userInput5);
let totalSum: number = n1 + n2 + n3 + n4 + n5;
// var totalNum: number = 500;
let average: number = Number(totalSum / 5);



console.log(totalSum)

// var per :number = average


if (average >= 90) {
    console.log(average, "You got A grade");
} else if (average >= 80) {
    console.log(average, "You got B grade");
} else if (average >= 70) {
    console.log(average, "You got C grade");
} else {
    console.log(average, "You are fail");
}


// else if ("average >= 80%") {
//         console.log("get B grade");
//     } else if ("num >= 70%") {
//         console.log("get c grade");
//     } else if ("num >= 60%") {
//         console.log("get D grade");
//     } else if ("num >= 40%") {
//         console.log("get E grade");
//     } else {
//         console.log("you are fail");
//     }