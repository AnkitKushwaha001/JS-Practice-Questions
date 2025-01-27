// Print Inverted Right Half Pyramid Pattern (Star Pattern)

// *****
// ****
// ***
// **
// *


let num = 5;
for (let i = 1; i <= num; i++) {
    let row = "";
    for(let j = 1; j <= (num-i+1); j++) {
        row += "*";
    }
    console.log(row)
}