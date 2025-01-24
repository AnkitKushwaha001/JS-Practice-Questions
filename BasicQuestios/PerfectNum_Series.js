// perfect number between 1 to 10000 -> 6 28 496 8128 
// 28 -> 1 + 2 + 4 + 7 + 14 


for(let i = 1; i <= 10000; i++) {
    let n = i, sum = 0;

    for(let j = 1; j< n; j++) {
        if (n%j == 0) {
            sum = sum + j;
        }
    }
    if (n == sum) console.log(n + " ");
}