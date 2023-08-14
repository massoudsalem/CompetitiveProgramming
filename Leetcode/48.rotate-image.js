/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var swap = function(matrix, i, j, k, l) {
    [matrix[i][j], matrix[k][l]] = [matrix[k][l], matrix[i][j]];
}

var rotate = function(matrix) {
    let n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            swap(matrix, i, j, j, i);
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n/2; j++) {
            swap(matrix, i, j, i, n - j - 1);
        }
    }
    
    return matrix;
};
// @lc code=end

