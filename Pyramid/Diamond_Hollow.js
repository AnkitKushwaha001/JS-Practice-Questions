// Hollow Diamond Pyramid

//     *
//    * *
//   *   *
//  *     *
// *       *
// *       *
//  *     *
//   *   *
//    * *
//     *

function hollowDiamond(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // space
        for(let j = 1; j <= (n-i); j++) {
            row += " ";
        }
        for(let j = 1; j <= (2*i)-1; j++) {
            if (j == 1 || j == (2*i)-1) {
                row += "*";
            }
            else {
                row += " ";
            }
        }
        console.log(row)
    }

    // second half
    for(let i = n; i >= 1; i--) {
        let row = "";
        // space
        for(let j = 1; j <= (n-i); j++) {
            row += " ";
        }
        for(let j = 1; j <= (2*i)-1; j++) {
            if (j == 1 || j == (2*i)-1) {
                row += "*";
            }
            else {
                row += " ";
            }
        }
        console.log(row)
    }
}
hollowDiamond(5);
