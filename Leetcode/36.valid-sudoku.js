/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var checkRow = function(board, row) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        if (board[row][i] !== '.') {
            if (set.has(board[row][i])) {
                return false;
            } else {
                set.add(board[row][i]);
            }
        }
    }
    return true;
}
var checkCol = function(board, col) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        if (board[i][col] !== '.') {
            if (set.has(board[i][col])) {
                return false;
            } else {
                set.add(board[i][col]);
            }
        }
    }
    return true;
}

var checkSquare = function(board, row, col) {
    let set = new Set();
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            if (board[i][j] !== '.') {
                if (set.has(board[i][j])) {
                    return false;
                } else {
                    set.add(board[i][j]);
                }
            }
        }
    }
    return true;
}

var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        if (!checkRow(board, i) || !checkCol(board, i)) {
            return false;
        }
    }
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!checkSquare(board, i, j)) {
                return false;
            }
        }
    }
    return true;
};
// @lc code=end

