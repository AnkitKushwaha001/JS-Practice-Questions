// Count Occurrences of a Character
// ex : str = "banana"; => a -3

// let str = "banana";
// let charToCount = 'a';
// // let count = (str.split(charToCount).length - 1);
// let count = str.split('').filter(char => char === charToCount).length;
// console.log(count); 





let str = "banana";
let charToCount = 'a';
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === charToCount) {
    count++;
  }
}

console.log(count);  // Output: 3

