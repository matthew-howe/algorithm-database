// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
        swapOuterRing(matrix, j)
    }
};


const swapOuterRing = (matrix, j) => {
        for (let i = 0; i < matrix.length - 1 - (Math.floor(j * 2)); i++) {
        let coords = [
            matrix[0 + j][i + j],
            matrix[i + j][matrix.length - 1 - j],
            matrix[matrix.length - 1 - j][matrix.length - 1 - i - j],
            matrix[matrix.length - 1 - i - j][0 + j]
        ]
        let swappedCoords = swap(coords[0], coords[1], coords[2], coords[3])
        
            matrix[0 + j][i + j] = swappedCoords[0]
            matrix[i + j][matrix.length - 1 - j] = swappedCoords[1]
            matrix[matrix.length - 1 - j][matrix.length - 1 - i - j] = swappedCoords[2]
            matrix[matrix.length - 1 - i - j][0 + j] = swappedCoords[3]
    }
}

const swap = (a, b, c, d) => {
    return [d, a, b, c]
}
