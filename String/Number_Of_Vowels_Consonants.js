let str = "as we discussed";
let vowels = "aeiouAEIOU";
let vowelCount = 0, consonantCount = 0;

for (let i = 0; str[i] !== undefined; i++) {  // Looping through string manually
    let char = str[i], isVowel = false;

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        for (let j = 0; vowels[j] !== undefined; j++) {  // Check if character is a vowel
            if (char === vowels[j]) {
                isVowel = true;
                break;
            }
        }
        isVowel ? vowelCount++ : consonantCount++;
    }
}

console.log(`Vowels – ${vowelCount}, Consonants – ${consonantCount}`);
