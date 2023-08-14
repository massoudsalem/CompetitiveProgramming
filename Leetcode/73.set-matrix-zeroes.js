/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var isValid = function(matrix, i, j) {
    return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length;
}

var getRowsAndCols = function(matrix) {
    let rows = new Set();
    let cols = new Set();

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    return [rows, cols];
}


var setZeroes = function(matrix) {
    let [rows, cols] = getRowsAndCols(matrix);
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    
    return matrix;
};
// @lc code=end

