// Swap first and last character

// using inbuilt function

// let str = "ankit";
// let swappedStr = str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
// console.log(swappedStr);





// without using inbuilt function 
let str = "ankit";

// Convert the string to an array of characters
let arr = [];
for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
}

// Swap the first and last characters
let temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;

// Convert the array back to a string
let swappedStr = '';
for (let i = 0; i < arr.length; i++) {
    swappedStr += arr[i];
}

console.log(swappedStr);


// ankit -> tnkia
