// Reverse Word 

// let str = "mohit";
// let nstr = "";

// console.log("Original String : " + str);
// for (let i = 0; i < str.length; i++) {
//     let ch = str.charAt(i);
//     nstr = ch + nstr;
// }
// console.log("Reverse word : " + nstr);


let str = "mohit";
let nstr = "";
console.log("Original String : " + str);
for (let i = str.length - 1; i >= 0; i--) {
    nstr += str[i];
}
console.log("Reverse word : " + nstr);


// using inbuilt method
// let str = "mohit";
// let newString = str.split('').reverse().join('');
// console.log(newString)




// mohit : tihom