/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < s.length) {
        if(s.slice(left, right).includes(s[right])) {
            left++;
        } else {
            max = Math.max(max, right - left + 1);
            right++;
        }
    }
    return max;    
};
/* another solution
var lengthOfLongestSubstring = function(s) {

    let left = 0;

    let right = 0;

    let max = 0;

    let set = new Set();

    while (right < s.length) {

        if (!set.has(s[right])) {

            set.add(s[right]);

            max = Math.max(max, set.size);

            right++;

        } else {

            set.delete(s[left]);

            left++;

        }

    }

    return max;    

}; */
// @lc code=end

