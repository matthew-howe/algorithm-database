/**
 * @param {string} s
 * @param {number} numcols
 * @return {string}
 */
var convert = function(s, numRows) {
    let y = 0;
    let matrix = [];
    for (let i = 0; i < s.length; i++) {
        if (numRows-1 % y === 0) {
            let ns = '';
            for (let j = 0; j < numRows; j++) {
                let z = i + j;
                ns += s[z];
            }
            matrix.push(createFullCol(ns, numRows))
            y++;
            i += numRows-1;
        } else {
            let ny = y % 3;
            matrix.push(createZigCol(s[i], numRows, numRows-y))
            y++
        }
    } 

    console.log(matrix)
};

function createFullCol(s, l) {
    const col = new Array(l);
    for (let i = 0; i < s.length; i++) {
        col[i] = s[i]
    }
    return col;
}

function createZigCol(s, l, i) {
    const col = new Array(l);
    col[i] = s; 
    return col;
}

console.log(convert("PAYPALISHIRING", 4))
