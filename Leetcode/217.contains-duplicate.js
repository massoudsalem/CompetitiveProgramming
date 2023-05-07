/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let freq = {};
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = freq[nums[i]] ? freq[nums[i]] + 1 : 1;
        if (freq[nums[i]] > 1) return true;
    }
    return false;
};
// @lc code=end

