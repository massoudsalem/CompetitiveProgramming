/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    return Array.from({length: nums.length}, (v, i) => i + 1).filter(x => !nums.includes(x));
};
// @lc code=end

