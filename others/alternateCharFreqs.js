function xyz (freqs) {

    let outputLength = freqs.reduce((acc, cur) => acc + cur);
    let output = '';

    const abc = 'abcdefghijklmnopqrstuvwxyz';
    
    freqs.forEach((freq, i) => {
        freqs[i] = [freq, abc[i]]
    })
     
    for (let i = 0; i < outputLength; i++) {
        console.log(freqs)
        let highest = 0;
        let secondhighest = 0;
        let highestletter = '';
        let secondhighestLetter = '';

        freqs = freqs.sort((a, b) =>  b[0] - a[0])

        let diff = freqs[0][0] - freqs[1][0];
        let appendTwo = false;
        if (diff > 1 && freqs[0][0] > 1) appendTwo = true;        
        if (appendTwo) {
            if (output[output.length - 1] !== freqs[0][1]) {
                output += freqs[0][1]
                output += freqs[0][1]
                i++
                freqs[0][0] -= 2;
            } else {
                output += freqs[1][1];
                freqs[1][0] -= 1;
            }
        } else if (output[output.length - 1] !== freqs[0][0]) {
            output += freqs[1][1]
            freqs[1][0] -= 1;
        } else {
            output += freqs[0][1];
            freqs[0][0] -= 1;
        }
    }

    console.log(output)
}

console.log(xyz([6,1,1]))

