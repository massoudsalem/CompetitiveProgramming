/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// Solution 2: Tabulation
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(0));

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[text1.length][text2.length];
};

// Solution 1: Memoization
// i tried to solve it with array instead of map but it was slower whats make no sense to me
// i think it should be faster with array but the fill function is slow i guess
// var longestCommonSubsequence = function(text1, text2) {
//     const memo = new Map();
//     return helper(text1, text2, text1.length - 1, text2.length - 1, memo);3

//     function helper(text1, text2, i, j, memo) {
//         if (i < 0 || j < 0) return 0;

//         const key = i + ',' + j;

//         if (memo.has(key)) return memo.get(key);

//         let result;

//         if (text1[i] === text2[j]) {
//             result = helper(text1, text2, i - 1, j - 1, memo) + 1;
//         } else {
//             result = Math.max(helper(text1, text2, i, j - 1, memo), helper(text1, text2, i - 1, j, memo));
//         }

//         memo.set(key, result);
//         return result;
//     }
// };


// @lc code=end
