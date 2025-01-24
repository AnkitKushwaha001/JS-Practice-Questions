// finds all the common characters between two strings and prints
// str1 = "abcdef", str2 = "abyto" => Output: "ab"



// without using inbuilt function 
let str1 = "abcdef";
let str2 = "abyto";
let commonChars = "";

for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        // If characters match, add to result and break inner loop to avoid duplicate
        if (str1[i] === str2[j]) {
            commonChars += str1[i];
            break;
        }
    }
}
console.log(commonChars); // Output: "ab"



// using inbuilt function 
// let str1 = "abcdef";
// let str2 = "abyto";
// let commonChars = "";

// for (let i = 0; i < str1.length; i++) {
//     if (str2.includes(str1[i])) {
//         commonChars += str1[i];
//     }
// }
// console.log(commonChars); // Output: "ab"
