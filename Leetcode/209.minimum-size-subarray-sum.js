/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLen = Infinity;
    while(right < n) {
        sum += nums[right];
        while(sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
        right++;
    }
    return minLen === Infinity ? 0 : minLen;
};

// var minSubArrayLen = function(target, nums) {
//     let n = nums.length;
//     let left = 0;
//     let sum = 0;
//     let minLen = Infinity;
//     for(let i = 0; i < n; i++) {
//         sum += nums[i];
//         while(sum >= target) {
//             minLen = Math.min(minLen, i - left + 1);
//             sum -= nums[left];
//             left++;
//         }
//     }
//     return minLen === Infinity ? 0 : minLen;
// };
// @lc code=end

