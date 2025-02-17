// series -> 1 2 3 4 5 6 7 8 9 11 22 33 44 55 66 77 88 99 


for(let i = 1; i <= 100; i++) {
    let num = i;
    let sum = 0;
    let originalNum  = num;

    while (num > 0) {
        let rem = num % 10;
        // console.log(rem)
        sum = (sum * 10) + rem;
        num = Math.floor(num / 10);
    }
    if(originalNum  == sum) console.log(i + " ");
    // if(originalNum  == sum) console.log(originalNum + " ");
}