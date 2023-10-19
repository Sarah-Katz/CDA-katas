let width = 10;
let height = 20;

let isOdd = true;

for (let index = 1; index <= 20; index++) {
    let result = "";
    for (let i = 1; i <= width; i++) {
        if (isOdd) {
            result += " ";
        } else {
            result += "#";
        }
        isOdd = !isOdd;
    }
    isOdd = !isOdd;
    console.log(result);
}
