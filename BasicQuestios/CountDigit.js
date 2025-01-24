// count digits in a number
// input 3465 - 4

let num, count = 0;
num = parseInt(prompt("Enter Any Number"));

while (num > 0){
    num = Math.floor(num /10);
    // console.log(num);
    count ++;
}
console.log("number of digits : " + count);
