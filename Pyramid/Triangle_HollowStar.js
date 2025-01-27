// Hollow Triangle Pattern

//                *
//               * *
//              *   *
//             *     *
//            *********


let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    // spaces
    for (let j = i; j < n; j++) {
        row += " ";
    }
    for (let j = 1; j <= (2*i-1); j++) {
        // printing stars
        if (j == 1 || i == n || j == (2*i-1)) {
            row += "*";
        }
        // printing spaces
        else {
            row += " ";
        }
    }
    console.log(row);
}