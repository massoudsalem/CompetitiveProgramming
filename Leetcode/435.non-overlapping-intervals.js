/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

const { is } = require("immutable");

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var isOverlap = function(a, b) {
    return a[1] > b[0];
}

var eraseOverlapIntervals = function(intervals) {
    let result = [];
    let count = 0;
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        if (result.length === 0) {
            result.push(intervals[i]);
        } else {
            if (isOverlap(result[result.length - 1], intervals[i])) {
                count++;
                if (result[result.length - 1][1] > intervals[i][1]) {
                    result[result.length - 1] = intervals[i];
                }
            } else {
                result.push(intervals[i]);
            }
        }
    }
    return count;
};
// @lc code=end

