// Floyd's Triangle

// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


function floydsTriangle(n) {
    let num = 1;
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // inner - columns
        for(let j = 1; j <= i; j++) {
            row += num + " ";
            num++;
        }
        console.log(row.trim())
    }
}
floydsTriangle(5);