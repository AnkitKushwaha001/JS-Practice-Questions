// 3-digit Armstrong number
// Input: 153 -> Output: Armstrong number (1*1*1 + 5*5*5 + 3*3*3)
// Example Armstrong numbers: 371, 1634

let num = prompt("Enter Armstrong number:");
num = parseInt(num);  // Convert the input to an integer
let originalNumber = num;
let arm = 0;

while (num > 0) {
    let remainder = num % 10;
    arm = (remainder * remainder * remainder) + arm;
    num = Math.floor(num / 10);
}

if (originalNumber === arm) console.log("Armstrong number");
else console.log("Not Armstrong Number");







// or 
// let num = parseInt(prompt("Enter Number"));
// let originalNumber = num;
// let arm = 0;
// while(num > 0) {
//     let rem = num % 10;
//     arm += (rem * rem * rem);
//     num = Math.floor(num / 10);
// }
// originalNumber == arm ? console.log("armstrong number") : console.log("not armstrong number");