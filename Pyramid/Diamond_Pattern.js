// Diamond pattern

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *



function diamondPattern(n) {
    // first half
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // space
        for(let j = 1; j <= (n-i); j++) {
            row += " ";
        }
        // stars 
        for(let j = 1; j <= (2*i)-1; j++) {
            row += "*";
        }
        console.log(row);
    }

    // second half
    // outer - rows
    for(let i = n; i >= 1; i--) {
        let row = "";
        // space
        for(let j = 1; j <= (n-i); j++) {
            row += " ";
        }
        // stars 
        for(let j = 1; j <= (2*i)-1; j++) {
            row += "*";
        }
        console.log(row)
    }
}
diamondPattern(5);
