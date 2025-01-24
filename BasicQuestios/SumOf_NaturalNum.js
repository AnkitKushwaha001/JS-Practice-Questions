// 10 => 55

let num = parseInt(prompt("Even number"));
let sum = 0;

for(let i = 1; i <= num; i++) {
    sum += i;
}
console.log("sum of natural numbers : " + sum);