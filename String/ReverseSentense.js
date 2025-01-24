// str = "I am java Developer" ->  output : Developer java am I


let str = "I am java Developer";
let reversed = "";
let word = "";

// Loop through the string manually
for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        word += str[i]; // Build the word
    } else {
        reversed = word + " " + reversed; // Prepend word to reversed string
        word = ""; // Reset word
    }
}

// Add the last word
reversed = word + " " + reversed;

console.log(reversed.trim()); // Remove trailing space