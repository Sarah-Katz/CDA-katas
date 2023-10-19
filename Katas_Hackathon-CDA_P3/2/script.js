for (let index = 1; index <= 100; index++) {
    let print = index;

    if (print % 3 === 0 && print % 5 !== 0) {
        print = "Fizz";
    }
    if (print % 5 === 0 && print % 3 !== 0) {
        print = "Buzz";
    }
    if (print % 3 === 0 && print % 5 === 0) {
        print = "FizzBuzz";
    }

    console.log(print);
}
