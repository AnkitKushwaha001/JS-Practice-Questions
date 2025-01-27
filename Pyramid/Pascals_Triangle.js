// Pascals Triangle

//     1 
//    1 1
//   1 2 1
//  1 3 3 1 
// 1 4 6 4 1


function pascalsTriangle(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        // left spacing 
        let row = "";
        for(let j = 1; j <= n-i; j++) {
            row += " ";
        }

        let c = 1; 
        for(let j = 1; j <= i; j++) {
            row += c + " ";
            // the first value in a line is always 1
            c = c*(i-j)/j;
        }
        console.log(row)
    }
}
pascalsTriangle(5);