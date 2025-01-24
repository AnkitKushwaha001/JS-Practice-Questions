// find factor of a number
// input 10 - 1, 2, 5, 10

let a;
a = parseInt(prompt("Enter factor number"));

console.log("factor of " + a + " = ");
for (let i = 1; i <= a; i++){
    if (a % i == 0)
        console.log(i + " ");
}