let str = "anKIT";
let result = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is lowercase
    if (char >= 'a' && char <= 'z') {
        result += char.toUpperCase(); 
    } else if (char >= 'A' && char <= 'Z') {
        result += char.toLowerCase(); 
    } else {
        result += char; // Keep other characters unchanged
    }
}

console.log(result); // Output: "ANkit"
