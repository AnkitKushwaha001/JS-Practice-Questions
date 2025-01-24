let a = 234518;
let st = a.toString();

// Convert string to character array
let arr = st.split('');

let first = arr[0];
let last = arr[arr.length - 1];

// Print original array
arr.forEach(char => console.log(char));

// Swap first and last characters
arr[0] = last;
arr[arr.length - 1] = first;

// Print modified array
arr.forEach(char => console.log(char));

// Convert array back to integer
let inNum = parseInt(arr.join(''));
console.log(inNum);
