// find sum of digits
// input 126 = (1+2+6=9)

let num, rem, sum = 0;
num = parseInt(prompt("Enter any number"));

while (num > 0){
    rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
}
console.log("sum of digits : " + sum);