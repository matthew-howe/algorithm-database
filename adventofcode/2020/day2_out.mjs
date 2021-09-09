import x from './day2_in.mjs';

let y = x.split('\n');
let z = 0;

// Part 1
// const vld = (p) => {
//     let vals = p.split(' ');
//     let minmax = vals[0].split('-');
//     let min = minmax[0];
//     let max = minmax[1];
//     let char = vals[1][0];
//     let str = vals[2];
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) count++;
//     }
//     return count >= min && count <= max;
// }

// for (let i = 0; i < y.length; i++) {
//     let l = y[i];
//     let res = vld(l);
//     if (res) z++;
// }

// part 2
const vld = (p) => {
    let vals = p.split(' ');
    let minmax = vals[0].split('-');
    let min = Number(minmax[0]) - 1;
    let max = Number(minmax[1]) - 1;
    let char = vals[1][0];
    let str = vals[2];

    if (str[min] === char && str[max] === char) return false;
    else if (str[min] === char || str[max] === char) return true;
    else return false;
}

for (let i = 0; i < y.length; i++) {
    let l = y[i];
    let res = vld(l);
    if (res) z++;
}

console.log(z);
