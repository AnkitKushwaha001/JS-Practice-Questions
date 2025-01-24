// Find the Index of the First Occurrence of a Character in a String
// str = "hello" -> Output: 1

// let str = "hello";
// let index = str.indexOf('l');
// console.log(index);



let str = "hello";
let charToFind = 'l';
let index = -1; // Default value to indicate "not found"

for (let i = 0; i < str.length; i++) {
  if (str[i] === charToFind) {
    index = i;
    break; // Stop once the character is found
  }
}
console.log(index);  // Output: 1
