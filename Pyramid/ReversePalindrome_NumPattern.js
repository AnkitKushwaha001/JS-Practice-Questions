// 543212345
//  4321234
//   32123
//    212
//     1



let num = parseInt(prompt("Enter number: "));

for (let i = num; i >= 1; i--) {
    let pattern = "";

    // Print leading spaces
    for (let j = 1; j <= (num - i); j++) {
        pattern += " ";
    }

    // Print 1st half numbers (decreasing)
    for (let j = i; j >= 1; j--) {
        pattern += j;
    }

    // Print 2nd half numbers (increasing)
    for (let j = 2; j <= i; j++) {
        pattern += j;
    }

    console.log(pattern); // Print pattern in console
}
