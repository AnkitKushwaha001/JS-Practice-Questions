// Square Hollow Pattern

// ****
// *  *
// *  *
// ****


function squareHollow(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // inner - columns
        for(let j = 1; j <= n; j++) {
           if (i == 1 || i == n || j == 1 || j == n) {
             row += "*";
           }
           else {
            row += " ";
           }
        }
        console.log(row);
    }
}
squareHollow(4);