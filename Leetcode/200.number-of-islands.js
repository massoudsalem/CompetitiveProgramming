/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  var isValid = (i, j) =>
    i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;

  function connectedComponents(i, j) {
    if (!isValid(i, j) || grid[i][j] === '0') return;
    grid[i][j] = '0';
    connectedComponents(i - 1, j);
    connectedComponents(i + 1, j);
    connectedComponents(i, j - 1);
    connectedComponents(i, j + 1);
  }

  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      if (grid[i][j] === '1') {
        count++;
        connectedComponents(i, j);
      }

  return count;
};
// @lc code=end
