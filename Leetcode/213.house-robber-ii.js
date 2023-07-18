/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    let dp1 = [0, nums[0]];
    let dp2 = [0, 0];
    for (let i = 1; i < nums.length; i++) {
        dp1[i+1] = Math.max(dp1[i], dp1[i-1] + nums[i]);
        dp2[i+1] = Math.max(dp2[i], dp2[i-1] + nums[i]);
    }
    return Math.max(dp1[nums.length-1], dp2[nums.length]);
};

// @lc code=end

// Solution 1: Dynamic Programming recursive
// var rob = function(nums) {
//     if (nums.length === 1) return nums[0];
//     function helper(i, j, dp){
//         if (i > j) return 0;
//         if (i in dp) return dp[i];
//         let output = Math.max(helper(i+1, j, dp), helper(i+2, j, dp) + nums[i]);
//         dp[i] = output;
//         return output;
//     }
//     return Math.max(helper(0, nums.length-2, {}), helper(1, nums.length-1, {}));
// };


