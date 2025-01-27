// Inverted Right Half-Pyramid with number

// 12345
// 1234
// 123
// 12
// 1

let num = 5;
// row
for(let i = 1; i <= num; i++) {
    let row = "";

    // col
    for(let j = 1; j <= (num-i+1); j++) {
        row += j;
    }
    console.log(row)
}