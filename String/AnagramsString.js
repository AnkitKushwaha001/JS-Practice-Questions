// Check if Two Strings are Anagrams

// let str1 = "listen";
// let str2 = "silent";
// let areAnagrams = str1.split('').sort().join('') === str2.split('').sort().join('');
// console.log(areAnagrams);  // Output: true




let str1 = "listen";
let str2 = "sxlent";

if (str1.length !== str2.length) {
  console.log(false);  // Strings with different lengths can't be anagrams
} else {
  let areAnagrams = true;
  let charCount = {};

  // Count characters in the first string
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if the characters in the second string match the counts in charCount
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!charCount[char]) {
      areAnagrams = false;
      break;
    }
    charCount[char]--;
  }

  console.log(areAnagrams);  // Output: true
}
