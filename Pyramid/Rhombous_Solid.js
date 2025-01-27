// Solid Rhombus pattern

//     *****
//    *****
//   *****
//  *****
// *****


function solidRhombus(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // space
        for(let j = 1; j <= n-i; j++) {
            row += " ";
        }
        for(let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row)
    }
}
solidRhombus(5);