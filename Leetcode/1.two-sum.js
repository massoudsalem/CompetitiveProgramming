/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let sorted = [...nums].sort((a, b) => a - b);
    while (left < right) {
        let sum = sorted[left] + sorted[right];
        if (sum === target) {
            return [nums.indexOf(sorted[left]), nums.lastIndexOf(sorted[right])];
        }
        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end