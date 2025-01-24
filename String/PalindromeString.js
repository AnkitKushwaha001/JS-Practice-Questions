// without using inbuilt method

let str = "anna";
let reversedStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

if (str === reversedStr) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}



// using inbuilt method 

// let str = "anna";
// let reversedStr = str.split('').reverse().join('');

// if(str === reversedStr) console.log("Palindrome");
// else console.log("Not Palindrome");


// anna -> anna [palindrome]
// anlkajsdfna -> anna [not palindrome]