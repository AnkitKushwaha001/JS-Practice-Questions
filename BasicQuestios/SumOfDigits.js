// find sum of digits
// input 126 = (1+2+6=9)

let num = parseInt(prompt("Enter any number"));
let sum = 0;

while (num > 0){
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
}
console.log("sum of digits : " + sum);