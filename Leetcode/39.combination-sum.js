/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  (function backtracking(holderArray = [], sum = 0, index = 0) {
    if (sum === target) {
      result.push(holderArray.slice());
      return;
    }
    if (sum > target) {
      return;
    }
    // start from index to avoid duplicate
    for (let i = index; i < candidates.length; i++) {
      holderArray.push(candidates[i]); // do
      backtracking(holderArray, sum + candidates[i], i); // recurse
      holderArray.pop(); // undo
    }
  })();

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end
