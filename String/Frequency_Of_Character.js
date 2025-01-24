// Frequency Of Character

// ex : let str = "banana";
// Output: b-1, a-3, n-2


let str = "banana";
let charCount = {};  

// Count occurrences of each character
for (let char of str) {
  charCount[char] = (charCount[char] || 0) + 1;
}

// Log repeated counts
for (let char in charCount) {
  if (charCount[char] > 1) {
    console.log(`${char} - ${charCount[char]}`);
  }
}



// Log all character counts
// for (let char in charCount) {
//   console.log(`${char} - ${charCount[char]}`);
// }