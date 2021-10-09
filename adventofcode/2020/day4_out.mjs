import fs from "fs";

let rawinput = fs.readFileSync(
  "/Users/mh/jobs/algorithms/adventofcode/2020/day4_in.txt",
  "utf8"
);

let ids = rawinput.split('\n\n');
let idslen = ids.length;
let fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
let validCount = 0;

for (let i = 0; i < idslen; i++) {
  let id = ids[i].split('\n').join(' ').split(' ');
  let count = 0;
  let idfields = [];
  for (let field of id) {
    let fieldname = field.split(':')[0]
    if (fieldname !== 'cid') idfields.push(fieldname);
  }
  if (fields.every(fld => idfields.includes(fld))) validCount++;
}

console.log(validCount);
