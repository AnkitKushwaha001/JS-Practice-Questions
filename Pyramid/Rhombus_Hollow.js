// Hollow Rhombus pattern

//     *****
//    *   *
//   *   *
//  *   *
// *****


function hollowRhombus(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // space
        for(let j = 1; j <= (n-i); j++) {
            row += " ";
        }

        // hollow rectangel-stars
        for(let j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n) {
                row += "*";
            }
            else {
                row += " ";
            }
        }
        console.log(row)
    }
}
hollowRhombus(5);