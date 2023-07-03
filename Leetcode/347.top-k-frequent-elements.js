/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequency = {};
    for (let i = 0; i < nums.length; i++) {
        frequency[nums[i]] = frequency[nums[i]] ? frequency[nums[i]] + 1 : 1;
    }
    const frequencyArray = Object.keys(frequency).map(key => ({ key, value: frequency[key] }));
    frequencyArray.sort((a, b) => b.value - a.value);
    return frequencyArray.slice(0, k).map(item => item.key);
};

/*
this is a one line solution, but it is not efficient as the above solution
var topKFrequent = function(nums, k) {
    return Object.entries(nums.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    }
    , {})).sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0]);
};*/
// @lc code=end

