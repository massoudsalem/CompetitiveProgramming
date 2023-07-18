/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// Solution 2: Dynamic Programming iterative
var climbStairs = function(n) {
    let dp = [1, 2];

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n - 1];
};

// Solution 1: Dynamic Programming Memoization
// var dp = [];
// var climbStairs = function(n) {
//     if (n <= 0) return 0;
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     if (dp[n]) return dp[n];
    
//     var result = climbStairs(n - 1) + climbStairs(n - 2);
//     dp[n] = result;

//     return result;
// };
// @lc code=end

