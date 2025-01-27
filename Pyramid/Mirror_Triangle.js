// Mirror Star Triangle Pattern

//  1 2 3 4 
//   2 3 4
//    3 4
//     4
//     4
//    3 4
//   2 3 4
//  1 2 3 4


function mirrorTrianglePattern(n) {
    // first half
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // spaces
        for(let j = 1; j <= i; j++) {
            row += " ";
        }
        // print value of j
        for(let j = i; j <= n; j++) {
            row += j + " ";
        }
        console.log(row)
    }

    // second half
    for(let i = n; i >= 1; i--) {
        // stars
        let row = "";
        for(let j = 1; j <= i; j++) {
            row += " ";
        }
        // print value of j
        for(let j = i; j <= n; j++) {
            row += j + " ";
        }
        console.log(row)
    }
}
mirrorTrianglePattern(4);