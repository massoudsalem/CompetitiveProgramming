/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var isOverlap = function(a, b) {
    return a[0] <= b[1] && b[0] <= a[1];
}

var merge = function(intervals) {
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        if (result.length === 0 || !isOverlap(result[result.length - 1], intervals[i])) {
            result.push(intervals[i]);
        } else {
            result[result.length - 1][0] = Math.min(result[result.length - 1][0], intervals[i][0]);
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        }
    }
    return result;
};
// @lc code=end

