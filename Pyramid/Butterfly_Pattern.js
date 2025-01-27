// Butterfly pattern

// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *


function butterFly(n) {
    // first half
    // outer - rows
    for(let i = 1; i <= n; i++) {
        // stars
        let row = "";
        for(let j = 1; j <= i; j++) {
            row += "* ";
        }
        // space - 2*(n-i)
        let space = 2*(n-i);
        for(let j = 1; j <= space; j++) {
            row += "  ";
        }
        // stars
        for(let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row)
    }

    // second half
    // outer - rows
    for(let i = n; i >= 1; i--) {
        let row = "";
        // stars
        for(let j = 1; j <= i; j++) {
            row += "* ";
        }
        // space - 2*(n-i)
        let space = 2*(n-i);
        for(let j = 1; j <= space; j++) {
            row += "  ";
        }
        // stars
        for(let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row)
    }
}
butterFly(5);
