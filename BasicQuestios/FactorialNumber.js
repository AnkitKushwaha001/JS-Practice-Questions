// Question 1 : Factorial Number

let num = prompt("Enter a number to calculate its factorial:");
num = parseInt(num);  
let factorial = 1;

if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    for (let i = 1; i <= num; i++)
        factorial *= i;
    console.log("Factorial of " + num + " is: " + factorial);
}



