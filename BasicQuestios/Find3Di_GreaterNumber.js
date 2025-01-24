let a = 10;
let b = 20;
let c = 30;

// using ternary operator
// let res = (a > b) ? (a > c ? a : c) : (b > c)? b : c;
// console.log("res: ", res);


// using if else condition
if (a > b) {
    if (a > c) {
        console.log("if a = " + a);
    }
    else {
        console.log("if c = " + c);
    }
}
else {
    if (b > c) {
        console.log("else b = " + b);
    }
    else {
        console.log("else c = " + c);
    }
}