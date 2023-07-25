/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Solution 2: DP
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for(let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for(let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
    
    return dp[m - 1][n - 1];
};
// @lc code=end


// Solution 1: Memoization
// var uniquePaths = function(m, n) {
//     let memo = new Array(m).fill(0).map(() => new Array(n).fill(0));

//     function helper(m, n){
//         if (m === 0 || n === 0) {
//             return 0;
//         }
//         if (m === 1 || n === 1) {
//             return 1;
//         }

//         if (memo[m - 1][n - 1] !== 0) {
//             return memo[m - 1][n - 1];
//         }

//         let result = helper(m - 1, n) + helper(m, n - 1);
//         return memo[m - 1][n - 1] = result;
//     }

//     return helper(m, n);
    
// };

