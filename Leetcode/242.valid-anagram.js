/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const ss = s.split("").sort().join("");
    const tt = t.split("").sort().join("");
    return ss == tt;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end