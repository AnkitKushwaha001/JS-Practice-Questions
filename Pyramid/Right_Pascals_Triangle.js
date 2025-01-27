// Right Pascals Triangle

// * 
// * *
// * * *
// * * * *
// * * * *
// * * *
// * *
// *


function rightPascalsTriangle(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // stars
        for(let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row)
    }

    // second half
    for(let i = n; i >= 1; i--) {
        let row = "";
        // stars
        for(let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row)
    }
}
rightPascalsTriangle(5);