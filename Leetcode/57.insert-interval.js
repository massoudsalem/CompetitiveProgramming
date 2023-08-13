/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var isOverlap = function(interval1, interval2) {
    return interval1[0] <= interval2[1] && interval2[0] <= interval1[1];
}

var insert = function(intervals, newInterval) {
    let result = [];
    for(let interval of intervals) {
        if(!isOverlap(interval, newInterval)) {
            result.push(interval);
        } else {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
        }
    }
    result.push(newInterval);
    result.sort((a, b) => a[0] - b[0]);
    return result;
};
// @lc code=end

