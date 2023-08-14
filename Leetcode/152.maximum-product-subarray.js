/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2: DP using two variables
var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = max;
        max = Math.max(max * nums[i], min * nums[i], nums[i]);
        min = Math.min(temp * nums[i], min * nums[i], nums[i]);
        result = Math.max(result, max);
    }
    return result;
};

// Solution 1: DP using Table
// var maxProduct = function(nums) {
//     let dp = [];
//     // min is the largest negative number it's product 
//     // with a negative number may be the largest positive number
//     dp[0] = {max: nums[0], min: nums[0]};
//     let max = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         dp[i] = {
//             max: Math.max(dp[i-1].max * nums[i], dp[i-1].min * nums[i], nums[i]),
//             min: Math.min(dp[i-1].max * nums[i], dp[i-1].min * nums[i], nums[i])
//         };
//         max = Math.max(max, dp[i].max);
//     }
//     return max;
// };
// @lc code=end

