/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Solution 2: Tabulation (Bottom-Up)
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let word of wordDict) {
            if (word.length <= i) {
                if (dp[i - word.length] && s.slice(i - word.length, i) === word) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }

    return dp[s.length];
};

// @lc code=end

// Solution 1: Memoization (Top-Down)
// var wordBreak = function (s, wordDict) {
//   let memo = {};

//   function helper(s, wordDict, memo) {
//     if (s === '') return true;
//     if (memo[s] !== undefined) return memo[s];
//     for (let i = 0; i < wordDict.length; i++) {
//       let word = wordDict[i];
//       if (s.startsWith(word)) {
//         let res = helper(s.slice(word.length), wordDict, memo);
//         if (res) {
//           return (memo[s] = true);
//         }
//       }
//     }
//     return (memo[s] = false);
//   }

//   return helper(s, wordDict, memo);
// };
