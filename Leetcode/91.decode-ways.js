/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = new Array(s.length + 1).fill(0);

    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;

    for (let i = 2; i <= s.length; i++) {
        let oneDigit = Number(s.slice(i - 1, i));
        let twoDigit = Number(s.slice(i - 2, i));

        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }

        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
};
// @lc code=end

