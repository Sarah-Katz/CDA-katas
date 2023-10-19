function range(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}

function sum(array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }
    return res;
}

console.log(range(1, 10));

console.log(sum(range(1, 10)));