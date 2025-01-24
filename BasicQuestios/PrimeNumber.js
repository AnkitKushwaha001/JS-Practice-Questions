// check number is prime or not
// input number = 7 (prime number)
// prime number = 2, 3, 5, 7, 11, 13

let num, count = 0;
num = parseInt(prompt("Enter the number"));

for (let i = 1; i <= num; i++){
    if (num % i == 0){
        count ++;
        console.log(count + " ");
    }
}
console.log("\ncount : " + count);
if (count == 2)
    console.log("Prime Number");
else
    console.log("Not Prime Number");
