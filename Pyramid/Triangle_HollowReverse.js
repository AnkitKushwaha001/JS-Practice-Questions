// Reverse Hollow Triangle 

//        *********
//         *     *
//          *   *
//           * *
//            *


let n = 5;
        // rows
for (let i = n; i >= 1; i--) {
    let row = "";
    // spaces
    for (let j = i; j < n; j++) {
        row += " ";
    }

    for (let j = 1; j <= (2*i-1); j++) {
        // stars
        if (j == 1 || i == n || j == (2*i-1)) {
            row += "*";
        }
        // spaces
        else {
            row += " ";
        }
    }
    console.log(row);
}