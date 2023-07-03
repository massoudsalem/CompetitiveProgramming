/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const existArray = nums.reduce((acc, x) => {
        acc[x] = true;
        return acc;
    }
    , {});
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (existArray[nums[i] - 1]) continue;
        let count = 0;
        while (existArray[nums[i] + count]) count++;
        max = Math.max(max, count);
    }
    return max;    
};
// @lc code=end

