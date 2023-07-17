/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const isValid = (i, j) =>
    i >= 0 && i < board.length && j >= 0 && j < board[0].length;
  const getNeighbors = (i, j) => {
    let neighbors = [];
    if (isValid(i - 1, j)) neighbors.push([i - 1, j]);
    if (isValid(i + 1, j)) neighbors.push([i + 1, j]);
    if (isValid(i, j - 1)) neighbors.push([i, j - 1]);
    if (isValid(i, j + 1)) neighbors.push([i, j + 1]);
    return neighbors;
  };

  const dfs = function (board, i, j, word) {
    if (word.length === 1 && board[i][j] === word) return true;
    if (board[i][j] !== word[0] || board[i][j] === '#') return false;
    let temp = board[i][j];
    board[i][j] = '#';
    let neighbors = getNeighbors(i, j);
    for (let [x, y] of neighbors) {
      if (dfs(board, x, y, word.slice(1))) return true;
    }
    board[i][j] = temp;
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++)
      if (dfs(board, i, j, word)) return true;
  }
  return false;
};
// @lc code=end
