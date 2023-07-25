/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1: DP

var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length + 1).fill(1);
    let max = 1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;

};

// @lc code=end

// this solution should work but this problem is not optimized for all programming languages 
// so it will give MLE error from the nodejs engine
// i don't know how to report this issue to leetcode
// var lengthOfLIS = function(nums) {
//     if(nums.length === 0) {
//         return 0;
//     }
    
//     let max = 1;
//     let memo = new Array(nums.length).fill(null).map(() => new Array(nums.length).fill(-1));
    
//     function helper(currIndex, prevIndex) {
//         if(currIndex === nums.length) {
//             return 0;
//         }
        
//         if(memo[currIndex][prevIndex + 1] !== -1) {
//             return memo[currIndex][prevIndex + 1];
//         }
        
//         let result = 0;
//         if(prevIndex === -1 || nums[currIndex] > nums[prevIndex]) {
//             result = 1 + helper(currIndex + 1, currIndex);
//         }
//         result = Math.max(result, helper(currIndex + 1, prevIndex));
        
//         memo[currIndex][prevIndex + 1] = result;
//         return result;
//     }
    
//     for(let i = 0; i < nums.length; i++) {
//         max = Math.max(max, helper(i, -1));
//     }
    
//     return max;
// };
