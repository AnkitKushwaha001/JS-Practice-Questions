// print prime number series
// 10 - 2 3 5 7

let counter;
let num = parseInt(prompt("Enter Number"));

console.log("Prime numbers are : ");
for(let i = 1; i <= num; i++) {
    counter = 0;
    for(let j = 1; j <= i; j++) {
        if (i % j == 0) {
            counter ++;
        }
    }
    if (counter == 2) {
        console.log(i + " ");
    }
}