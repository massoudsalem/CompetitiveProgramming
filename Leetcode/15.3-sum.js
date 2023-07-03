/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var binarySearchFromIndex = function(nums, target, index) {
    let left = index;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
    }
    return -1;
}

var isNotDuplicate = function(result, target) {
    for (let i = 0; i < result.length; i++) {
        if (result[i][0] === target[0] && result[i][1] === target[1] && result[i][2] === target[2]) {
            return false;
        }
    }
    return true;
}

var threeSum = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < sortedNums.length - 1; i++) {
        const target = sortedNums[i];
        let left = i + 1;
        let right = sortedNums.length - 1;
        while (left < right) {
            const sum = sortedNums[left] + sortedNums[right] + target;
            if (sum === 0) {
                const targetArray = [target, sortedNums[left], sortedNums[right]];
                if (isNotDuplicate(result, targetArray)) {
                    result.push(targetArray);
                }
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};
// another solution
// var threeSum = function(nums) {
//     const sortedNums = nums.sort((a, b) => a - b);
//     const result = [];
//     for (let i = 0; i < sortedNums.length - 1; i++) {
//         for(let j = i + 1; j < sortedNums.length - 1; j++) {
//             const target = 0 - sortedNums[i] - sortedNums[j];
//             const index = binarySearchFromIndex(sortedNums, target, j + 1);
//             if (index !== -1) {
//                 const targetArray = [sortedNums[i], sortedNums[j], sortedNums[index]];
//                 if (isNotDuplicate(result, targetArray)) {
//                     result.push(targetArray);
//                 }
//             }            
//         }
//     }
//     return result;
// };
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end