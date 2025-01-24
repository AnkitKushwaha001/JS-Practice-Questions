

let a = parseInt(prompt("Enter first Number"));
let b = parseInt(prompt("Enter second Number"));
let temp;

console.log("Before Swapping : " + a + " " + b);

// swap
temp = a;
a = b;
b = temp;
console.log("After Swapping : " + a + " " + b);