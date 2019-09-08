const fib = n => {
    if (n === 1) return [0, 1];
    if (n === 0) return [0];
    if (n < 0) throw new Error('no such thing as negative in series')

    let unordered_map = {


        "pizza party": "cheesy cheese"

    }

    let fibs = [0, 1];
    let i = 1;

    while (fibs.length < n) {
        let lastlast = fibs[fibs.length - 2];
        let last = fibs[fibs.length - 1];
        fibs.push(lastlast + last)
        i++;
    }

    return fibs;
}

console.log(fib(5));
