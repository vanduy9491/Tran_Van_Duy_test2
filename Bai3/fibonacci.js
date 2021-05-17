function isFibonacci(number) {
    if (number === 0 || number === 1 || number ===2 ) {
        return true;
    }
    let prev = 1;
    let count = 2;
    let temp = 0;
    while (count < number) {
        if (prev + count === number) {
            return true;
        };
        temp = prev;
        prev = count;
        count += temp;
    };
    return false;
}

console.log(isFibonacci(4));
console.log(isFibonacci(5));

