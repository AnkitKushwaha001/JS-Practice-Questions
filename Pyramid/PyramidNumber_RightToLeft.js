//           1  
//         3 2  
//       6 5 4  
//     10 9 8 7 
//   15 14 13 12 11


let num = 5; // You can change this value
let a = 1;

for (let i = 1; i <= num; i++) {
    let list = [];

    // Print leading spaces (double space for alignment)
    let pattern = "  ".repeat(num - i);

    // Store numbers in the list
    for (let j = 1; j <= i; j++) {
        list.push(a);
        a++;
    }

    // Sort numbers in reverse order (without using inbuilt sort)
    for (let m = 0; m < list.length - 1; m++) {
        for (let n = m + 1; n < list.length; n++) {
            if (list[m] < list[n]) {
                let temp = list[m];
                list[m] = list[n];
                list[n] = temp;
            }
        }
    }

    // Append numbers to the pattern
    for (let k = 0; k < list.length; k++) {
        pattern += list[k] + " ";
    }

    console.log(pattern);
}



// let num = 5;
// let a = 1;
// for (let i = 1; i <= num; i++) {
//     let pattern = "  ".repeat(num - i); // Add leading spaces
//     let row = [];

//     // Store numbers in an array
//     for (let j = 1; j <= i; j++) {
//         row.unshift(a++); // Insert numbers at the beginning (reverse order)
//     }
//     pattern += row.join(" "); // Convert array to string with space
//     console.log(pattern);
// }
