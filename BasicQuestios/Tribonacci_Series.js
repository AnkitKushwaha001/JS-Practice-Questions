// tribonacci series (10) -> 0, 0, 1, 1, 2, 4, 7, 13, 24, 44


let a = 0;
let b = 0;
let c = 1;
let d;
let term = parseInt(prompt("Enter Term"));

for(let i = 1; i <= term; i++) {
    console.log(a + " ");
    d = a + b + c;
    a = b;
    b = c;
    c = d;
}