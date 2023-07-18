/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2: Dynamic Programming recursive
var rob = function(nums) {
    let dp = {};
    return helper(0, dp);
    function helper(i, dp) {
        if (i >= nums.length) return 0;
        if (i in dp) return dp[i];
        let output = Math.max(helper(i+1, dp), helper(i+2, dp) + nums[i]);
        dp[i] = output;
        return output;
    }    
};
    

// Solution 1: Dynamic Programming iterative
// var rob = function(nums) {
//     let dp = [];

//     dp[0] = 0;
//     dp[1] = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         dp[i+1] = Math.max(dp[i], dp[i-1] + nums[i]);
//     }

//     return dp[nums.length];
// };
// @lc code=end

