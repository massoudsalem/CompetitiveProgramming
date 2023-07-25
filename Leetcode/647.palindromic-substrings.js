/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false));
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }

    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
        }
    }

    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i; j < s.length; j++) {
            if(s[i] === s[j] && (i + 1 >= s.length || j - 1 < 0 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
        }
    }

    dp.forEach(row => {
        row.forEach(word => {
            if(word) {
                count++;
            }
        });
    });
    
    return count;
};
// @lc code=end

