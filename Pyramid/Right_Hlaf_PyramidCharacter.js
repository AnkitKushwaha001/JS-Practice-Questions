// Print Character Pattern.

// A
// BC
// DEF
// GHIJ

let ch = 'A';
let n = 4; 

for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += ch;
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
    console.log(row)
}
