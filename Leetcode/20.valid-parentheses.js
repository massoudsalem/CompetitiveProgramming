/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for (let char of s) {
        if(char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (char === ')' && last !== '(') return false;
            if (char === '}' && last !== '{') return false;
            if (char === ']' && last !== '[') return false;
        }
    }
    return stack.length === 0;    
};
// @lc code=end

