/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let buyingDay = 0;
    let sellingDay = 1;
    while (sellingDay < prices.length) {
        if (prices[buyingDay] < prices[sellingDay]) {
            maxProfit = Math.max(maxProfit, prices[sellingDay] - prices[buyingDay]);
        } else {
            buyingDay = sellingDay;
        }
        sellingDay++;
    }
    return maxProfit;    
};
// @lc code=end

