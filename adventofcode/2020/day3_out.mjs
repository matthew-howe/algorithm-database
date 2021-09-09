import input from './day3_in.mjs';

let levels = input.split('\n');
let length = levels.length;
let lvllen = levels[0].length;

let paths = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
let counts = [];

for (let i = 0; i < paths.length; i++) {
  let x = paths[i][0];
  let y = paths[i][1];
  let xpos = paths[i][0];
  let count = 0;
  for (let j = y; j < length; j += y) {
    let curlvl = levels[j];
    if (curlvl[xpos] === '#') count++;
    xpos = (xpos + x) % lvllen
  }
  counts.push(count);
}


console.log(counts);
console.log(paths);
console.log(counts.reduce((a, el) => a * el))
