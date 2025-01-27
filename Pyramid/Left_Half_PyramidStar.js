// Program to Print Left Half Pyramid Pattern (Star Pattern)

//     *
//    **
//   ***
//  ****
// *****

let num = 5;
for(let i = 1; i <= num; i++) {
    // space
    let row = "";
    for(let j = 1; j <= num-i; j++) {
        row += " ";
    }
    // stars
    for(let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row)
}
