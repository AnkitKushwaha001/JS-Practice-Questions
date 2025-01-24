// Reverse a number
// input 123 = 321

let num, rem;
num = parseInt(prompt("Enter any number : "));

console.log("Reverse Number is : ");
while (num > 0){
    rem = num % 10;
    console.log(rem + " ");
    num = Math.floor(num / 10);
}