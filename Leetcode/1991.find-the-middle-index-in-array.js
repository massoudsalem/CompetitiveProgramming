/*
 * @lc app=leetcode id=1991 lang=javascript
 *
 * [1991] Find the Middle Index in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// Approach 3: Optimized with one prefix sum array
var findMiddleIndex = function(nums) {
    const descPrefixSumArray = nums.reduce((acc, num) => {
        acc.push(acc[acc.length - 1] + num);
        return acc;
    }, [0]);
    const ascPrefixSumArray = nums.reduce((acc, num) => {
        acc.push(acc[acc.length - 1] + num);
        return acc;
    }, [0]);
    for (let i = 0; i < nums.length; i++) {
        if (descPrefixSumArray[i] === ascPrefixSumArray[nums.length] - ascPrefixSumArray[i + 1]) {
            return i;
        }
    }
    return -1;
};
// Approach 2: Optimized
// var findMiddleIndex = function(nums) {
//     const sum = nums.reduce((acc, num) => acc + num, 0);
//     let leftSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (leftSum === sum - leftSum - nums[i]) {
//             return i;
//         }
//         leftSum += nums[i];
//     }
//     return -1;
// };
// Approach 1: prefix sum
// var findMiddleIndex = function(nums) {
//    const prefixSumArray = nums.reduce((acc, num) => {
//          acc.push(acc[acc.length - 1] + num);
//          return acc;
//     }, [0]);
//     function getSum(start, end) {
//         return prefixSumArray[end + 1] - prefixSumArray[start];
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (getSum(0, i - 1) === getSum(i + 1, nums.length - 1)) {
//             return i;
//         }
//     }
//     return -1;
// };
// @lc code=end

