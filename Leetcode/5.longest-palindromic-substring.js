/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// Solution 2: Dynamic Programming
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    let max = 0;
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false));

    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }

    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            end = i + 1;
            max = 2;
        }
    }

    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i; j < s.length; j++) {
            if(s[i] === s[j] && (i + 1 >= s.length || j - 1 < 0 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if(j - i + 1 > max) {
                    max = j - i + 1;
                    start = i;
                    end = j;
                }
            }
        }
    }
    
    return s.slice(start, end + 1);
};

// @lc code=end

// Solution 1: Two Pointers
// var isPalindrome = function(s) {
//     let left = 0;
//     let right = s.length - 1;
//     while(left < right) {
//         if(s[left] !== s[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// var longestPalindrome = function(s) {
//     let max = 0;
//     let result = '';
//     for(let i = 0; i < s.length; i++) {
//         for(let j = i; j < s.length; j++) {
//             let sub = s.slice(i, j + 1);
//             if(isPalindrome(sub) && sub.length > max) {
//                 max = sub.length;
//                 result = sub;
//             }
//         }
//     }
//     return result;
// };

