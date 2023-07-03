/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var product = function(nums) {
    return nums.reduce((a, b) => a * b);
}
// without division
var productExceptSelf = function(nums) {
    const productBefore = [];
    const productAfter = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        productBefore.push(product);
        product *= nums[i];
    }
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        productAfter[i] = product;
        product *= nums[i];
    }
    return nums.map((x, i) => productBefore[i] * productAfter[i]);
};


// using division
// var productExceptSelf = function(nums) {
//     const countZeros = nums.filter(x => x === 0).length;
//     if (countZeros > 1) return nums.map(x => 0);
//     if (countZeros === 1) return nums.map(x => x === 0 ? product(nums.filter(x => x !== 0)) : 0);
//     const productAll = product(nums);
//     return nums.map(x => productAll / x);
// };
// @lc code=end

