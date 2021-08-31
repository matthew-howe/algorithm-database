import x from './day1_in.mjs';

let y = x.split('\n');
let z;

// part 1
// for (let i = 0; i < y.length; i++) {
//     let j = Number(y[i]);
//         for (let u = 1; u < y.length; u++) {
//             let k = Number(y[u]);
//             if (j + k === 2020) z = j * k;
//         }
// } 

const vld = (a, b, c) => a !== b && a !== c && b !== c;

// part 2
for (let i = 0; i < y.length; i++) {
    let j = Number(y[i]);
        for (let u = 1; u < y.length; u++) {
            let k = Number(y[u]);
            for (let t = 2; t < y.length; t++) {
                let h = Number(y[t]);
                if (vld(i, u, h)) {
                    if (j + k + h === 2020) {
                        z = j * h * k;
                    }
                }
            }
        }
} 

console.log(z)
