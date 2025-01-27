// Reverse number triangle

//        1 2 3 4 5
//         2 3 4 5
//          3 4 5
//           4 5
//            5


let n = 5;
        // rows
for (let i = 1; i <= n; i++) {
    let row = "";
    // spaces
    for (let j = 1; j < i; j++) {
        row += " ";
    }
    // print value of j
    for (let j = i; j <= n; j++) {
        row += j + " ";
    }
    // printing new line for each rwo
    console.log(row);
}