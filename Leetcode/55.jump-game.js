/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Solution 1: Memoization
var canJump = function(nums) {
    let target = nums.length - 1;
    let memo = Array(nums.length).fill(-1);

    function jump(index) {
        if (index >= target) return true;
        if (nums[index] === 0) return false;
        if (memo[index] !== -1) return memo[index];
        
        for (let i = 1; i <= nums[index]; i++) {
            if (jump(index + i)) return memo[index + i] = true;
        }

        return memo[index] = false;
    }

    return jump(0);
};
// @lc code=end

