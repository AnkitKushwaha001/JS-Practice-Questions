// 145 -> 1! + 4! + 5! => 145
// perfect num => 1, 2, 145, 40585

let num = parseInt(prompt("Enter number"));
let originalNumber = num;
let sum = 0;

for(let i = num; i > 0; i = Math.floor(i / 10)) {
    let rem = i % 10;
    let fact = 1;

    for(let j = 1; j <= rem; j++) {
        fact *= j;
    }
    sum += fact; 
}

if (originalNumber == sum) {
    console.log(originalNumber + " is a strong number");
}else {
    console.log(originalNumber + " not a strong number");
}