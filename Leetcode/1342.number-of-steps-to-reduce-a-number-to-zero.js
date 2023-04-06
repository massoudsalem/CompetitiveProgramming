/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let i=0;
   while(num){
    num = Math.trunc(num%2 == 0? num/2:num-1);
    i++;
   }
   return i;
};
// @lc code=end

