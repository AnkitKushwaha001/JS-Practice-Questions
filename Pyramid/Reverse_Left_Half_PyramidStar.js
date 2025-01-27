//Reverse Left Half Pyramid Pattern

//        *****
//         ****
//          ***
//           **
//            *


let n = 5;
// calculate number of space
let num = 2*n-2;

// rows
for (let i = n; i > 0; i--) {
    let row = "";
    // space
    for (let j = 0; j < n-i; j++) {
        row +=" ";
    }
    // Decrementing value of num after each loop
    num = num - 2;
    // stars
    for (let j = 0; j < i; j++) {
        row +="*";
    }
    // printing new line for each row
    console.log(row)
}