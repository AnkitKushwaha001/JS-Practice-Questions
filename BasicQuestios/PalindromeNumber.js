// Check if a number is a palindrome
// Example: 121 = 121, 909, 959, 3663

let num = prompt("Enter a number to check if it's a palindrome:");
num = parseInt(num);  // Convert the input to an integer
let c = num;
let sum = 0;

while (num > 0) {
    let rem = num % 10;
    sum = (sum * 10) + rem;
    num = Math.floor(num / 10);  // Remove the last digit
}

if (c === sum) {
    console.log("Palindrome number");
} else {
    console.log("Not Palindrome number");
}
