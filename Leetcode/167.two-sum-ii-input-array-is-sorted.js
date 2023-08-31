/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


//Solution 3: Hash Table
var twoSum = function(numbers, target) {
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (map.has(target - numbers[i])) {
            return [map.get(target - numbers[i]) + 1, i + 1];
        } else {
            map.set(numbers[i], i);
        }
    }
    return [];
};

// //Solution 2: Binary Search
// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         let left = i + 1, right = numbers.length - 1;
//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);
//             if (numbers[mid] === target - numbers[i]) {
//                 return [i + 1, mid + 1];
//             } else if (numbers[mid] > target - numbers[i]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//     }
//     return [];
// };

//Solution 1: Two pointers
// var twoSum = function(numbers, target) {
//     let left = 0, right = numbers.length - 1;
//     while (left < right) {
//         if (numbers[left] + numbers[right] === target) {
//             return [left + 1, right + 1];
//         } else if (numbers[left] + numbers[right] > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }
//     return [];
// };
// @lc code=end

