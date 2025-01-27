// 0 -1 Trangle Pattern

// 1 
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


function zero_one_trangle(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // inner - columns
        for(let j = 1; j <= i; j++) {
            if ((i + j) % 2 == 0) {     // even
                 row += "1 ";
            }
            else {                         // odd
                row += "0 " 
            }
        }
        console.log(row);
    }
}
zero_one_trangle(5);