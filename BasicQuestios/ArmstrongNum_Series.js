// 153 -> 1^3 + 5^3 + 3^3
// armstrong numbers -> 1,2,3,4,5,6,7,8,9, 153, 370, 371, 407, 1634, 8208, 9474

console.log("Armstrong numbers between 1 and 1000: ");
for (let i = 1; i <= 10000; i++) {
    let num = i;
    let result=0
    let count=0;

    let originalNumber = num;   // store the original value
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    num = originalNumber;   // restore the original value for the next loop
    while (num > 0) {
        let digit = num % 10;
        result += Math.pow(digit, count);
        num = Math.floor(num /= 10);
    }

    if (result == originalNumber) {
        console.log(originalNumber + " ");
    }
}