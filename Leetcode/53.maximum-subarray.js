/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2: Divide and Conquer
var maxSubArray = function(nums) {
    return divideAndConquer(nums, 0, nums.length - 1);
    function divideAndConquer(nums, left, right) {
        if (left === right) return nums[left];
        let mid = Math.floor((left + right) / 2);
        let leftSum = divideAndConquer(nums, left, mid);
        let rightSum = divideAndConquer(nums, mid + 1, right);
        let crossSum = cross(nums, left, right, mid);
        return Math.max(leftSum, rightSum, crossSum);
    }
    function cross(nums, left, right, mid) {
        if (left === right) return nums[left];
        let leftSum = -Infinity;
        let sum = 0;
        for (let i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }
        let rightSum = -Infinity;
        sum = 0;
        for (let i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }
        return leftSum + rightSum;
    }
};

// @lc code=end


// Solution 1: Kadane's Algorithm
// var maxSubArray = function(nums) {
//     let max = nums[0];
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum = Math.max(sum + nums[i], nums[i]);
//         max = Math.max(max, sum);
//     }
//     return max;
// };

