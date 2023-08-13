/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var bitsOf = function(n) {
    let count = 0;
    while(n != 0) {
        count += n & 1;
        n = n >>> 1;
    }
    return count;
};

var countBits = function(n) {
    let result = [];
    for(let i = 0; i <= n; i++) {
        result.push(bitsOf(i));
    }
    return result;
};
// @lc code=end

