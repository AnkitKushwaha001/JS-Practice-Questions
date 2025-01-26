let a = 10;
let b = 20;

console.log("Before Swapping : " + a + " " + b);

// swap
a = a + b;
b = a - b;
a = a - b;


// b = a + b - (a = b);

// a = a^b;
// b = a^b;
// a = a^b;

console.log("After Swapping : " + a + " " + b);