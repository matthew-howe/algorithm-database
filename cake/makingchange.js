









function changePossibilitiesRecurs(amountLeft, denominations, currentIndex = 0) {

    // base case, we hit the amount spot on
    if (amountLeft === 0) {
        console.log('we hit the amount spot on', ' with ', denominations[currentIndex - 1]);
        return 1;
    }

    // base case, we overshot the amount
    if (amountLeft < 0) {
        console.log('we overshot the amount', ' with [' + denominations.slice(currentIndex).join(', ') + ']');
        return 0;
    }

    // We're out of denominations
    if (currentIndex === denominations.length) {
        console.log('were out of denominations', ' with [' + denominations.slice(currentIndex).join(', ') + ']')
        return 0;
    }

    console.log('checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');
    
    // choose a current coin
    const currentCoin = denominations[currentIndex];

    let numPossibilities = 0;

    while (amountLeft >= 0) {
        let og = numPossibilities;
        numPossibilities += changePossibilitiesRecurs(
            amountLeft, denominations, currentIndex + 1
        )
        amountLeft -= currentCoin;

        og !== numPossibilities ? 
            console.log('numPossibilities', numPossibilities, 'currentCoin',currentCoin) 
            : '';
    }

    return numPossibilities;
}

const changePossibilities = (amount, denominations) => {

    const combinations = new Array(amount + 1).fill(0);
    combinations[0] = 1;

    for (const denom of denominations) {

        for (let i = denom; i <= amount; i++) {

            const remainder = i - denom;
            combinations[i] += combinations[remainder];
            console.log(denom, combinations, remainder, i)
            
        }
    }

    return combinations[amount];
}
















// Tests

let desc = 'sample input';
let actual = changePossibilities(4, [1, 2, 3]);
let expected = 4;
assertEqual(actual, expected, desc);

// desc = 'one way to make zero cents';
// actual = changePossibilities(0, [1, 2]);
// expected = 1;
// assertEqual(actual, expected, desc);

// desc = 'no ways if no coins';
// actual = changePossibilities(1, []);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'big coin value';
// actual = changePossibilities(5, [25, 50]);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'big target amount';
// actual = changePossibilities(50, [5, 10]);
// expected = 6;
// assertEqual(actual, expected, desc);

// desc = 'change for one dollar';
// actual = changePossibilities(100, [1, 5, 10, 25, 50]);
// expected = 292;
// assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
}
