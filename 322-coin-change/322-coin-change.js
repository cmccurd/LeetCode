/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var memo = {};
    memo[0] = 0;
    
    for (var i = 1; i <= amount; i++) {
        memo[i] = Infinity;
        for (var c of coins) {
            if (c === i) {
                memo[i] = 1;
            } else if (c < i) {
                memo[i] = Math.min(memo[i], 1 + memo[i-c])
            }
        }
    }
    return memo[amount] === Infinity ? -1 : memo[amount]
};