// even - 10 -> (0 + 2 + 4 + 6 + 8 + 10 = 30)
// odd - 11 -> (1 + 3 + 5 + 7 + 9 + 11 = 36)

let num = parseInt(prompt("Enter number"));
let sum = 0;

if (num % 2 == 0) {
    for(let i = 0; i <= num; i += 2) {
        sum += i;
    }
    console.log("sum of even number " + sum);
}
else {
    for(let i = 1; i <= num; i += 2) {
        sum += i;
    }
    console.log("sum of odd number : " + sum);
}