function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            count++;
        }
    }
    return count;
}

function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char.toUpperCase()) {
            count++;
        }
    }
    return count;
}

console.log(countBs('BBC'));

console.log(countChar('BBC', 'C'));