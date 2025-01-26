// strong num => 1, 2, 145, 40585
// ex : 145 -> 1! + 4! + 5! [1 + (4 * 3 * 2 * 1) + (5 * 4 * 3 * 2 * 1)]


for(let i = 1; i <= 1000; i++) {
    let num = i;
    let sum=0;
    let originalNumber = num;

    for(let j = num; j > 0; j = Math.floor(j / 10)) {
        let rem = j % 10;
        let fact = 1; 

        for(let k = 1; k <= rem; k++)
            fact *= k;
        sum += fact;
    }
    if(originalNumber == sum) console.log(originalNumber + " ");
}