// Find the First Non-Repeated Character

// using inbuilt function 
// let str = "aabcc";
// let firstNonRepeated = str.split('').find((char, index, self) => self.indexOf(char) === self.lastIndexOf(char));
// console.log(firstNonRepeated);  // Output: "b"


// without using inbuilt function
let str = "aabcc";
let firstNonRepeated = ''; // To store the result

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  let isRepeated = false;

  // Check if character repeats in the string
  for (let j = 0; j < str.length; j++) {
    if (i !== j && str[i] === str[j]) {
      isRepeated = true;
      break;
    }
  }

  if (!isRepeated) {
    firstNonRepeated = char;
    break; // Stop the loop as we found the first non-repeated character
  }
}

console.log(firstNonRepeated);  // Output: "b"
