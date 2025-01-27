// Square fill pattern

// ****
// ****
// ****
// ****


function squareFill(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // inner - columns
        for(let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row)
    }
}
squareFill(4);