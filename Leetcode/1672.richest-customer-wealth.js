/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum, res =-1;
    for(let i = 0; i < accounts.length; i++) {
        sum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
         sum+= accounts[i][j];
         if (sum > res){
             res = sum;
         }
        }
    }
    return res;
};
// @lc code=end

