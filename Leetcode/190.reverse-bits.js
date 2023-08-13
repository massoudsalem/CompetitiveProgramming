/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    for(let i = 0; i < 32; i++) {
        result = (result << 1) + (n & 1);
        n = n >>> 1;
    }
    // '>>> 0' is used to convert the result to an unsigned integer
    return result >>> 0;
};
// var reverseBits = function(n) {
//     return parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2);
// };
// @lc code=end

