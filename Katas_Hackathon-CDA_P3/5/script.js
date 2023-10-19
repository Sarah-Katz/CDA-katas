function isEven(n) {
    let res = false;
    let even = n % 2 === 0;
    let minusEven = isMinusTwoEven(n);
    if (even && minusEven) {
        res = true;
    } else {
        res = false;
    }
    return res;
}

function isMinusTwoEven(n) {
    n -= 2;
    return n % 2 === 0;
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));