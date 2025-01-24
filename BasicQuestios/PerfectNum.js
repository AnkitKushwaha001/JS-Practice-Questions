// perfect number between 1 to 10000 -> 6 28 496 8128 
// 28 -> 1 + 2 + 4 + 7 + 14

let n = 8128, sum = 0;

for(let i = 1; i< n; i++) {
    if (n%i == 0) {
        sum = sum + i;
    }
}
if (n == sum) console.log(n + " Is a perfect number");
// if (n == (sum/2)) console.log(n + " Is a perfect number");
else console.log(n + " is not perfect number");