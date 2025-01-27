// Number Pyramid pattern

//     1 
//    2 2
//   3 3 3
//  4 4 4 4 
// 5 5 5 5 5


function numberPyramid(n) {
    // outer - rows
    for(let i = 1; i <= n; i++) {
        let row = "";
        // space
        for(let j = 1; j <= (n-i); j++) {
            row += " ";
        }
        // stars 
        for(let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}
numberPyramid(5);