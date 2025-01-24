let str = "I am java developer";
let words = [];
let word = "";
let i = 0;

// Step 1: Split the string into words manually
while (i <= str.length) {
    if (str[i] !== " " && i !== str.length) {
        word += str[i]; // Build the word
    } else {
        words.push(word); // Store the word
        word = ""; // Reset word
    }
    i++;
}

// Step 2: Reverse the first word manually
let firstWord = words[words.length - 1]; // Last word in the original string
let reversedFirstWord = "";
for (let j = firstWord.length - 1; j >= 0; j--) {
    reversedFirstWord += firstWord[j];
}

// Step 3: Construct the final string
let result = reversedFirstWord + " "; // Add reversed first word
for (let k = words.length - 2; k >= 0; k--) {
    result += words[k] + " "; // Append remaining words
}

console.log(result.trim()); // Output: "repoleved java am I"
