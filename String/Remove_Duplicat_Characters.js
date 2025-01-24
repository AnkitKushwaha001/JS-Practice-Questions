// Remove Duplicate Characters from a String
// str = "aabbcc", Output: "abc"


// using inbuilt function
// let str = "aabbcc";
// let uniqueStr = [...new Set(str)].join('');
// console.log(uniqueStr);



// without using inbuilt function
let str = "aabbcc";
let uniqueStr = '';
let seen = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (!seen[char]) {
    uniqueStr += char;
    seen[char] = true;
  }
}

console.log(uniqueStr);  // Output: "abc"
