// // Fibonacci Numbers
// // Example:  10 -> 0 1 1 2 3 5 8 13 21 34 55

let n, a = 0, b = 1, c;
n = parseInt(prompt("Enter number"));
for (let i = 0; i <= n; i++) {
    console.log(a + " ");
    c = a + b;
    a = b;
    b = c;
}


// multiplication
// let n, a = 1, b = 2, c;
// n = parseInt(prompt("Enter number"));

// for (let i = 0; i <= n; i++) {
//     console.log(a + " ");
//     c = a * b;
//     a = b;
//     b = c;
// }
// output - 1 2 2 4 8 32 256 8192 2097152 0 0