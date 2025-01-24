// JavaScript program to remove duplicate elements from two arrays manually

// Define two arrays
let a = [5, 2, 6, 8, 10];
let b = [6, 7, 5, 2, 8];

// Create an empty array to store unique values
let uniqueArray = [];

// Function to check if an element already exists in an array
function existsInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}

// Add elements from array 'a' to 'uniqueArray' if not already present
for (let i = 0; i < a.length; i++) {
    if (!existsInArray(uniqueArray, a[i])) {
        uniqueArray.push(a[i]);
    }
}

// Add elements from array 'b' to 'uniqueArray' if not already present
for (let i = 0; i < b.length; i++) {
    if (!existsInArray(uniqueArray, b[i])) {
        uniqueArray.push(b[i]);
    }
}

// Print the result
console.log(uniqueArray);
