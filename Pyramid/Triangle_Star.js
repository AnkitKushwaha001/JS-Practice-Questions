//     * 
//    * *
//   * * * 
//  * * * *
// * * * * * 

let num = 5;
for (let i = 1; i <= num; i++) {
    let pattern = "";

    // Print leading spaces
    for (let j = 1; j <= num - i; j++) {
        pattern += " ";
    }

    // Print stars with spaces
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}
