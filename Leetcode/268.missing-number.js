/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
     let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ i ^ nums[i];
    }
    return xor ^ nums.length;
};
// @lc code=end

