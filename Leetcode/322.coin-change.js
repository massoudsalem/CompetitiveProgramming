/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Solution 2: Tabulation (Bottom-Up)
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

// Solution 1: Memoization (Top-Down)
// var coinChange = function(coins, amount) {
//     let memo = {};
//     return helper(coins, amount, memo);

//     function helper(coins, amount, memo) {
//         if (amount === 0) return 0;
//         if (amount < 0) return -1;
//         if (memo[amount]) return memo[amount];

//         let min = Infinity;
//         for (let i = 0; i < coins.length; i++) {
//             let res = helper(coins, amount - coins[i], memo);
//             if (res >= 0 && res < min) {
//                 min = res + 1;
//             }
//         }

//         memo[amount] = min === Infinity ? -1 : min;
//         return memo[amount];
//     }
// };

