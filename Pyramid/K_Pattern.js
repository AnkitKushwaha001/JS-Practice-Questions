// K Pattern  

// ****
// ***
// **
// *
// *
// **
// ***
// ****


function kPattern(n) {
    // first half
    // outer - rows
    for(let i = n; i >= 1; i--) {
        let row = "";
        // inner - columns
        for(let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }

    // second half
    for(let i = 1; i <= n; i++) {
        let row = "";
                    // inner - columns
        for(let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
kPattern(5);