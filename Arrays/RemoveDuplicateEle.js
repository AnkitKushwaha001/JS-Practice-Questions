// JavaScript program to remove duplicate elements from two arrays

// Define two arrays
let a = [5, 2, 6, 8];
let b = [6, 7, 5, 2, 8];

// Create a Set to store unique elements
let set = new Set([...a, ...b]);

// Convert Set back to an array
let uniqueArray = Array.from(set);

// Print the result
console.log(uniqueArray);
