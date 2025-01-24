// check number is prime or not
// input number = 7 (prime number)
// prime number = 2, 3, 5, 7, 11, 13

let num; 
let count = 0;

num = parseInt(prompt("Enter number"));

for(let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count ++;
        // System.out.print(count + " ");
    }
}
console.log("\ncount : " + count);
if (count == 2) 
    console.log("Prime number is : " + num);
else 
    console.log("Not prime number : " + num);